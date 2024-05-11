import { ToastContainer, toast } from "react-toastify";

export const ErrorDex = (message) => {
  return toast.error(message, { position: "top-center" });
};

export const SuccessDex = (message) => {
  return toast.success(message, { position: "top-center" });
};

export const InfoDex = (message) => {
  return toast.info(message, { position: "top-center" });
};
