import { motion } from "framer-motion";
import chatSVG from "../assets/download-removebg-preview.png";

export default function NoSelectedChat() {
  return (
    <div className="flex h-full w-full -translate-y-[10%] flex-col items-center justify-center">
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        src={chatSVG}
        alt=""
        className="mb-4 h-56 w-56"
      />
      <p className="text-4xl font-black text-gray-800 mb-2">WeSperr chat</p>
      <p className="text-xl font-semibold text-gray-600">Welcome ,👉 Click on Chat to start messaging</p>
    </div>
  );
}
