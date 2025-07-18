"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-full shadow-lg z-50 hover:scale-105 transition"
      >
        <FaRobot />
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-20 right-4 bg-black text-white p-4 rounded-lg shadow-lg w-80 h-64 flex flex-col z-50"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Jeffrey’s Chatbot</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              ✖
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center text-center text-sm text-gray-300 px-2">
            🚧 Chatbot is still under construction. Please check back later!
          </div>

          <div className="text-xs text-right text-gray-600 pt-2">
            © 2025 Ampe Ai
          </div>
        </motion.div>
      )}
    </>
  );
}
