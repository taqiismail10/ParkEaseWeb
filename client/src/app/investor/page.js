// client/src/app/investor/page.js
"use client";

import { Button } from "@/components/ui/button";
import { api, ApiError } from "@/lib/api";
import { useState } from "react";

export default function InvestorPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

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
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Introduction Section */}
      <section>
        <h1 className="text-3xl font-semibold">Investor Opportunities</h1>
        <div className="mt-8">
          <p className="text-lg text-muted-foreground">
            ParkEase is offering exclusive investment opportunities to help us
            scale our smart parking solutions across Dhaka. Our innovative
            technology aims to improve urban mobility, reduce congestion, and
            make parking simpler and more efficient.
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            We invite investors to join us in shaping the future of urban
            transportation. Learn more about our growth, opportunities, and the
            impact of your investment.
          </p>
        </div>
      </section>

      {/* Investment Benefits Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Investment Benefits</h2>
        <ul className="mt-4 space-y-4 text-lg text-muted-foreground">
          <li>• Access to cutting-edge AI-driven parking solutions.</li>
          <li>
            • Opportunity to invest in a fast-growing tech company in the
            mobility sector.
          </li>
          <li>• Potential for high returns as we scale our operations.</li>
          <li>
            • Collaborations with key urban planners and transportation
            authorities.
          </li>
        </ul>
      </section>

      {/* Investor Contact Form */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Contact Us for Investment Opportunities
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          If you are interested in investing, please fill out the form below,
          and we will get back to you with more details.
        </p>

        {/* Success Message */}
        {success && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-green-700 font-medium">
                Thank you for your interest! We will be in touch soon.
              </p>
            </div>
          </div>
        )}

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-medium text-red-800 mb-2">
              Please fix the following errors:
            </h4>
            <ul className="text-sm text-red-600 space-y-1">
              {errors.map((error, index) => (
                <li key={index}>• {error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact Form */}
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
              className="w-full mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition disabled:opacity-50"
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
              className="w-full mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition disabled:opacity-50"
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
              className="w-full mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition disabled:opacity-50"
              rows="6"
              placeholder="Tell us about your investment interests, experience, and any questions you have about ParkEase..."
              required
            />
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={resetForm}
              disabled={loading}
            >
              Clear Form
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
