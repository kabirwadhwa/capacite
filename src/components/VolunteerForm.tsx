"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

interface VolunteerState {
  name: string;
  email: string;
  skills: string[];
  link: string;
  message: string;
}

export default function VolunteerForm() {
  const [formData, setFormData] = useState<VolunteerState>({
    name: "",
    email: "",
    skills: [],
    link: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<VolunteerState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableSkills = [
    "AI / automation",
    "Software development",
    "Product management",
    "UX / design",
    "Project management",
    "Data",
    "Nonprofit operations",
  ];

  const validate = () => {
    const newErrors: Partial<VolunteerState> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.skills.length === 0) {
      newErrors.skills = ["Please select at least one skill area"];
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof VolunteerState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (skill: string) => {
    setFormData((prev) => {
      const skills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills };
    });
    if (errors.skills) {
      setErrors((prev) => ({ ...prev, skills: [] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#FAF9F5] border border-border-muted rounded-lg p-8 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-sage text-primary mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-serif italic text-foreground tracking-tight">
          Application Received
        </h4>
        <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-sm mx-auto">
          Thank you for joining our mission. We’ll review your background and reach out when the next cohort starts.
        </p>
        <button
          onClick={() => {
            setFormData({
              name: "",
              email: "",
              skills: [],
              link: "",
              message: "",
            });
            setIsSubmitted(false);
          }}
          className="mt-6 text-xs font-mono uppercase tracking-wider text-primary hover:underline"
        >
          Submit another application →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F5] border border-border-muted rounded-lg p-6 md:p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="volunteer-name" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="volunteer-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Sarah Martin"
            className={`w-full px-3.5 py-2.5 rounded border bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
              errors.name ? "border-red-600" : "border-border-muted"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="volunteer-email" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="volunteer-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sarah.martin@example.org"
            className={`w-full px-3.5 py-2.5 rounded border bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
              errors.email ? "border-red-600" : "border-border-muted"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        {/* Skills Selector */}
        <div>
          <span className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Areas of Expertise *
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {availableSkills.map((skill) => (
              <label
                key={skill}
                className="flex items-center space-x-3 p-2.5 rounded border border-border-muted bg-background hover:border-primary/40 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleCheckboxChange(skill)}
                  className="h-4 w-4 rounded border-border-muted text-primary focus:ring-primary/25 accent-primary"
                />
                <span className="text-xs text-foreground/85 font-medium">{skill}</span>
              </label>
            ))}
          </div>
          {errors.skills && (
            <p className="mt-2 text-xs text-red-600">{errors.skills[0]}</p>
          )}
        </div>

        {/* Link */}
        <div>
          <label htmlFor="volunteer-link" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            GitHub / Portfolio / LinkedIn
          </label>
          <input
            type="url"
            id="volunteer-link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://github.com/username"
            className="w-full px-3.5 py-2.5 rounded border border-border-muted bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="volunteer-message" className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Why do you want to volunteer with Capacité?
          </label>
          <textarea
            id="volunteer-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your background, tools you work with, and motivation..."
            className="w-full px-3.5 py-2.5 rounded border border-border-muted bg-background text-sm text-foreground placeholder:text-ink-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-background bg-primary hover:bg-[#152820] rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting Profile...
              </>
            ) : (
              "Join Volunteer Network →"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
