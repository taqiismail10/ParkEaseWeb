// keep it simple: frontend calls its own /api; Next.js rewrites to backend
const API_BASE_URL = "/api";

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
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  };

  try {
    const res = await fetch(url, config);
    const data = await res.json();
    if (!res.ok)
      throw new ApiError(
        data.error || "Something went wrong",
        res.status,
        data.errors || []
      );
    return data;
  } catch (err) {
    if (err instanceof ApiError) throw err;
    throw new ApiError("Network error. Please check your connection.", 0);
  }
};

export const api = {
  waitlist: {
    getAll: () => apiCall("/waitlist"),
    create: (data) =>
      apiCall("/waitlist", { method: "POST", body: JSON.stringify(data) }),
    sendEmail: (email) =>
      apiCall(`/send-email?email=${encodeURIComponent(email)}`, {
        method: "GET",
      }),
  },
  support: {
    create: (data) =>
      apiCall("/support", { method: "POST", body: JSON.stringify(data) }),
  },
  investors: {
    getAll: () => apiCall("/investors"),
    create: (data) =>
      apiCall("/investors", { method: "POST", body: JSON.stringify(data) }),
  },
  health: () => apiCall("/health"),
};

export { ApiError };
