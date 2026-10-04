import { z } from 'zod';

export const ApplicationInputSchema = z.object({
  associationName: z
    .string()
    .min(2, "Le nom de l'association doit comporter au moins 2 caractères.")
    .max(150),
  rnaNumber: z
    .string()
    .regex(/^W\d{9}$|^[0-9]{9}$|^[0-9]{14}$/, "Numéro RNA (ex: W751234567) ou Siren/Siret invalide.")
    .optional()
    .or(z.literal('')),
  missionTheme: z
    .string()
    .min(2, "Veuillez sélectionner le domaine d'intervention."),
  locationDept: z
    .string()
    .regex(/^[0-9]{2,3}$|^2[AB]$/, "Numéro de département français (ex: 75, 93, 2A, 974).")
    .optional()
    .or(z.literal('')),
  locationCity: z
    .string()
    .max(100)
    .optional()
    .or(z.literal('')),
  teamSize: z
    .string()
    .optional()
    .or(z.literal('')),
  annualBudget: z
    .union([z.number(), z.string()])
    .optional()
    .transform((val) => (typeof val === 'string' && val.trim() ? Number(val.replace(/\s/g, '')) : typeof val === 'number' ? val : undefined)),
  contactName: z
    .string()
    .min(2, "Votre nom et prénom sont requis.")
    .max(100),
  contactRole: z
    .string()
    .min(2, "Votre rôle dans l'association est requis (ex: Directeur, Présidente, Trésorier).")
    .max(100),
  contactEmail: z
    .string()
    .email("Adresse email invalide.")
    .max(150),
  contactPhone: z
    .string()
    .max(30)
    .optional()
    .or(z.literal('')),
  problemDescription: z
    .string()
    .min(20, "Veuillez détailler votre tâche ou difficulté en au moins 20 caractères.")
    .max(2500),
  toolsUsed: z
    .string()
    .max(500)
    .optional()
    .or(z.literal('')),
  urgency: z
    .string()
    .max(50)
    .optional()
    .or(z.literal('')),
  honeypot: z
    .string()
    .max(0, "Tentative de spam détectée.")
    .optional()
    .or(z.literal('')),
  fillDurationMs: z
    .number()
    .min(3000, "Formulaire soumis trop rapidement (anti-robot).")
    .optional(),
});

export type ApplicationInput = z.infer<typeof ApplicationInputSchema>;

export const VolunteerInputSchema = z.object({
  fullName: z
    .string()
    .min(2, "Votre nom et prénom sont requis.")
    .max(100),
  email: z
    .string()
    .email("Adresse email invalide.")
    .max(150),
  skills: z
    .array(z.string())
    .min(1, "Veuillez cocher au moins une compétence."),
  hoursPerWeek: z
    .number()
    .min(1, "Veuillez indiquer au moins 1 heure par semaine.")
    .max(40, "Maximum 40 heures par semaine."),
  motivation: z
    .string()
    .min(20, "Veuillez décrire vos motivations en au moins 20 caractères.")
    .max(2000),
  linkedinOrPortfolio: z
    .string()
    .url("Lien web invalide.")
    .optional()
    .or(z.literal('')),
  honeypot: z
    .string()
    .max(0, "Tentative de spam détectée.")
    .optional()
    .or(z.literal('')),
  fillDurationMs: z
    .number()
    .min(3000, "Formulaire soumis trop rapidement (anti-robot).")
    .optional(),
});

export type VolunteerInput = z.infer<typeof VolunteerInputSchema>;
