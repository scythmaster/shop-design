// components/Toast.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 max-w-md w-full z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <p className="text-lg text-gray-800">{message}</p>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          &times;
        </button>
      </div>
    </motion.div>
  );
};

export default Toast;
