'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto grid max-w-screen-lg">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}>
            <div>This is the app</div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
