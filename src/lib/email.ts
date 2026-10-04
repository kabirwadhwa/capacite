export interface EmailPayload {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  textContent?: string;
  replyTo?: { email: string; name?: string };
}

export async function sendEmail(payload: EmailPayload): Promise<{ success: boolean; messageId?: string; simulated?: boolean }> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'contact@coupdepaule.fr';
  const senderName = 'Coup d’Épaule';

  if (!apiKey) {
    console.log('[Email Simulation] BREVO_API_KEY is not configured. Email details:');
    console.log(`To: ${payload.to.map((t) => t.email).join(', ')}`);
    console.log(`Subject: ${payload.subject}`);
    console.log(`Content:\n${payload.textContent || payload.htmlContent}`);
    return { success: true, simulated: true };
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: payload.to,
        subject: payload.subject,
        htmlContent: payload.htmlContent,
        textContent: payload.textContent,
        replyTo: payload.replyTo,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('[Brevo Error] Failed to send email via Brevo API:', res.status, errorText);
      return { success: false };
    }

    const data = await res.json();
    return { success: true, messageId: data.messageId };
  } catch (error) {
    console.error('[Brevo Error] Exception while sending email:', error);
    return { success: false };
  }
}

/**
 * Notify admin and send confirmation to association applicant
 */
export async function sendApplicationEmails(app: {
  id: string;
  association_name: string;
  contact_name: string;
  contact_email: string;
  contact_role: string;
  mission_theme: string;
  problem_description: string;
}) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'contact@coupdepaule.fr';

  // 1. Notification to the Coup d'Épaule team
  await sendEmail({
    to: [{ email: adminEmail, name: 'Équipe Coup d’Épaule' }],
    subject: `[Candidature Asso] ${app.association_name} (${app.mission_theme})`,
    replyTo: { email: app.contact_email, name: app.contact_name },
    htmlContent: `
      <h2>Nouvelle demande de diagnostic associatif</h2>
      <p><strong>Association :</strong> ${app.association_name}</p>
      <p><strong>Thème :</strong> ${app.mission_theme}</p>
      <p><strong>Contact :</strong> ${app.contact_name} (${app.contact_role}) - <a href="mailto:${app.contact_email}">${app.contact_email}</a></p>
      <hr/>
      <h3>Description du problème opérationnel :</h3>
      <p style="white-space: pre-wrap;">${app.problem_description}</p>
      <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://coupdepaule.fr'}/admin">Consulter dans l’inbox admin</a></p>
    `,
  });

  // 2. Confirmation to applicant
  await sendEmail({
    to: [{ email: app.contact_email, name: app.contact_name }],
    subject: `Coup d’Épaule — Réception de votre demande de diagnostic (${app.association_name})`,
    htmlContent: `
      <p>Bonjour ${app.contact_name},</p>
      <p>Nous vous confirmons la bonne réception de la demande de diagnostic pour votre association <strong>${app.association_name}</strong>.</p>
      <p>Un bénévole technique de notre collectif va examiner les éléments fournis sous 3 à 5 jours ouvrés. Si votre besoin correspond à notre cadre d’intervention, nous vous proposerons un créneau pour un premier échange en visio de 30 minutes.</p>
      <p>Pour rappel, l’ensemble de nos accompagnements est 100\u00A0% gratuit et bénévole.</p>
      <br/>
      <p>À très bientôt,<br/><strong>Le collectif Coup d’Épaule</strong><br/><a href="https://coupdepaule.fr">coupdepaule.fr</a></p>
    `,
  });
}

/**
 * Notify admin and send confirmation to volunteer
 */
export async function sendVolunteerEmails(volunteer: {
  id: string;
  full_name: string;
  email: string;
  skills: string;
  hours_per_week: number;
  motivation: string;
}) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'contact@coupdepaule.fr';

  await sendEmail({
    to: [{ email: adminEmail, name: 'Équipe Coup d’Épaule' }],
    subject: `[Bénévole Tech] Inscription de ${volunteer.full_name}`,
    replyTo: { email: volunteer.email, name: volunteer.full_name },
    htmlContent: `
      <h2>Nouvelle proposition de bénévolat technique</h2>
      <p><strong>Nom :</strong> ${volunteer.full_name}</p>
      <p><strong>Email :</strong> <a href="mailto:${volunteer.email}">${volunteer.email}</a></p>
      <p><strong>Disponibilité :</strong> ${volunteer.hours_per_week} h / semaine</p>
      <p><strong>Compétences :</strong> ${volunteer.skills}</p>
      <hr/>
      <h3>Motivation :</h3>
      <p style="white-space: pre-wrap;">${volunteer.motivation}</p>
    `,
  });

  await sendEmail({
    to: [{ email: volunteer.email, name: volunteer.full_name }],
    subject: `Coup d’Épaule — Bienvenue parmi les bénévoles !`,
    htmlContent: `
      <p>Bonjour ${volunteer.full_name},</p>
      <p>Merci chaleureusement pour votre proposition d’engagement bénévole auprès de Coup d’Épaule\u00A0!</p>
      <p>Nous rassemblons des profils techniques motivés pour accompagner des associations loi 1901 sur des cas concrets. Un membre de l’équipe de coordination prendra contact avec vous d’ici quelques jours pour faire connaissance et vous présenter nos projets en cours.</p>
      <br/>
      <p>Fraternellement,<br/><strong>Le collectif Coup d’Épaule</strong><br/><a href="https://coupdepaule.fr">coupdepaule.fr</a></p>
    `,
  });
}
