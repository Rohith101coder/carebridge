import { jwtDecode } from "jwt-decode";

export const getValidDonor = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return {
      authenticated: false,
      reason: "NO_TOKEN",
    };
  }

  try {
    const decoded = jwtDecode(token);

    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");

      return {
        authenticated: false,
        reason: "EXPIRED",
      };
    }

    if (decoded.role !== "DONOR") {
      return {
        authenticated: false,
        reason: "NOT_DONOR",
      };
    }

    return {
      authenticated: true,
      token,
      decoded,
    };
  } catch {
    localStorage.removeItem("token");

    return {
      authenticated: false,
      reason: "INVALID",
    };
  }
};
