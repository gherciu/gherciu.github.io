'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const AnimateOnScroll = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimateOnScroll
