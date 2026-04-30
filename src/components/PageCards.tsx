export default function PageCards(){
  return(
    <main className="p-8">
      <div className="flex gap-2 items-center justify-center">
        <div className="aspect-square w-full cursor-pointer">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover object-top hover:scale-110 transition duration-500" src="/women-suit2.png"></img>
          </div>
          <span className=" font-semibold font-playfair text-xl w-full flex items-center justify-center mt-2">Suits For Women</span>
        </div>
        <div className="aspect-square w-full cursor-pointer">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover object-bottom hover:scale-110 transition duration-500" src="/women-shoes.png"></img>
          </div>
          <span className="font-semibold font-playfair text-xl w-full flex items-center justify-center mt-2">Shoes For Women</span>
        </div>
        <div className="aspect-square w-full cursor-pointer">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-110 transition duration-500" src="/accessroies.png"></img>
          </div>
          <span className="font-semibold font-playfair text-xl w-full flex items-center justify-center mt-2">Accessories</span>
        </div>
        <div className="aspect-square w-full cursor-pointer">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover object-bottom hover:scale-110 transition duration-500" src="/bags.png"></img>
          </div>
          <span className="font-semibold font-playfair text-xl w-full flex items-center justify-center mt-2">Bags</span>
        </div>
      </div>
    </main>
  )
}