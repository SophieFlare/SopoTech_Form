import React from "react";
import { motion } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";

const CVBtn = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 350, damping: 16 }}
      className="
        relative w-full max-w-[240px]
        mx-auto

        flex items-center justify-center gap-2

        px-5 py-3

        text-white font-semibold tracking-wide text-sm

        rounded-xl

        border border-cyan-300/40

        bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600

        shadow-[0_0_25px_rgba(56,189,248,0.55)]

        overflow-hidden
      "
    >
      {/* glow background */}
      <div className="
        absolute inset-0
        bg-gradient-to-r
        from-cyan-400/60
        via-sky-300/40
        to-blue-500/60
        blur-md
        opacity-90
      " />

      {/* shine effect */}
      <motion.div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
        animate={{ x: ["-130%", "130%"] }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: "linear",
        }}
      />

      {/* border glow */}
      <div className="
        absolute inset-0
        rounded-xl
        border border-cyan-200/60
        shadow-[0_0_18px_rgba(34,211,238,0.4)]
      " />

      {/* icon + text */}
      <span className="relative z-10 flex items-center gap-2 text-white drop-shadow-md">
        <HiOutlineDocumentText size={18} />
        CV ჩამოტვირთვა
      </span>
    </motion.button>
  );
};

export default CVBtn;