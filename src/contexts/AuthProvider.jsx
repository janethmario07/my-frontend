import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Automatically fetch user if token exists (optional)
  useEffect(() => {
    if (token) {
      // Optional: fetch user with token
      setUser({ email: "dummy@example.com" }); // Replace with actual fetch
    }
  }, [token]);

const login = async ({ username, password }) => {
  setIsLoading(true);
  setError("");
  try {
    const res = await axios.post(
      "https://my-backend-55fe.onrender.com/api/v1/auth/login",
      { username, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true // ✅ Required for CORS + Auth headers
      }
    );

    const { token, user } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("userInformation", JSON.stringify(user));
    setToken(token);
    setUser(user);
    return true;
  } catch (err) {
    setError("Invalid credentials");
  } finally {
    setIsLoading(false);
  }
};
   const register = async (formData) => {
  setIsLoading(true);
  setError("");

  try {
    const res = await axios.post(
      "https://my-backend-55fe.onrender.com/api/v1/auth/signup", // Make sure this is your signup endpoint
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { token, user } = res.data;

    setToken(token);
    setUser(user);
    return true;
  } catch (err) {
    console.error(err.response?.data || err.message);
   if (err.response?.data?.message === "Email already exists") {
    toast.error("Email already registered");
  } else {
    toast.error("Something went wrong");
  }
    return false;
  } finally {
    setIsLoading(false);
  }
};
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isLoading, error,register }}
    >
      {children}
    </AuthContext.Provider>
  );
};