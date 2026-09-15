"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

interface FormState {
  orgName: string;
  website: string;
  contactName: string;
  email: string;
  mission: string;
  teamSize: string;
  taskDescription: string;
  timeEstimate: string;
  sensitiveData: string;
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormState>({
    orgName: "",
    website: "",
    contactName: "",
    email: "",
    mission: "",
    teamSize: "",
    taskDescription: "",
    timeEstimate: "",
    sensitiveData: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!formData.orgName.trim()) newErrors.orgName = "Organisation name is required";
    if (!formData.contactName.trim()) newErrors.contactName = "Your name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.mission.trim()) newErrors.mission = "Organisation mission is required";
    if (!formData.taskDescription.trim()) newErrors.taskDescription = "Task description is required";
    if (!formData.timeEstimate.trim()) newErrors.timeEstimate = "Time estimation is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API call - easy to replace with Formspree, Supabase or Airtable endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#FAF9F5] border border-border-muted rounded-lg p-8 md:p-12 text-center animate-fade-in max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-sage text-primary mb-6">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-serif italic text-foreground tracking-tight">
          Application Received
        </h3>
        <p className="mt-4 text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
          Thank you. We’ll review your workflow bottleneck and get back to you within 5 business days.
        </p>
        <button
          onClick={() => {
            setFormData({
              orgName: "",
              website: "",
              contactName: "",
              email: "",
              mission: "",
              teamSize: "",
              taskDescription: "",
              timeEstimate: "",
              sensitiveData: "",
            });
            setIsSubmitted(false);
          }}
          className="mt-8 text-xs font-mono uppercase tracking-wider text-primary hover:underline"
        >
          Submit another response →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F5] border border-border-muted rounded-lg p-6 md:p-10 shadow-sm max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Org Name */}
          <div>
            <label htmlFor="orgName" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Organisation Name *
            </label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="e.g. Association Climat France"
              className={`w-full px-3.5 py-2.5 rounded border bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
                errors.orgName ? "border-red-600" : "border-border-muted"
              }`}
            />
            {errors.orgName && <p className="mt-1 text-xs text-red-600">{errors.orgName}</p>}
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.org"
              className="w-full px-3.5 py-2.5 rounded border border-border-muted bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Name */}
          <div>
            <label htmlFor="contactName" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              placeholder="Jean Dupont"
              className={`w-full px-3.5 py-2.5 rounded border bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
                errors.contactName ? "border-red-600" : "border-border-muted"
              }`}
            />
            {errors.contactName && <p className="mt-1 text-xs text-red-600">{errors.contactName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jean.dupont@example.org"
              className={`w-full px-3.5 py-2.5 rounded border bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
                errors.email ? "border-red-600" : "border-border-muted"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="md:col-span-2">
            <label htmlFor="mission" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Organisation Mission *
            </label>
            <textarea
              id="mission"
              name="mission"
              rows={3}
              value={formData.mission}
              onChange={handleChange}
              placeholder="Briefly describe what your organisation does..."
              className={`w-full px-3.5 py-2.5 rounded border bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
                errors.mission ? "border-red-600" : "border-border-muted"
              }`}
            />
            {errors.mission && <p className="mt-1 text-xs text-red-600">{errors.mission}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Team Size
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded border border-border-muted bg-background text-sm text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            >
              <option value="">Select size...</option>
              <option value="1-5">1 – 5 people</option>
              <option value="6-20">6 – 20 people</option>
              <option value="21-50">21 – 50 people</option>
              <option value="50+">50+ people</option>
            </select>
          </div>

          {/* Time Consumed */}
          <div>
            <label htmlFor="timeEstimate" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Estimated Time Lost Weekly *
            </label>
            <input
              type="text"
              id="timeEstimate"
              name="timeEstimate"
              value={formData.timeEstimate}
              onChange={handleChange}
              placeholder="e.g. 8–10 hours/week, 2 days/month"
              className={`w-full px-3.5 py-2.5 rounded border bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
                errors.timeEstimate ? "border-red-600" : "border-border-muted"
              }`}
            />
            {errors.timeEstimate && <p className="mt-1 text-xs text-red-600">{errors.timeEstimate}</p>}
          </div>
        </div>

        {/* Repetitive Task */}
        <div>
          <label htmlFor="taskDescription" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            What repetitive task consumes the most time for your team? *
          </label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            rows={4}
            value={formData.taskDescription}
            onChange={handleChange}
            placeholder="Explain the workflow, what is currently done manually, and where the bottleneck is..."
            className={`w-full px-3.5 py-2.5 rounded border bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
              errors.taskDescription ? "border-red-600" : "border-border-muted"
            }`}
          />
          {errors.taskDescription && <p className="mt-1 text-xs text-red-600">{errors.taskDescription}</p>}
        </div>

        {/* Sensitive Data */}
        <div>
          <label htmlFor="sensitiveData" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Sensitive Data Considerations (Optional)
          </label>
          <textarea
            id="sensitiveData"
            name="sensitiveData"
            rows={2}
            value={formData.sensitiveData}
            onChange={handleChange}
            placeholder="e.g. beneficiary health details, confidential case records, financial data..."
            className="w-full px-3.5 py-2.5 rounded border border-border-muted bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-background bg-primary hover:bg-[#152820] rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting Details...
              </>
            ) : (
              "Submit Diagnostic Request →"
            )}
          </button>
          <p className="text-[11px] text-center text-ink-muted mt-3">
            Free of charge · Confidential review · Response within 5 business days
          </p>
        </div>
      </form>
    </div>
  );
}
