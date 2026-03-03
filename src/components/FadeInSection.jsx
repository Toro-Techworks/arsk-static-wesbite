import { motion } from 'framer-motion'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

export default function FadeInSection({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
