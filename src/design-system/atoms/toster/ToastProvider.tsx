import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        className:
          "text-sm px-4 py-3 rounded-xl shadow-lg font-medium tracking-tight",

        success: {
          className: "!bg-kingly !text-white",
        },

        error: {
          className: "!bg-spiritstoneRed !text-white",
        },
      }}
    />
  );
};

export default ToastProvider;
