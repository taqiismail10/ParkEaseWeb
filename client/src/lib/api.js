// client/src/lib/api.js
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

class ApiError extends Error {
  constructor(message, status, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.error || "Something went wrong",
        response.status,
        data.errors || []
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Network or other errors
    throw new ApiError("Network error. Please check your connection.", 0);
  }
};

// API functions
export const api = {
  // Waitlist endpoints
  waitlist: {
    getAll: () => apiCall("/waitlist"),
    create: (data) =>
      apiCall("/waitlist", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    sendEmail: (email) =>
      apiCall(`/send-email?email=${encodeURIComponent(email)}`, {
        method: "GET",
      }),
  },

  // Investor endpoints
  investors: {
    getAll: () => apiCall("/investors"),
    create: (data) =>
      apiCall("/investors", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },

  // Health check
  health: () => apiCall("/health"),
};

export { ApiError };
