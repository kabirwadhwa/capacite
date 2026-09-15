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
      <div className="bg-white border border-[#E4E4DE] rounded-[16px] p-8 text-center shadow-xs">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EBF2EE] text-[#315C4C] mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold text-[#181818] tracking-tight">
          Application Received
        </h4>
        <p className="mt-3 text-sm text-[#666660] leading-relaxed max-w-sm mx-auto">
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
          className="mt-6 text-sm font-medium text-[#315C4C] hover:underline"
        >
          Submit another application →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E4E4DE] rounded-[16px] p-6 sm:p-8 shadow-xs">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="volunteer-name" className="block text-xs font-semibold text-[#181818] mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            id="volunteer-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Sarah Martin"
            className={`w-full px-3.5 py-2.5 rounded-[8px] border bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C] ${
              errors.name ? "border-red-500" : "border-[#E4E4DE]"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="volunteer-email" className="block text-xs font-semibold text-[#181818] mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="volunteer-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sarah.martin@example.org"
            className={`w-full px-3.5 py-2.5 rounded-[8px] border bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C] ${
              errors.email ? "border-red-500" : "border-[#E4E4DE]"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        {/* Skills Selector */}
        <div>
          <span className="block text-xs font-semibold text-[#181818] mb-2">
            Areas of Expertise *
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {availableSkills.map((skill) => (
              <label
                key={skill}
                className="flex items-center space-x-2.5 p-2.5 rounded-[8px] border border-[#E4E4DE] bg-[#F7F7F4] hover:border-[#315C4C]/40 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleCheckboxChange(skill)}
                  className="h-4 w-4 rounded border-[#E4E4DE] text-[#315C4C] focus:ring-[#315C4C]/25 accent-[#315C4C]"
                />
                <span className="text-xs text-[#181818] font-medium">{skill}</span>
              </label>
            ))}
          </div>
          {errors.skills && (
            <p className="mt-2 text-xs text-red-600">{errors.skills[0]}</p>
          )}
        </div>

        {/* Link */}
        <div>
          <label htmlFor="volunteer-link" className="block text-xs font-semibold text-[#181818] mb-1.5">
            GitHub / Portfolio / LinkedIn
          </label>
          <input
            type="url"
            id="volunteer-link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://github.com/username"
            className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E4E4DE] bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C]"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="volunteer-message" className="block text-xs font-semibold text-[#181818] mb-1.5">
            Why do you want to volunteer with Capacité?
          </label>
          <textarea
            id="volunteer-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your background, tools you work with, and motivation..."
            className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E4E4DE] bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C]"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-[#315C4C] hover:bg-[#26493C] rounded-[8px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#315C4C]/40 disabled:opacity-70 disabled:cursor-not-allowed shadow-xs"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting profile...
              </>
            ) : (
              "Join volunteer network →"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
