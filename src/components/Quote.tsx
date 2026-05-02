import {motion} from 'framer-motion'

export default function Quote(){
  return (
    <motion.div
      initial={{x:-80,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:1,type:"tween"}}
      className="my-30">
      <h1 className="text-7xl text-orange-500 w-full flex justify-center text-center font-playfair font-semibold">“A suit doesn’t change the man. It reveals him.”</h1>
    </motion.div>
  )
}