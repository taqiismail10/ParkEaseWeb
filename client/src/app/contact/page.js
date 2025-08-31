// app/contact/page.js - FIXED VERSION
"use client";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold">Contact Us</h1>

      {/* REMOVED FORM TAG - Using div instead */}
      <div className="mt-8 space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm">
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
            className="w-full p-4 border rounded-lg"
          />
        </div>
        <button
          onClick={handleSubmit} // CHANGED FROM type="submit" to onClick
          className="px-6 py-2 bg-primary text-white rounded-lg"
        >
          Send Message
        </button>
      </div>
    </main>
  );
}
