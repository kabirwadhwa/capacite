"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Sparkles, ArrowRight } from "lucide-react";

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
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="ceartas-card rounded-3xl p-8 sm:p-12 text-center animate-fade-in max-w-2xl mx-auto border-2 border-[#FF1BA3]">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] text-[#FF1BA3] mb-6 shadow-md shadow-[#FF1BA3]/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] text-[#FF1BA3] text-xs font-extrabold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Application Received</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          Thank you for applying.
        </h3>
        <p className="mt-4 text-foreground/75 leading-relaxed max-w-md mx-auto text-sm sm:text-base font-medium">
          We’ll review the problem and get back to you within 5 business days to schedule an initial diagnostic call.
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
          className="mt-8 ceartas-btn-secondary px-6 py-2.5 rounded-xl text-xs font-bold"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <div className="ceartas-card rounded-3xl p-6 sm:p-10 border border-[#FFC6E5] shadow-xl shadow-[#FF1BA3]/5 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Org Name */}
          <div>
            <label htmlFor="orgName" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
              Organisation Name <span className="text-[#FF1BA3]">*</span>
            </label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="e.g. Association Climat France"
              className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3] ${
                errors.orgName ? "border-red-500" : "border-[#FFC6E5]"
              }`}
            />
            {errors.orgName && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.orgName}</p>}
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
              Website or Social Page
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.org"
              className="w-full px-4 py-3 rounded-xl border border-[#FFC6E5] bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Contact Name */}
          <div>
            <label htmlFor="contactName" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
              Your Name <span className="text-[#FF1BA3]">*</span>
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              placeholder="Jean Dupont"
              className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3] ${
                errors.contactName ? "border-red-500" : "border-[#FFC6E5]"
              }`}
            />
            {errors.contactName && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.contactName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
              Email Address <span className="text-[#FF1BA3]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jean@example.org"
              className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3] ${
                errors.email ? "border-red-500" : "border-[#FFC6E5]"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email}</p>}
          </div>
        </div>

        {/* Mission */}
        <div>
          <label htmlFor="mission" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
            Organisation Mission <span className="text-[#FF1BA3]">*</span>
          </label>
          <textarea
            id="mission"
            name="mission"
            rows={2}
            value={formData.mission}
            onChange={handleChange}
            placeholder="Briefly describe what your organisation does and who it serves..."
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3] ${
              errors.mission ? "border-red-500" : "border-[#FFC6E5]"
            }`}
          />
          {errors.mission && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.mission}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
              Team Size
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#FFC6E5] bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3]"
            >
              <option value="">Select team size...</option>
              <option value="1-5">1 - 5 staff members</option>
              <option value="6-20">6 - 20 staff members</option>
              <option value="21-50">21 - 50 staff members</option>
              <option value="50+">50+ staff members</option>
            </select>
          </div>

          {/* Time Consumed */}
          <div>
            <label htmlFor="timeEstimate" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
              Estimated Time Consumed <span className="text-[#FF1BA3]">*</span>
            </label>
            <input
              type="text"
              id="timeEstimate"
              name="timeEstimate"
              value={formData.timeEstimate}
              onChange={handleChange}
              placeholder="e.g. 10 hours/week, 2 days/month"
              className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3] ${
                errors.timeEstimate ? "border-red-500" : "border-[#FFC6E5]"
              }`}
            />
            {errors.timeEstimate && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.timeEstimate}</p>}
          </div>
        </div>

        {/* Repetitive Task */}
        <div>
          <label htmlFor="taskDescription" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
            What repetitive task consumes the most time? <span className="text-[#FF1BA3]">*</span>
          </label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            rows={3}
            value={formData.taskDescription}
            onChange={handleChange}
            placeholder="Explain the workflow, what is done manually today, and what causes friction..."
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3] ${
              errors.taskDescription ? "border-red-500" : "border-[#FFC6E5]"
            }`}
          />
          {errors.taskDescription && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.taskDescription}</p>}
        </div>

        {/* Sensitive Data */}
        <div>
          <label htmlFor="sensitiveData" className="block text-xs font-black uppercase tracking-wider text-foreground mb-2">
            Sensitive data or privacy considerations
          </label>
          <textarea
            id="sensitiveData"
            name="sensitiveData"
            rows={2}
            value={formData.sensitiveData}
            onChange={handleChange}
            placeholder="e.g. beneficiary health data, private emails, minors, financial logs..."
            className="w-full px-4 py-3 rounded-xl border border-[#FFC6E5] bg-white text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 focus:border-[#FF1BA3]"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="ceartas-btn-primary w-full py-4 px-6 rounded-2xl text-sm sm:text-base font-bold tracking-tight inline-flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending Application...
              </>
            ) : (
              <>
                Tell Capacité about the problem
                <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
