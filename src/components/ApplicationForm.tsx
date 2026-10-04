'use client';

import React, { useState, useEffect } from 'react';
import { Field, inputStyles } from './ui/Field';
import { Alert } from './ui/Alert';
import { CheckCircle2, ArrowRight, Loader2, Sparkles } from 'lucide-react';

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
      <div className="ceartas-card rounded-3xl p-8 sm:p-12 text-center animate-fade-in max-w-2xl mx-auto border-2 border-[#FF1BA3]">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] text-[#FF1BA3] mb-6 shadow-md shadow-[#FF1BA3]/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] text-[#FF1BA3] text-xs font-black uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Demande Reçue</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground">
          Demande de diagnostic bien reçue !
        </h3>
        <p className="mt-3 text-sm sm:text-base text-foreground/80 max-w-lg mx-auto leading-relaxed font-medium">
          Merci pour votre confiance. Un bénévole examinera votre dossier sous 3 à 5 jours ouvrés pour planifier un premier échange visio de 30 minutes.
        </p>
        <p className="mt-2 text-xs text-foreground/60 font-semibold">
          Un email récapitulatif a été adressé à <strong>{formData.contactEmail}</strong>.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              setFormData(initialData);
              setMountedAt(Date.now());
              setSubmitted(false);
            }}
            className="ceartas-btn-secondary px-6 py-3 text-sm font-bold rounded-xl cursor-pointer"
          >
            Déposer une autre demande
          </button>
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
      <div className="ceartas-card rounded-2xl p-6 sm:p-8 space-y-5 border border-[#FFC6E5] bg-white/95 backdrop-blur-sm">
        <div className="flex items-center space-x-2 border-b border-[#FFC6E5] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF1BA3]" />
          <h3 className="text-base font-black uppercase tracking-wider text-foreground">
            1. Votre association
          </h3>
        </div>

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
          <Field label="Taille de l’équipe (salariés & bénévoles)" id="teamSize">
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

          <Field label="Budget annuel approximatif (€)" id="annualBudget" hint="Évalue l'éligibilité aux quotas gratuits">
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
      <div className="ceartas-card rounded-2xl p-6 sm:p-8 space-y-5 border border-[#FFC6E5] bg-white/95 backdrop-blur-sm">
        <div className="flex items-center space-x-2 border-b border-[#FFC6E5] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF1BA3]" />
          <h3 className="text-base font-black uppercase tracking-wider text-foreground">
            2. Votre contact
          </h3>
        </div>

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
              placeholder="Ex: Directrice, Président, Trésorière"
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
      <div className="ceartas-card rounded-2xl p-6 sm:p-8 space-y-5 border border-[#FFC6E5] bg-white/95 backdrop-blur-sm">
        <div className="flex items-center space-x-2 border-b border-[#FFC6E5] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF1BA3]" />
          <h3 className="text-base font-black uppercase tracking-wider text-foreground">
            3. Votre besoin opérationnel
          </h3>
        </div>

        <Field
          label="Quel problème concret ou tâche répétitive souhaitez-vous résoudre ?"
          id="problemDescription"
          required
          hint="Décrivez ce qui prend trop de temps à votre équipe (saisie de formulaires, recherche de subventions, relances, attestations...)"
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
      <p className="text-xs text-foreground/60 leading-relaxed font-semibold">
        En envoyant ce formulaire, vous acceptez que Coup d’Épaule traite vos données exclusivement afin d’organiser l’appel de diagnostic. Vos données ne sont jamais vendues ni cédées.
      </p>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="ceartas-btn-primary w-full py-4 px-8 text-base font-black rounded-2xl flex items-center justify-center shadow-xl shadow-[#FF1BA3]/30 disabled:opacity-50 transition-all cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center">
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              Envoi en cours...
            </span>
          ) : (
            <span className="flex items-center">
              <span>Envoyer la demande de diagnostic gratuit</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
