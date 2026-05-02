import { motion } from 'framer-motion'

export default function PageCardsTwo() {
  return (
    <main className="mt-10">
      <div className="flex w-full">

        {/* WOMEN CARD */}
        <div className="relative w-full h-[120vh]">
          
          {/* IMAGE */}
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
            className="absolute inset-0"
          >
            <img
              className="w-full h-full object-cover object-top"
              src="/women-in-suit.jpg"
            />
          </motion.div>

          {/* STICKY TEXT */}
          <div className="sticky top-0 h-screen flex flex-col justify-center items-center text-white z-10 gap-2 text-2xl font-playfair">
            Introducing Women Collection
            <button className="p-2 text-sm bg-orange-500 font-namdhingo text-gray-100 border border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-orange-500 transition duration-300 cursor-pointer mb-10">
              SHOW COLLECTION
            </button>
          </div>

        </div>

        {/* MEN CARD */}
        <div className="relative w-full h-[120vh]">
          
          {/* IMAGE */}
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
            className="absolute inset-0"
          >
            <img
              className="w-full h-full object-cover object-top"
              src="/men-in-suit.jpg"
            />
          </motion.div>

          {/* STICKY TEXT */}
          <div className="sticky top-0 h-screen flex flex-col justify-center items-center text-white z-10 gap-2 text-2xl text-center font-playfair">
            Introducing Men Collection
            <button className="p-2 text-sm bg-orange-500 font-namdhingo text-gray-100 border border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-orange-500 transition duration-300 cursor-pointer mb-10">
              SHOW COLLECTION
            </button>
          </div>

        </div>

      </div>
    </main>
  )
}