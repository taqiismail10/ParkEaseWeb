// app/investor/page.js
"use client"; // Add this directive at the top of the file

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function InvestorPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
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
          <li>Access to cutting-edge AI-driven parking solutions.</li>
          <li>
            Opportunity to invest in a fast-growing tech company in the mobility
            sector.
          </li>
          <li>Potential for high returns as we scale our operations.</li>
          <li>
            Collaborations with key urban planners and transportation
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
          If you are interested in investing, please fill out the form below, and
          we will get back to you with more details.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-4 border rounded-lg"
              placeholder="Your Name"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 border rounded-lg"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-4 border rounded-lg"
              rows="6"
              placeholder="Your Message"
              required
            />
          </div>
          <div className="flex justify-center mt-6 gap-4">
            <Button type="submit" size="lg" className="bg-primary text-white">
              Submit Inquiry
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => setMessage("")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
