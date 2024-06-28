import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {


  return (
    <>
      <div className="marquee py-10 w-full bg-[#004d43] rounded-tl-3xl rounded-tr-3xl">
        <div className="text flex font-['Test_Founders_Grotesk_X_Condensed'] border-t-[1px] border-b-[1px] border-white text-white overflow-hidden">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 3, repeat: Infinity }}
            className="text-[20vw] text-nowrap uppercase leading-none -mt-[3vw] pr-[5vw]">we are ochi</motion.h1> 
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 3, repeat: Infinity }}
            className="text-[20vw] text-nowrap uppercase leading-none  -mt-[3vw] pr-[5vw]">we are ochi</motion.h1> 
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 3, repeat: Infinity }}
            className="text-[20vw] text-nowrap uppercase leading-none  -mt-[3vw] pr-[5vw]">we are ochi</motion.h1> 
    
        </div>
      </div>
    </>
  )
}

export default Marquee
