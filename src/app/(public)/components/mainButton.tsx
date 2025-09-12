"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MotionButtonProps {
  url: string;
  label: string;
  className?: string;
}

export default function MainButton({ url, label, className }: MotionButtonProps) {
  return (
    <Link href={url}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`main-btn ${className || ""}`}
      >
        {label}
      </motion.button>
    </Link>
  );
}
