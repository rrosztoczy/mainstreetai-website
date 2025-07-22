import React, { useState } from "react";

/**
 * Landing page prototype for the AI Ops & Engineering business.
 * Tailwind CSS is assumed to be configured.
 * Replace placeholder images/links with real assets when available.
 */

export default function LandingPage() {
  const [teamSize, setTeamSize] = useState(10);
  const savings = teamSize * 350; // very rough placeholder calc

  return (
    <main className="font-sans text-gray-900">
      {/* Hero */}
      <section className="bg-[#0E1B3D] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto">
          Turn every sales call into product intel, marketing fuel, and a closed deal.
        </h1>
        <p className="mt-6 text-lg md:text-2xl max-w-2xl mx-auto">
          No‑code automations & AI: best‑in‑class ops in <span className="whitespace-nowrap">30 days</span>—not 12 months.
        </p>
        <a
          href="#book"
          className="inline-block mt-10 bg-[#1FF299] text-[#0E1B3D] font-semibold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Book a 30‑Minute AI Ops Audit
        </a>
        {/* Proof bar */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm opacity-90">
          <span>⚡ 100+ automations</span>
          <span>🚀 8× faster hand‑offs</span>
          <span>🔒 Own your AI, no lock‑in</span>
        </div>
      </section>

      {/* Pain → Promise */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Death by 1,000 Papercuts</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Call intelligence trapped in recordings</li>
            <li>Ghost data hiding in CRM notes & tickets</li>
            <li>Broken hand‑offs between sales, product, success</li>
            <li>Context‑switch burnout across tools</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Ops Central Nervous System</h2>
          <p className="text-gray-700 mb-4">
            Capture every conversation, transform it with AI, and route insights to the right team—automatically.
          </p>
          <p className="text-gray-700">
            Best‑in‑class operations in 30&nbsp;days so founders can focus on building and selling.
          </p>
        </div>
      </section>

      {/* Product snapshot */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">See it in action</h3>
        <div className="relative max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
          <img src="/placeholder-gif.gif" alt="Demo GIF" className="w-full" />
          <span className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 text-xs rounded-full shadow">30‑sec demo</span>
        </div>
      </section>

      {/* Persona benefits */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {[
          {
            title: "Founding CEO / COO",
            benefit: "Growth loops that compound without extra headcount",
          },
          {
            title: "Head of Sales / RevOps",
            benefit: "Pipeline auto‑updates, reps focus on closing",
          },
          {
            title: "Head of Product / Engineering",
            benefit: "Ship features based on real‑time voice‑of‑customer data",
          },
        ].map((card) => (
          <div key={card.title} className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="font-bold text-xl mb-3">{card.title}</h4>
            <p className="text-gray-700">{card.benefit}</p>
          </div>
        ))}
      </section>

      {/* ROI Calculator */}
      <section className="bg-[#0E1B3D] text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Estimate Your ROI</h3>
        <div className="max-w-md mx-auto bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
          <label htmlFor="team-size" className="block mb-4 text-lg">Team size: {teamSize}</label>
          <input
            id="team-size"
            type="range"
            min="1"
            max="100"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full"
          />
          <p className="mt-6 text-xl">≈ ${savings.toLocaleString()} annual savings</p>
        </div>
      </section>

      {/* Pricing ribbon */}
      <section className="py-12 px-6 text-center">
        <p className="text-lg">Starts at <span className="font-bold">$15k</span> setup + <span className="font-bold">$2k/mo</span></p>
        <a
          href="#pricing"
          className="inline-block mt-6 bg-[#1FF299] text-[#0E1B3D] font-semibold px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition"
        >
          View detailed pricing
        </a>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
        <div className="space-y-8">
          <details className="bg-white p-6 rounded-2xl shadow">
            <summary className="font-semibold cursor-pointer">How long until we see value?</summary>
            <p className="mt-4 text-gray-700">Most clients start seeing actionable insights within the first week of deployment.</p>
          </details>
          <details className="bg-white p-6 rounded-2xl shadow">
            <summary className="font-semibold cursor-pointer">Do we need to change our existing tools?</summary>
            <p className="mt-4 text-gray-700">No. We supercharge your current stack (HubSpot, Notion, Zapier, etc.).</p>
          </details>
          <details className="bg-white p-6 rounded-2xl shadow">
            <summary className="font-semibold cursor-pointer">Is our data secure?</summary>
            <p className="mt-4 text-gray-700">All automations run within your environment; you maintain full control of your data.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E1B3D] text-white py-12 px-6 text-center space-y-4">
        <h4 className="text-xl font-bold">Ready to compound every conversation?</h4>
        <a
          href="#book"
          className="inline-block bg-[#1FF299] text-[#0E1B3D] font-semibold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Book a 30‑Minute AI Ops Audit
        </a>
        <nav className="flex justify-center gap-6 opacity-80 text-sm">
          <a href="#library" className="hover:underline">Automation Library</a>
          <a href="#demo" className="hover:underline">Watch Demo</a>
          <a href="#newsletter" className="hover:underline">Newsletter</a>
        </nav>
        <p className="text-xs opacity-60">© {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
