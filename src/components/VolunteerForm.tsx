'use client';

import React, { useState, useEffect } from 'react';
import { Field, inputStyles } from './ui/Field';
import { Checkbox } from './ui/Checkbox';
import { Alert } from './ui/Alert';
import { CheckCircle2, ArrowRight, Loader2, Sparkles, Heart } from 'lucide-react';

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
      <div className="ceartas-card rounded-3xl p-8 sm:p-12 text-center animate-fade-in max-w-2xl mx-auto border-2 border-[#FF1BA3]">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] text-[#FF1BA3] mb-6 shadow-md shadow-[#FF1BA3]/20">
          <Heart className="w-8 h-8 fill-[#FF1BA3]" />
        </div>
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] text-[#FF1BA3] text-xs font-black uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bienvenue dans le collectif</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground">
          Merci pour votre engagement !
        </h3>
        <p className="mt-3 text-sm sm:text-base text-foreground/80 max-w-lg mx-auto leading-relaxed font-medium">
          Nous allons examiner votre profil et un membre de l’équipe de coordination vous écrira très prochainement pour faire connaissance.
        </p>
        <p className="mt-2 text-xs text-foreground/60 font-semibold">
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

      <div className="ceartas-card rounded-2xl p-6 sm:p-8 space-y-5 border border-[#FFC6E5] bg-white/95 backdrop-blur-sm">
        <div className="flex items-center space-x-2 border-b border-[#FFC6E5] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF1BA3]" />
          <h3 className="text-base font-black uppercase tracking-wider text-foreground">
            Vos coordonnées
          </h3>
        </div>

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
            label="Disponibilité moyenne"
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
            label="Lien LinkedIn ou portfolio (facultatif)"
            id="linkedinOrPortfolio"
          >
            <input
              id="linkedinOrPortfolio"
              name="linkedinOrPortfolio"
              type="url"
              placeholder="https://linkedin.com/in/..."
              value={linkedinOrPortfolio}
              onChange={(e) => setLinkedinOrPortfolio(e.target.value)}
              className={inputStyles}
            />
          </Field>
        </div>

        <div className="pt-2">
          <label className="block text-xs font-black uppercase tracking-wider text-foreground mb-3">
            Vos compétences clés <span className="text-[#FF1BA3]">*</span>
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
          hint="Pourquoi souhaitez-vous aider le secteur associatif ? Quels types de projets vous motivent ?"
        >
          <textarea
            id="motivation"
            name="motivation"
            rows={4}
            required
            minLength={20}
            placeholder="Ex : Développeur depuis 5 ans, je souhaite mettre mes compétences au service d'associations d'intérêt général..."
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
            className={inputStyles}
          />
        </Field>
      </div>

      <p className="text-xs text-foreground/60 leading-relaxed font-semibold">
        Vos données restent strictement protégées au sein de l’équipe de coordination et ne sont transmises à aucun tiers.
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
              Inscription en cours...
            </span>
          ) : (
            <span className="flex items-center">
              <span>Rejoindre le collectif bénévole</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
