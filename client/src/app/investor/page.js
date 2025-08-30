// client/src/app/investor/page.js
"use client";

import { Button } from "@/components/ui/button";
import { api, ApiError } from "@/lib/api";
import WaitlistModal from "@/components/WaitlistModal";
import { useState } from "react";
import {
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function InvestorPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", description: "" });
    setErrors([]);
    setSuccess(false);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    try {
      await api.investors.create(formData);
      setSuccess(true);

      // Reset form after success
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (error) {
      if (error instanceof ApiError) {
        setErrors(error.errors.length > 0 ? error.errors : [error.message]);
      } else {
        setErrors(["Something went wrong. Please try again."]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="relative bg-white pe-gradient rounded-lg shadow-md">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[12px] text-black/60">
            Investment Opportunity
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-4">
            Invest in the Future of Smart Parking
          </h1>
          <p className="mt-3 text-[15px] text-white max-w-2xl">
            Join us in revolutionizing urban mobility across South Asia with
            AI-powered parking solutions.
          </p>
          <div className="mt-6 flex gap-4">
            {/* <Button className="bg-[color:var(--pe-blue)] text-white hover:bg-[color:var(--pe-teal)] transition">
              Download Our Paper
            </Button>
            <Button className="border border-black/10 text-[color:var(--pe-navy)] hover:border-[color:var(--pe-blue)]">
              Contact Founders
            </Button> */}
          </div>
        </div>
      </section>

      {/* Massive Market Opportunity Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-4 md:col-span-2">
            <h2 className="text-xl font-semibold">Market Size Progression</h2>
            <div className="mt-4 h-64 flex items-end justify-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-8 bg-[color:var(--pe-teal)] rounded-t"></div>
                <span className="text-xs mt-2 text-black/60">Dhaka 2024</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[color:var(--pe-teal)] rounded-t"></div>
                <span className="text-xs mt-2 text-black/60">Bangladesh 2025</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-32 bg-[color:var(--pe-teal)] rounded-t"></div>
                <span className="text-xs mt-2 text-black/60">South Asia 2027</span>
              </div>
            </div>
            {/* <div className="mt-4 text-center">
              <span className="text-xs text-[color:var(--pe-teal)] hover:underline cursor-pointer">
                See Our Expansion Roadmap →
              </span>
            </div> */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-black/5 bg-white shadow-sm p-4 text-sm">
              <div className="flex items-center mb-2">
                <span className="inline-block size-2 rounded-full bg-[color:var(--pe-teal)] mr-2" />
                <span className="font-medium">Dhaka Market</span>
              </div>
              <p className="text-xs text-black/60">$2.3B annual parking revenue with 15M+ vehicles</p>
            </div>
            <div className="rounded-xl border border-black/5 bg-white shadow-sm p-4 text-sm">
              <div className="flex items-center mb-2">
                <span className="inline-block size-2 rounded-full bg-yellow-500 mr-2" />
                <span className="font-medium">South Asia</span>
              </div>
              <p className="text-xs text-black/60">$45B market across 6 major cities by 2027</p>
            </div>
            <div className="rounded-xl border border-black/5 bg-white shadow-sm p-4 text-sm">
              <div className="flex items-center mb-2">
                <span className="inline-block size-2 rounded-full bg-gray-800 mr-2" />
                <span className="font-medium">Growth Rate</span>
              </div>
              <p className="text-xs text-black/60">28% CAGR driven by urbanization & digitization</p>
            </div>
          </div>
        </div>
        {/* <p className="mt-2 text-xs text-black/50 hover:text-[color:var(--pe-blue)]">
          See the full market analysis
        </p> */}
      </section>

      {/* Scalable Business Model Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Scalable Business Model</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-5">
            <div className="size-9 rounded-full bg-[color:var(--pe-blue)]/10 text-[color:var(--pe-blue)] grid place-items-center">
              <RocketLaunchIcon className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Platform</h3>
            <p className="mt-2 text-sm text-black/60">AI-powered platform with multiple revenue streams and network effects</p>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-5">
            <div className="size-9 rounded-full bg-[color:var(--pe-blue)]/10 text-[color:var(--pe-blue)] grid place-items-center">
              <CurrencyDollarIcon className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Revenue Streams</h3>
            <ul className="mt-2 text-sm text-black/60 space-y-1">
              <li>• Commission from parking fees (15-20%)</li>
              <li>• Premium subscriptions for frequent users</li>
              <li>• Data insights to urban planners</li>
              <li>• Advertising from local businesses</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-5">
            <div className="size-9 rounded-full bg-[color:var(--pe-blue)]/10 text-[color:var(--pe-blue)] grid place-items-center">
              <ChartBarIcon className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Scalability</h3>
            <ul className="mt-2 text-sm text-black/60 space-y-1">
              <li>• Low marginal cost per new user</li>
              <li>• Network effects strengthen with scale</li>
              <li>• AI improves with more data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Funding Journey Section */}
      <section className="bg-[color:var(--pe-gray)]/60 mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold text-center mb-8">Funding Journey</h2>
        <p className="text-center text-black/60 mb-8">Strategic milestones toward market leadership</p>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-black/10"></div>
          
          <div className="relative mb-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[color:var(--pe-teal)] border-4 border-white"></div>
            <div className="bg-white rounded-xl border border-black/5 shadow-sm p-5 ml-8">
              <h3 className="font-semibold">Pre-Seed Complete</h3>
              <p className="text-sm text-black/60 mt-1">60K BDT from University Innovation Hub</p>
              <ul className="text-xs text-black/50 mt-2 space-y-1">
                <li>• MVP development</li>
                <li>• Initial market validation</li>
                <li>• Team formation</li>
              </ul>
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white"></div>
            <div className="bg-white rounded-xl border border-black/5 shadow-sm p-5 mr-8">
              <h3 className="font-semibold">Seed Funding</h3>
              <p className="text-sm text-black/60 mt-1">100K BDT Seed Funding Target • On-going</p>
              <ul className="text-xs text-black/50 mt-2 space-y-1">
                <li>• Product-market fit</li>
                <li>• Pilot partnerships</li>
                <li>• Go-to-market strategy</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-400 border-4 border-white"></div>
            <div className="bg-white rounded-xl border border-black/5 shadow-sm p-5 ml-8 border-dashed">
              <h3 className="font-semibold">Series A Target</h3>
              <p className="text-sm text-black/60 mt-1">$2M for Regional Expansion</p>
              <ul className="text-xs text-black/50 mt-2 space-y-1">
                <li>• Scale to 3 cities</li>
                <li>• Advanced AI features</li>
                <li>• Strategic partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-lg font-semibold text-center">
          Ready to invest in the future of smart parking?
        </h2>
        <div className="mt-4 flex justify-center gap-4">
          {/* <Button className="bg-[color:var(--pe-blue)] text-white hover:bg-[color:var(--pe-teal)] transition">
            Download Our Paper
          </Button>
          
          <Button className="border border-black/10 text-[color:var(--pe-navy)] hover:border-[color:var(--pe-blue)]">
            Contact Founders
          </Button> */}
          <Button
            className="px-6 py-3 bg-primary text-white rounded-lg"
            onClick={openModal}
          >
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">
          Contact Us for Investment Opportunities
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              className="w-full mt-2 p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[color:var(--pe-blue)]/40 focus:border-[color:var(--pe-blue)]/50 transition"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="w-full mt-2 p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[color:var(--pe-blue)]/40 focus:border-[color:var(--pe-blue)]/50 transition"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-foreground"
            >
              Investment Interest & Message *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={loading}
              className="w-full mt-2 p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[color:var(--pe-blue)]/40 focus:border-[color:var(--pe-blue)]/50 transition"
              rows="6"
              placeholder="Tell us about your investment interests, experience, and any questions you have about ParkEase..."
              required
            />
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <Button
              type="submit"
              className="bg-[color:var(--pe-blue)] text-white hover:bg-[color:var(--pe-teal)] transition"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </Button>
            <Button
              type="button"
              className="bg-white text-black border border-black/10 hover:bg-gray-500 hover:text-white hover:border-gray-500 transition"
              onClick={resetForm}
              disabled={loading}
            >
              Clear Form
            </Button>
          </div>
        </form>
      </section>

      <WaitlistModal isOpen={isModalOpen} closeModal={closeModal} />
    </main>
  );
}
