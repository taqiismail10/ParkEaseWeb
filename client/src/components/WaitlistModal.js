// components/WaitlistModal.js
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function WaitlistModal({ isOpen, closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Information submitted successfully");
    closeModal();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Glassmorphism background overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-lg"
        onClick={closeModal}
      />

      {/* Modal content */}
      <div
        className="relative w-full max-w-md bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-6 transition-transform transform"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Join the Waitlist
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white/70 focus:ring-2 focus:ring-primary focus:border-transparent transition"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white/70 focus:ring-2 focus:ring-primary focus:border-transparent transition"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white/70 focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={closeModal}
              className="px-6 py-3 border border-gray-300 rounded-lg bg-white/70 hover:bg-gray-100 transition"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
