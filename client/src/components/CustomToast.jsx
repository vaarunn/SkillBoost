import { useEffect } from "react";
import { toast } from "react-toastify";

const CustomToast = ({ message }) => {
  useEffect(() => {
    showToast();
    console.log(message);
  }, []);

  const showToast = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return null;
};

export default CustomToast;
