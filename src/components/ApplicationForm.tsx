'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Field, inputStyles } from './ui/Field';
import { Alert } from './ui/Alert';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ApplicationFormData {
  associationName: string;
  rnaNumber: string;
  missionTheme: string;
  locationDept: string;
  locationCity: string;
  teamSize: string;
  annualBudget: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  contactPhone: string;
  problemDescription: string;
  toolsUsed: string;
  urgency: string;
  honeypot: string;
}

const initialData: ApplicationFormData = {
  associationName: '',
  rnaNumber: '',
  missionTheme: 'Solidarité & Action sociale',
  locationDept: '',
  locationCity: '',
  teamSize: '1 à 5 personnes',
  annualBudget: '',
  contactName: '',
  contactRole: '',
  contactEmail: '',
  contactPhone: '',
  problemDescription: '',
  toolsUsed: '',
  urgency: 'Dans les 3 mois',
  honeypot: '',
};

export default function ApplicationForm() {
  const [formData, setFormData] = useState<ApplicationFormData>(initialData);
  const [mountedAt, setMountedAt] = useState<number>(Date.now());
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMountedAt(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    const fillDurationMs = Date.now() - mountedAt;

    try {
      const res = await fetch('/api/candidatures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          annualBudget: formData.annualBudget ? Number(formData.annualBudget) : undefined,
          fillDurationMs,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue lors de l'envoi.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Impossible d'envoyer le formulaire pour le moment.");
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
          Demande de diagnostic bien reçue\u00A0!
        </h3>
        <p className="mt-3 text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed">
          Merci pour votre confiance. Un bénévole de Coup d’Épaule examinera votre dossier sous 3 à 5 jours ouvrés pour planifier un premier échange visio de 30 minutes.
        </p>
        <p className="mt-2 text-xs text-muted">
          Un email récapitulatif a été adressé à <strong>{formData.contactEmail}</strong>.
        </p>
        <div className="mt-8">
          <Button
            variant="outline"
            onClick={() => {
              setFormData(initialData);
              setMountedAt(Date.now());
              setSubmitted(false);
            }}
          >
            Déposer une autre demande
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field (hidden from humans) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_app">Ne pas remplir si vous êtes humain</label>
        <input
          id="hp_app"
          name="honeypot"
          type="text"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMsg && (
        <Alert variant="error" title="Erreur de validation">
          {errorMsg}
        </Alert>
      )}

      {/* Section 1: Association */}
      <div className="rounded-xl border border-line bg-white p-6 shadow-sm space-y-4">
        <h3 className="font-serif text-lg font-semibold text-ink border-b border-line pb-2">
          1. Votre association
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom de l’association" id="associationName" required>
            <input
              id="associationName"
              name="associationName"
              type="text"
              required
              placeholder="Ex: Les Amis de la Nature"
              value={formData.associationName}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>

          <Field
            label="Numéro RNA ou Siren (facultatif)"
            id="rnaNumber"
            hint="Ex: W751234567 ou numéro Siren à 9 chiffres"
          >
            <input
              id="rnaNumber"
              name="rnaNumber"
              type="text"
              placeholder="W..."
              value={formData.rnaNumber}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="Thème d’action" id="missionTheme" required>
            <select
              id="missionTheme"
              name="missionTheme"
              value={formData.missionTheme}
              onChange={handleChange}
              className={inputStyles}
            >
              <option value="Solidarité & Action sociale">Solidarité & Action sociale</option>
              <option value="Éducation & Jeunesse">Éducation & Jeunesse</option>
              <option value="Environnement & Climat">Environnement & Climat</option>
              <option value="Culture & Patrimoine">Culture & Patrimoine</option>
              <option value="Santé & Handicap">Santé & Handicap</option>
              <option value="Insertion & Emploi">Insertion & Emploi</option>
              <option value="Droits humains & Plaidoyer">Droits humains & Plaidoyer</option>
              <option value="Autre">Autre mission d’intérêt général</option>
            </select>
          </Field>

          <Field label="Département" id="locationDept" hint="Ex: 75, 93, 69, 13">
            <input
              id="locationDept"
              name="locationDept"
              type="text"
              placeholder="Ex: 75"
              maxLength={3}
              value={formData.locationDept}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>

          <Field label="Ville du siège" id="locationCity">
            <input
              id="locationCity"
              name="locationCity"
              type="text"
              placeholder="Ex: Paris, Lyon, Nantes"
              value={formData.locationCity}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Taille de l’équipe (salariés & bénévoles actifs)" id="teamSize">
            <select
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className={inputStyles}
            >
              <option value="1 à 5 personnes">1 à 5 personnes</option>
              <option value="6 à 15 personnes">6 à 15 personnes</option>
              <option value="16 à 30 personnes">16 à 30 personnes</option>
              <option value="Plus de 30 personnes">Plus de 30 personnes</option>
            </select>
          </Field>

          <Field label="Budget annuel approximatif (€)" id="annualBudget" hint="Permet d’évaluer vos éligibilités logicielles gratuites">
            <input
              id="annualBudget"
              name="annualBudget"
              type="number"
              placeholder="Ex: 85000"
              value={formData.annualBudget}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>
        </div>
      </div>

      {/* Section 2: Contact */}
      <div className="rounded-xl border border-line bg-white p-6 shadow-sm space-y-4">
        <h3 className="font-serif text-lg font-semibold text-ink border-b border-line pb-2">
          2. Votre contact
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom et prénom" id="contactName" required>
            <input
              id="contactName"
              name="contactName"
              type="text"
              required
              placeholder="Ex: Camille Dupont"
              value={formData.contactName}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>

          <Field label="Rôle dans l’association" id="contactRole" required>
            <input
              id="contactRole"
              name="contactRole"
              type="text"
              required
              placeholder="Ex: Directrice, Président, Chargé de mission"
              value={formData.contactRole}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Adresse email professionnelle ou associative" id="contactEmail" required>
            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              required
              placeholder="contact@votre-association.org"
              value={formData.contactEmail}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>

          <Field label="Numéro de téléphone (facultatif)" id="contactPhone">
            <input
              id="contactPhone"
              name="contactPhone"
              type="tel"
              placeholder="06 12 34 56 78"
              value={formData.contactPhone}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>
        </div>
      </div>

      {/* Section 3: Besoin */}
      <div className="rounded-xl border border-line bg-white p-6 shadow-sm space-y-4">
        <h3 className="font-serif text-lg font-semibold text-ink border-b border-line pb-2">
          3. Votre besoin opérationnel
        </h3>

        <Field
          label="Quel problème concret ou tâche répétitive souhaitez-vous résoudre\u00A0?"
          id="problemDescription"
          required
          hint="Décrivez ce qui prend trop de temps à votre équipe (ex: resaisie manuelle de formulaires, recherche de subventions, synthèse de rapports, envoi de reçus fiscaux...)"
        >
          <textarea
            id="problemDescription"
            name="problemDescription"
            rows={4}
            required
            minLength={20}
            placeholder="Ex : Nous passons environ 6 heures chaque semaine à recopier manuellement les inscriptions reçues sur HelloAsso vers notre tableur de suivi et à générer des attestations..."
            value={formData.problemDescription}
            onChange={handleChange}
            className={inputStyles}
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Outils actuellement utilisés (facultatif)" id="toolsUsed" hint="Ex: Excel, Google Drive, HelloAsso, Brevo, Notion...">
            <input
              id="toolsUsed"
              name="toolsUsed"
              type="text"
              placeholder="Excel, HelloAsso, Gmail..."
              value={formData.toolsUsed}
              onChange={handleChange}
              className={inputStyles}
            />
          </Field>

          <Field label="Horizon souhaité" id="urgency">
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className={inputStyles}
            >
              <option value="Dès que possible">Dès que possible</option>
              <option value="Dans le mois">Dans le mois</option>
              <option value="Dans les 3 mois">Dans les 3 mois</option>
              <option value="Simple veille / Pas d'urgence">Simple veille / Pas d’urgence</option>
            </select>
          </Field>
        </div>
      </div>

      {/* RGPD notice */}
      <p className="text-xs text-muted leading-relaxed">
        En envoyant ce formulaire, vous acceptez que Coup d’Épaule traite vos données exclusivement afin d’organiser l’appel de diagnostic. Vos données ne sont jamais vendues ni cédées. Conformément au RGPD, vous disposez d’un droit d’accès et d’effacement en écrivant à contact@coupdepaule.fr.
      </p>

      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={loading}
          className="w-full sm:w-auto"
        >
          <span>Envoyer la demande de diagnostic</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </form>
  );
}
