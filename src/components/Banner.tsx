export default function Banner(){
  return (
    <main className="relative h-screen">
      <div className="absolute w-full">
        <img className="w-full h-full object-cover blur-[2px]" src="/banner-photo.jpg"></img>
      </div>
      <div className="absolute text-white font-semibold z-10 inset-0 flex flex-col items-center justify-center gap-8">
        <h1 className="text-6xl font-playfair">Elevate Your Everyday Style</h1>
        <p className="text-3xl w-3xl text-center font-archivo">
          Discover timeless pieces designed for comfort, confidence, and effortless elegance.
          Wear what feels like you.
        </p>
        <button className="p-5 text-2xl bg-orange-500 font-namdhingo text-black border border-black hover:bg-transparent hover:border-orange-500 hover:text-orange-500 transition cursor-pointer">VIEW COLLECTION</button>
      </div>
    </main>
  )
}