import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function EventConfirmation() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 h-screen"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
        Event Joined Successfully!
      </h1>
      <Link
        to="/"
        className="text-green-600 border px-1 py-2 rounded-xl"
      >
        Back to Events
      </Link>
    </motion.div>
  );
}

export default EventConfirmation;
