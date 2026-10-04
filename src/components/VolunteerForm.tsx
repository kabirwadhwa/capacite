"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Sparkles, ArrowRight } from "lucide-react";

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
    "Data & Security",
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
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="ceartas-card rounded-3xl p-8 text-center animate-fade-in border-2 border-[#FF1BA3]">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] text-[#FF1BA3] mb-4 shadow-md shadow-[#FF1BA3]/20">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] text-[#FF1BA3] text-xs font-extrabold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Profile Registered</span>
        </div>
        <h4 className="text-xl font-black text-foreground tracking-tight">
          Welcome to the Volunteer Network.
        </h4>
        <p className="mt-3 text-xs sm:text-sm text-foreground/75 leading-relaxed max-w-sm mx-auto font-medium">
          Thank you for offering your skills. We review profiles on a rolling basis and will reach out when matching civic-tech sprints kick off.
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
          className="mt-6 ceartas-btn-secondary px-5 py-2 rounded-xl text-xs font-bold"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <div className="ceartas-card rounded-3xl p-6 sm:p-8 border border-[#FFC6E5] shadow-lg shadow-[#FF1BA3]/5">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="volunteer-name" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
            Your Name <span className="text-[#FF1BA3]">*</span>
          </label>
          <input
            type="text"
            id="volunteer-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Sarah Martin"
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3] ${
              errors.name ? "border-red-500" : "border-[#FFC6E5]"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="volunteer-email" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
            Email Address <span className="text-[#FF1BA3]">*</span>
          </label>
          <input
            type="email"
            id="volunteer-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sarah@example.com"
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3] ${
              errors.email ? "border-red-500" : "border-[#FFC6E5]"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email}</p>}
        </div>

        {/* Skills Selector */}
        <div>
          <span className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
            Skills & Domain Expertise <span className="text-[#FF1BA3]">*</span>
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {availableSkills.map((skill) => {
              const isChecked = formData.skills.includes(skill);
              return (
                <button
                  type="button"
                  key={skill}
                  onClick={() => handleCheckboxChange(skill)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    isChecked
                      ? "bg-[#FF1BA3] text-white border-[#FF1BA3] shadow-sm shadow-[#FF1BA3]/30"
                      : "bg-[#FFE5F2]/40 text-foreground/80 border-[#FFC6E5] hover:bg-[#FFE5F2]"
                  }`}
                >
                  {skill}
                </button>
              );
            })}
          </div>
          {errors.skills && (
            <p className="mt-2 text-xs text-red-500 font-semibold">{errors.skills[0]}</p>
          )}
        </div>

        {/* Link */}
        <div>
          <label htmlFor="volunteer-link" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
            GitHub, Portfolio, or LinkedIn
          </label>
          <input
            type="url"
            id="volunteer-link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://github.com/yourhandle"
            className="w-full px-4 py-2.5 rounded-xl border border-[#FFC6E5] bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3]"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="volunteer-message" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
            Why do you want to volunteer with Capacité?
          </label>
          <textarea
            id="volunteer-message"
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your background and what civic impact problems interest you..."
            className="w-full px-4 py-2.5 rounded-xl border border-[#FFC6E5] bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3]"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="ceartas-btn-primary w-full py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold tracking-tight inline-flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting Application...
              </>
            ) : (
              <>
                Join as a volunteer
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
