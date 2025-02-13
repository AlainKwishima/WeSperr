import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import appleTouchIcon from "../assets/CompressJPEG.Online_img(512x512) (3).png";


const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <motion.img
        src={appleTouchIcon}
        alt="Loading..."
        className="w-17 h-17"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Loading;
