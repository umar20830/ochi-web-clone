import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const FeaturedProjects = () => {

  const cards =  [useAnimation(),useAnimation(),useAnimation(),useAnimation()];

  const startHandler = (index)=>{
        cards[index].start({y:"0%"})
  }
 
  const endHandler = (index)=>{
        cards[index].start({y:"75%"})
  }


    return (
        <>
            <div className="w-full pb-[4vw] font-['Neue_Montreal']">
                <h1 className="text-[3.6vw] text-[#212121] pb-[2vw] pl-[3vw] mt-[5vw] border-b-[2px]">Featured projects</h1>

                <div className="projects w-full mt-[4vw] px-[3vw] flex justify-around items-center gap-[1vw] flex-wrap">
                    {[
                        "/images/projects/project1.png",
                        "/images/projects/project2.jpg",
                        "/images/projects/project3.jpg",
                        "/images/projects/project4.png"
                    ].map((img, index) => {
                        return (
                            <>
                                <div>
                                    <div className="flex items-center gap-2 mb-[1vw]"><div className="w-[0.7vw] h-[0.7vw] bg-black rounded-full"></div><h2>{index === 0 ? "FYDE" : index === 1 ? "VISA" : index === 2 ? "TRAWA" : "PREMIUM BLEND"}</h2></div>
                                    <div key={index} onMouseEnter={()=>setEffect(true)} onMouseLeave={()=>setEffect(false)} className="w-[45vw] h-[35vw] ">
                                       <motion.div onHoverStart={()=>startHandler(index)} onHoverEnd={()=>endHandler(index)} className="relative w-full h-full hover:scale-[95%] transition-all duration-150">
                                        <h1
                                        className={`overflow-hidden absolute z-50 text-[5vw] text-[#0c4b43] font-bold top-[14vw] ${index===0 ? "left-[31vw]" : index===2 ? "left-[27vw]" : "left-[2vw]" }`}>
                                            {index===0 ? "FYDE".split("").map((e,index)=><motion.span initial={{y:"75%"}} animate={cards[0]} transition={{duration:.4,delay:index*.05}} key={index} className="inline-block" >{e}</motion.span>) : 
                                             index===1 ? "VISE".split("").map((e,index)=><motion.span initial={{y:"75%"}} animate={cards[1]} transition={{duration:.4,delay:index*.05}} className="inline-block" >{e}</motion.span>) :
                                             index===2 ? "TRAWA".split("").map((e,index)=><motion.span  initial={{y:"75%"}} animate={cards[2]} transition={{duration:.4,delay:index*.05}} key={index} className="inline-block" >{e}</motion.span>) : 
                                             "PREMIUM-BLEND".split("").map((e,index)=><motion.span  initial={{y:"75%"}} animate={cards[3]} transition={{duration:.4,delay:index*.05}} key={index} className="inline-block" >{e}</motion.span>)}
                                            </h1>
                                       <img src={img} alt="Image" className={`w-full h-full rounded-xl hover:opacity-60`} />
                                       </motion.div>
                                    </div>
                                    <div className="buttons flex gap-2">
                                        {
                                            index === 0 ? ["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map((btn, index) => (
                                                <button key={index} className="border border-[#3b3b3b] uppercase px-[1vw] py-[0.1vw] rounded-full text-[1.1vw] text-black mt-[1.2vw] mb-[2vw] hover:bg-[#212121] hover:text-white transition-all duration-[0.3s]">
                                                    {btn}
                                                </button>
                                            )) : index===1 ? ["AGENCY","COMPANY PRESENTATION"].map((btn, index) => (
                                                <button key={index} className="border border-[#3b3b3b] uppercase px-[1vw] py-[0.1vw] rounded-full text-[1.1vw] text-black mt-[1.2vw] mb-[2vw] hover:bg-[#212121] hover:text-white transition-all duration-[0.3s]">
                                                    {btn}
                                                </button>
                                            )) : index===2 ? ["BRAND IDENTITY","DESIGN REASRCH","INVESTOR DECK"].map((btn, index) => (
                                                <button key={index} className="border border-[#3b3b3b] uppercase px-[1vw] py-[0.1vw] rounded-full text-[1.1vw] text-black mt-[1.2vw] mb-[2vw] hover:bg-[#212121] hover:text-white transition-all duration-[0.3s]">
                                                    {btn}
                                                </button>
                                            )) : ["BRANDED TEMPLATE"].map((btn, index) => (
                                                <button key={index} className="border border-[#3b3b3b] uppercase px-[1vw] py-[0.1vw] rounded-full text-[1.1vw] text-black mt-[1.2vw] mb-[2vw] hover:bg-[#212121] hover:text-white transition-all duration-[0.3s]">
                                                    {btn}
                                                </button>
                                            ))
                                        }
                                      
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>

            </div>


        </>
    )
}

export default FeaturedProjects
