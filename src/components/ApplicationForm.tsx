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
      <div className="bg-white border border-[#E4E4DE] rounded-[16px] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xs">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EBF2EE] text-[#315C4C] mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-[#181818] tracking-tight">
          Application Received
        </h3>
        <p className="mt-3 text-[#666660] text-sm leading-relaxed max-w-md mx-auto">
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
          className="mt-6 text-sm font-medium text-[#315C4C] hover:underline"
        >
          Submit another response →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E4E4DE] rounded-[16px] p-6 sm:p-10 shadow-xs max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Org Name */}
          <div>
            <label htmlFor="orgName" className="block text-xs font-semibold text-[#181818] mb-1.5">
              Organisation Name *
            </label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="e.g. Climat & Solidarité"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C] ${
                errors.orgName ? "border-red-500" : "border-[#E4E4DE]"
              }`}
            />
            {errors.orgName && <p className="mt-1 text-xs text-red-600">{errors.orgName}</p>}
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block text-xs font-semibold text-[#181818] mb-1.5">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.org"
              className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E4E4DE] bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Contact Name */}
          <div>
            <label htmlFor="contactName" className="block text-xs font-semibold text-[#181818] mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              placeholder="Elena Rossi"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C] ${
                errors.contactName ? "border-red-500" : "border-[#E4E4DE]"
              }`}
            />
            {errors.contactName && <p className="mt-1 text-xs text-red-600">{errors.contactName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#181818] mb-1.5">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="elena@example.org"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C] ${
                errors.email ? "border-red-500" : "border-[#E4E4DE]"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        {/* Mission */}
        <div>
          <label htmlFor="mission" className="block text-xs font-semibold text-[#181818] mb-1.5">
            Organisation Mission *
          </label>
          <textarea
            id="mission"
            name="mission"
            rows={2}
            value={formData.mission}
            onChange={handleChange}
            placeholder="Briefly describe what your organisation does..."
            className={`w-full px-3.5 py-2.5 rounded-[8px] border bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C] ${
              errors.mission ? "border-red-500" : "border-[#E4E4DE]"
            }`}
          />
          {errors.mission && <p className="mt-1 text-xs text-red-600">{errors.mission}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-xs font-semibold text-[#181818] mb-1.5">
              Team Size
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E4E4DE] bg-white text-sm text-[#181818] transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C]"
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
            <label htmlFor="timeEstimate" className="block text-xs font-semibold text-[#181818] mb-1.5">
              Estimated Time Lost Weekly *
            </label>
            <input
              type="text"
              id="timeEstimate"
              name="timeEstimate"
              value={formData.timeEstimate}
              onChange={handleChange}
              placeholder="e.g. 5–10 hours per week"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C] ${
                errors.timeEstimate ? "border-red-500" : "border-[#E4E4DE]"
              }`}
            />
            {errors.timeEstimate && <p className="mt-1 text-xs text-red-600">{errors.timeEstimate}</p>}
          </div>
        </div>

        {/* Repetitive Task */}
        <div>
          <label htmlFor="taskDescription" className="block text-xs font-semibold text-[#181818] mb-1.5">
            What repetitive task takes too much time? *
          </label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            rows={3}
            value={formData.taskDescription}
            onChange={handleChange}
            placeholder="Explain what is currently done manually, and where the bottleneck is..."
            className={`w-full px-3.5 py-2.5 rounded-[8px] border bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C] ${
              errors.taskDescription ? "border-red-500" : "border-[#E4E4DE]"
            }`}
          />
          {errors.taskDescription && <p className="mt-1 text-xs text-red-600">{errors.taskDescription}</p>}
        </div>

        {/* Sensitive Data */}
        <div>
          <label htmlFor="sensitiveData" className="block text-xs font-semibold text-[#181818] mb-1.5">
            Sensitive Data Considerations (Optional)
          </label>
          <textarea
            id="sensitiveData"
            name="sensitiveData"
            rows={2}
            value={formData.sensitiveData}
            onChange={handleChange}
            placeholder="e.g. beneficiary privacy, confidential records..."
            className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E4E4DE] bg-white text-sm text-[#181818] placeholder:text-[#666660]/40 transition-colors focus:outline-none focus:border-[#315C4C] focus:ring-1 focus:ring-[#315C4C]"
          />
        </div>

        {/* Submit */}
        <div className="pt-2 space-y-3 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#315C4C] hover:bg-[#26493C] rounded-[8px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#315C4C]/40 disabled:opacity-70 disabled:cursor-not-allowed shadow-xs"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting your idea...
              </>
            ) : (
              "Submit your idea →"
            )}
          </button>
          <p className="text-xs text-[#666660]">
            Free · Confidential · Response within 5 business days
          </p>
        </div>
      </form>
    </div>
  );
}
