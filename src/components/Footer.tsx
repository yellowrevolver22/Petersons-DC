export default function Footer() {
  return (

    <footer className="h-[10vh] bg-black text-orange-500 flex items-center justify-between px-8 text-sm">

      <div className="font-semibold tracking-wide">
        Petersons © 2026
      </div>

      <div className="flex gap-6 text-gray-400">
        <a href="#" className="hover:text-orange-500 transition">About</a>
        <a href="#" className="hover:text-orange-500 transition">Collection</a>
        <a href="#" className="hover:text-orange-500 transition">Contact</a>
      </div>

      <div className="text-gray-500 text-xs">
        Crafted with precision
      </div>

    </footer>
  )
}
