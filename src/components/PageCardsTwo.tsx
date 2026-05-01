import { motion } from 'framer-motion'

export default function PageCardsTwo() {
  return (
    <main mt-10>
      <div className="flex w-full">
        <div className="w-full overflow-hidden">
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
            className="overflow-hidden">
            <img className="w-full h-full object-cover object-top" src="/women-in-suit.jpg"></img>
          </motion.div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="w-full h-fit">
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
            className="overflow-hidden">
            <img className="w-full h-full object-cover object-top" src="/men-in-suit.jpg"></img>
          </motion.div>
        </div>
        </div>
      </div>
    </main>
  )
}