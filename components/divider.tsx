"use client"
import { motion } from "framer-motion"
export default function Divider() {
  return (
    <motion.div
      className="bg-gray-100 my-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    ></motion.div>
  )
}
