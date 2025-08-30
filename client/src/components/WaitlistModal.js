// client/src/components/WaitlistModal.js
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { api, ApiError } from "@/lib/api";

export default function WaitlistModal({ isOpen, closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]); // always store strings here
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
    setFormData({ name: "", email: "", phone: "" });
    setErrors([]);
    setSuccess(false);
    setLoading(false);
  };

  const normalizeErrors = (errPayload) => {
    // errPayload can be an array of strings or objects or a single string.
    if (!errPayload) return [];
    if (Array.isArray(errPayload)) {
      return errPayload.map((e) => {
        if (typeof e === "string") return e;
        // common object shape: { message, rule, field }
        if (e && typeof e === "object") {
          if (e.message) return e.message;
          try {
            return JSON.stringify(e);
          } catch {
            return String(e);
          }
        }
        return String(e);
      });
    }
    // single string or object
    if (typeof errPayload === "string") return [errPayload];
    if (typeof errPayload === "object") {
      if (errPayload.message) return [errPayload.message];
      try {
        return [JSON.stringify(errPayload)];
      } catch {
        return [String(errPayload)];
      }
    }
    return [String(errPayload)];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    try {
      await api.waitlist.create(formData);
      setSuccess(true);

      // Show success message for 2 seconds then close modal
      setTimeout(() => {
        resetForm();
        closeModal();
      }, 2000);
    } catch (error) {
      // Normalize ApiError payloads (might contain array of objects)
      if (error instanceof ApiError) {
        // error.errors might be an array of objects: map to messages
        const normalized = normalizeErrors(
          error.errors && error.errors.length > 0 ? error.errors : error.message
        );
        setErrors(normalized);
      } else if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.errors
      ) {
        // defensive: handle typical axios response shape
        setErrors(normalizeErrors(error.response.data.errors));
      } else {
        setErrors(["Something went wrong. Please try again."]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    resetForm();
    closeModal();
  };

  if (!isOpen && !success) return null;

  if (success) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-lg" />
        <div className="relative w-full max-w-md bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
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
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Welcome to the Waitlist!
            </h2>
            <p className="text-gray-600">
              Thank you for joining. We will notify you when ParkEase launches!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main modal UI
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Glassmorphism background overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-lg"
        onClick={handleClose}
      />

      {/* Modal content */}
      <div
        className="relative w-full max-w-md bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-6 transition-transform transform"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Join the Waitlist
        </h2>

        {/* Error messages */}
        {errors.length > 0 && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <ul className="text-sm text-red-600 space-y-1">
              {errors.map((err, index) => (
                <li key={index}>
                  • {typeof err === "string" ? err : String(err)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white/70 focus:ring-2 focus:ring-primary focus:border-transparent transition disabled:opacity-50"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white/70 focus:ring-2 focus:ring-primary focus:border-transparent transition disabled:opacity-50"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number *
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
              placeholder="+880 123 456 789"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white/70 focus:ring-2 focus:ring-primary focus:border-transparent transition disabled:opacity-50"
              required
            />
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={loading}
              className="px-6 py-3 border border-gray-300 rounded-lg bg-white/70 hover:bg-gray-100 transition disabled:opacity-50"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
