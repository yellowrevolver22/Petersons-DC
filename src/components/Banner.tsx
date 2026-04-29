export default function Banner(){
  return (
    <main className="relative h-screen">
      <div className="absolute w-full">
        <img className="w-full h-screen object-cover" src="/banner-photo.jpg"></img>
      </div>
      <div className="absolute text-white font-semibold z-10 inset-0 flex flex-col items-center justify-end gap-5">
        <h1 className="w-2xl text-center text-6xl font-playfair">Crafted for Those Who Notice the Details.</h1>
        <button className="p-3 text-md bg-orange-500 font-namdhingo text-gray-100 border border-orange-500 hover:bg-transparent
         hover:border-orange-500 hover:text-orange-500 transition duration-300 cursor-pointer mb-10">VIEW COLLECTION</button>
      </div>
    </main>
  )
}