import { useState } from "react";
import toast from "react-hot-toast";

interface UsePasswordRecoveryProps {
  email: string;
  validateEmail: (value: string) => boolean;
  setError: (error: string) => void;
}

interface UsePasswordRecoveryReturn {
  loading: boolean;
  handleSubmit: () => void;
}

export const usePasswordRecovery = ({
  email,
  validateEmail,
  setError,
}: UsePasswordRecoveryProps): UsePasswordRecoveryReturn => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      setError("L'email è obbligatoria");
      return;
    }

    if (!validateEmail(email)) {
      setError("Inserisci un'email valida");
      return;
    }

    setError("");
    console.log("Recovery email sent:", email);

    setLoading(true);

    setTimeout(() => {
      toast.success("Link inviato alla tua email!");
      setLoading(false);
    }, 1500);
  };

  return {
    loading,
    handleSubmit,
  };
};
