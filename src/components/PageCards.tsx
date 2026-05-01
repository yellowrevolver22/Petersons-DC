import { motion } from 'framer-motion'

const cards = [
  { label: 'Suits For Women', src: '/women-suit2.png', position: 'object-top' },
  { label: 'Shoes For Women', src: '/women-shoes.png', position: 'object-bottom' },
  { label: 'Accessories',     src: '/accessroies.png', position: 'object-center' },
  { label: 'Bags',            src: '/bags.png',         position: 'object-bottom' },
]

export default function PageCards() {
  return (
    <main className="p-8">
      <div className="font-semibold font-playfair mt-15 mb-10 text-4xl text-center">
        Explore a Selection of the Maison's Creations
      </div>

      <div className="flex gap-2 items-start justify-center">
        {cards.map(({ label, src, position }) => (
          <div key={label} className="w-full cursor-pointer">
            <div className="aspect-square overflow-hidden">
              <motion.img
                src={src}
                alt={label}
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
                className={`w-full h-full object-cover ${position} hover:scale-110 transition duration-500`}
              />
            </div>

            <span className="font-semibold font-playfair text-xl flex items-center justify-center mt-2">
              {label}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}