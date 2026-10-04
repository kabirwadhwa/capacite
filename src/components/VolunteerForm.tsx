'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Field, inputStyles } from './ui/Field';
import { Checkbox } from './ui/Checkbox';
import { Alert } from './ui/Alert';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const availableSkills = [
  'Développement Web / Python / TypeScript',
  'Automatisation & No-Code (Make, n8n, Zapier)',
  'Ingénierie de prompt & IA générative',
  'Design UX / UI & Recherche utilisateur',
  'Data science & Analyse de données',
  'Cybersécurité & Conformité RGPD',
  'Gestion de projet & Cadrage associatif',
];

export default function VolunteerForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [hoursPerWeek, setHoursPerWeek] = useState(2);
  const [motivation, setMotivation] = useState('');
  const [linkedinOrPortfolio, setLinkedinOrPortfolio] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [mountedAt, setMountedAt] = useState<number>(Date.now());
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMountedAt(Date.now());
  }, []);

  const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (skills.length === 0) {
      setErrorMsg('Veuillez sélectionner au moins une compétence.');
      return;
    }

    setLoading(true);
    const fillDurationMs = Date.now() - mountedAt;

    try {
      const res = await fetch('/api/benevoles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          skills,
          hoursPerWeek: Number(hoursPerWeek),
          motivation,
          linkedinOrPortfolio: linkedinOrPortfolio || undefined,
          honeypot,
          fillDurationMs,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue lors de l'inscription.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Impossible d'enregistrer l'inscription pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 sm:p-12 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest mb-5">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink">
          Bienvenue dans le collectif\u00A0!
        </h3>
        <p className="mt-3 text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed">
          Merci pour votre proposition d’engagement bénévole. Nous allons examiner votre profil et un membre de l’équipe de coordination vous écrira très prochainement pour faire connaissance.
        </p>
        <p className="mt-2 text-xs text-muted">
          Un email de confirmation vous a été envoyé à <strong>{email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_vol">Anti robot</label>
        <input
          id="hp_vol"
          name="honeypot"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMsg && (
        <Alert variant="error" title="Attention">
          {errorMsg}
        </Alert>
      )}

      <div className="rounded-xl border border-line bg-white p-6 shadow-sm space-y-5">
        <h3 className="font-serif text-lg font-semibold text-ink border-b border-line pb-2">
          Vos coordonnées
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom et prénom" id="fullName" required>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Ex: Sarah Martin"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={inputStyles}
            />
          </Field>

          <Field label="Adresse email" id="email" required>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="sarah@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyles}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Disponibilité moyenne par semaine"
            id="hoursPerWeek"
            required
            hint="Même 2 heures par semaine font une réelle différence"
          >
            <select
              id="hoursPerWeek"
              name="hoursPerWeek"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className={inputStyles}
            >
              <option value={1}>1 heure / semaine</option>
              <option value={2}>2 heures / semaine</option>
              <option value={4}>4 heures / semaine</option>
              <option value={6}>6 heures / semaine</option>
              <option value={8}>8 heures ou plus / semaine</option>
            </select>
          </Field>

          <Field
            label="Lien LinkedIn, GitHub ou portfolio (facultatif)"
            id="linkedinOrPortfolio"
          >
            <input
              id="linkedinOrPortfolio"
              name="linkedinOrPortfolio"
              type="url"
              placeholder="https://github.com/votre-profil"
              value={linkedinOrPortfolio}
              onChange={(e) => setLinkedinOrPortfolio(e.target.value)}
              className={inputStyles}
            />
          </Field>
        </div>

        <div className="pt-2">
          <label className="block text-sm font-medium text-ink mb-2">
            Vos compétences techniques & méthodologiques <span className="text-clay">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {availableSkills.map((skill) => (
              <Checkbox
                key={skill}
                id={`skill-${skill}`}
                label={skill}
                checked={skills.includes(skill)}
                onChange={() => toggleSkill(skill)}
              />
            ))}
          </div>
        </div>

        <Field
          label="Quelques mots sur vos motivations"
          id="motivation"
          required
          hint="Pourquoi souhaitez-vous aider le secteur associatif ? Quels types de projets vous motivent particulièrement ?"
        >
          <textarea
            id="motivation"
            name="motivation"
            rows={4}
            required
            minLength={20}
            placeholder="Ex : Développeur depuis 5 ans, je souhaite mettre mes compétences au service d'associations luttant contre la précarité..."
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
            className={inputStyles}
          />
        </Field>
      </div>

      <p className="text-xs text-muted leading-relaxed">
        Vos données personnelles restent strictement au sein de l’équipe de coordination de Coup d’Épaule et ne sont transmises à aucun tiers.
      </p>

      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={loading}
          className="w-full sm:w-auto"
        >
          <span>Rejoindre le collectif bénévole</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </form>
  );
}
