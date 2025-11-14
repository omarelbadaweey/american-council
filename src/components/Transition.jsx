import { motion } from "framer-motion";
import React from "react";

function Transition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.5, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

export default Transition;
