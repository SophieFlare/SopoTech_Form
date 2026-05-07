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

        text-white font-medium tracking-wide text-sm

        rounded-xl

        border border-white/10

        bg-white/10 backdrop-blur-xl

        shadow-[0_8px_30px_rgba(0,0,0,0.25)]

        overflow-hidden
      "
    >
      {/* glow orb */}
      <div className="
        absolute inset-0
        bg-gradient-to-r from-[#4fc3f7]/20 via-white/10 to-[#2b75ae]/20
        opacity-60
      " />

      {/* animated light sweep */}
      <motion.div
        className="
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/20 to-transparent
        "
        animate={{ x: ["-120%", "120%"] }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          ease: "linear",
        }}
      />

      {/* border glow */}
      <div className="
        absolute inset-0
        rounded-xl
        border border-white/20
        shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]
      " />

      {/* text */}
      <span className="relative z-10 flex items-center gap-2">
        📄 CV ჩამოტვირთვა
      </span>
    </motion.button>
  );
};

export default CVBtn;