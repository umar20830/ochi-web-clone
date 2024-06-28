import React from 'react'

const StartTheProject = () => {
  return (
   <>
        <div className="w-full bg-[#cdea68] pb-[6vw]">
            <div className="heading pt-[8vw]">
                {["READY","TO START","THE PROJECT ?"].map((heading,index)=>(
                    <h1 className="text-[11vw] text-[#212121] font-black flex justify-center tracking-tighter leading-none" key={index}>{heading}</h1>
                ))}
            </div>
            <div className="w-full flex flex-col items-center mt-[2vw] gap-[1.5vw] font-['Neue_Montreal']">
                <button className="flex justify-center items-center gap-[2.3vw] px-[2vw] py-[1.2vw] bg-[#212121] rounded-full text-white text-[1vw] font-['Neue_Montreal']">START THE PROJECT 
                    <div className="w-[0.5vw] h-[0.5vw] bg-white rounded-full"></div>
                </button>
                <div className="">OR</div>
                <button className="flex justify-center items-center gap-[2vw] border border-black px-[2vw] py-[1.2vw] rounded-full text-[1vw] font-['Neue_Montreal']">HELLO@OCHI.DESIGN 
                    <div className="w-[0.5vw] h-[0.5vw] bg-black rounded-full"></div>
                </button>
            </div>
        </div>
   
   </>
  )
}

export default StartTheProject
