"use client";

import React, { useState } from "react";
import { Locale, TranslationSchema } from "../data/translations";

interface ContactProps {
  lang: Locale;
  t: TranslationSchema;
}

export default function Contact({ lang, t }: ContactProps) {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");
    // Mocking email submission
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-2">
            {t.contact.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {t.contact.subtitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
              {t.contact.contactInfo}
            </h4>

            {/* Email Card */}
            <a
              href="mailto:abdulboriy6863@gmail.com"
              className="p-5 rounded-2xl bg-zinc-950 border border-white/5 flex items-center gap-4 hover:border-brand-teal/20 transition-all duration-300 group cursor-pointer"
            >
              <span className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center text-lg group-hover:scale-105 transition-transform duration-300">
                ✉️
              </span>
              <div>
                <span className="text-3xs font-semibold text-zinc-500 uppercase tracking-widest block">
                  {t.contact.email}
                </span>
                <span className="text-xs md:text-sm font-bold text-white group-hover:text-brand-teal transition-colors duration-300">
                  abdulboriy6863@gmail.com
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+821057635111"
              className="p-5 rounded-2xl bg-zinc-950 border border-white/5 flex items-center gap-4 hover:border-brand-indigo/20 transition-all duration-300 group cursor-pointer"
            >
              <span className="w-10 h-10 rounded-xl bg-brand-indigo/10 text-brand-indigo flex items-center justify-center text-lg group-hover:scale-105 transition-transform duration-300">
                📞
              </span>
              <div>
                <span className="text-3xs font-semibold text-zinc-500 uppercase tracking-widest block">
                  {t.contact.phone}
                </span>
                <span className="text-xs md:text-sm font-bold text-white group-hover:text-brand-indigo transition-colors duration-300">
                  +82 10-5763-5111
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/abdulboriy6863"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-zinc-950 border border-white/5 flex items-center gap-4 hover:border-brand-purple/20 transition-all duration-300 group cursor-pointer"
            >
              <span className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center text-lg group-hover:scale-105 transition-transform duration-300">
                🐙
              </span>
              <div>
                <span className="text-3xs font-semibold text-zinc-500 uppercase tracking-widest block">
                  {t.contact.github}
                </span>
                <span className="text-xs md:text-sm font-bold text-white group-hover:text-brand-purple transition-colors duration-300">
                  github.com/abdulboriy6863
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-white/5 flex items-center gap-4 hover:border-white/10 transition-all duration-300 group">
              <span className="w-10 h-10 rounded-xl bg-zinc-900 text-zinc-400 flex items-center justify-center text-lg">
                📍
              </span>
              <div>
                <span className="text-3xs font-semibold text-zinc-500 uppercase tracking-widest block">
                  {t.contact.location}
                </span>
                <span className="text-xs md:text-sm font-bold text-white">
                  {t.contact.locationVal}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-950 border border-white/5">
              <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
                {lang === "en" ? "Send a Message" : lang === "ko" ? "메시지 보내기" : "Xabar Yuborish"}
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-2xs font-extrabold text-zinc-500 uppercase tracking-wider mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/5 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-2xs font-extrabold text-zinc-500 uppercase tracking-wider mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/5 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-2xs font-extrabold text-zinc-500 uppercase tracking-wider mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/5 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button & Status */}
                <div className="pt-2">
                  {status === "success" ? (
                    <div className="p-4 rounded-xl bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-bold text-center animate-fade-in">
                      {t.contact.successMessage}
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-teal to-brand-indigo text-white font-bold text-sm tracking-wide shadow-lg shadow-brand-indigo/15 hover:scale-[1.01] hover:shadow-brand-indigo/25 active:scale-[0.99] disabled:opacity-50 transition-all duration-300 cursor-pointer"
                    >
                      {status === "sending" ? t.contact.sending : t.contact.sendButton}
                    </button>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-3xs text-zinc-600 font-semibold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} {t.hero.name}. All Rights Reserved.
        </div>

      </div>
    </section>
  );
}
