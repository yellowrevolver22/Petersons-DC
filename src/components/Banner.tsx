import { motion } from "framer-motion";

export default function Banner() {
  return (
    <main className="relative h-screen bg-black">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src="/banner-photo.jpg"></img>
      </div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 80,
          damping: 16
         }}
        className="absolute text-white font-semibold z-10 inset-0 flex flex-col items-center justify-end gap-5">
        <h1 className="w-2xl text-center text-6xl font-playfair">Crafted for Those Who Notice the Details.</h1>
        <button className="p-3 text-md bg-orange-500 font-namdhingo text-gray-100 border border-orange-500 hover:bg-transparent
         hover:border-orange-500 hover:text-orange-500 transition duration-300 cursor-pointer mb-10">VIEW COLLECTION</button>
      </motion.div>
    </main>
  )
}