import React from "react";
import { motion } from "framer-motion";

const CVBtn = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="
        relative w-full max-w-[240px]
        mx-auto

        flex items-center justify-center gap-2

        px-5 py-3

        text-[#0b3b5c] font-medium tracking-wide text-sm

        rounded-xl

        border border-sky-200/40

        bg-sky-300/20 backdrop-blur-xl

        shadow-[0_8px_30px_rgba(56,189,248,0.25)]

        overflow-hidden
      "
    >
      {/* glow background */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-sky-300/40
          via-cyan-200/20
          to-blue-400/40
          opacity-80
        "
      />

      {/* animated light sweep */}
      <motion.div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
        "
        animate={{ x: ["-120%", "120%"] }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          ease: "linear",
        }}
      />

      {/* border glow */}
      <div
        className="
          absolute inset-0
          rounded-xl
          border border-sky-100/40
          shadow-[inset_0_0_12px_rgba(255,255,255,0.25)]
        "
      />

      {/* text */}
      <span className="relative z-10 flex items-center gap-2 text-white">
        📄 CV ჩამოტვირთვა
      </span>
    </motion.button>
  );
};

export default CVBtn;