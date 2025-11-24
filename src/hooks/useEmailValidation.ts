import { useState } from "react";

interface UseEmailValidationReturn {
  email: string;
  error: string;
  setEmail: (email: string) => void;
  setError: (error: string) => void;
  validateEmail: (value: string) => boolean;
  clearError: () => void;
}

export const useEmailValidation = (): UseEmailValidationReturn => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const clearError = () => setError("");

  return {
    email,
    error,
    setEmail,
    setError,
    validateEmail,
    clearError,
  };
};
