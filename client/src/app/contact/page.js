// app/contact/page.js
"use client"; // Add this directive at the top of the file

import { useState } from "react"; // Import useState

export default function Contact() {
  const [message, setMessage] = useState(""); // Using useState to handle message

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded-lg"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
