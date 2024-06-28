import React from 'react'

const Cards = () => {
  return (
   <>
        <div className="card w-full h-screen flex items-center gap-[1.3vw] px-[4vw]">
            <div className="cardcontainer w-1/2 h-[60vh]">
                <div className="relative w-full h-full bg-[#004d43] rounded-xl flex justify-center items-center">
                    <img src="/images/card/logoForCard.svg" alt="Ochi Logo" width={200} />
                    <div className="absolute bottom-[2vw] left-[2vw] font-bold border border-[#99ad53] text-[#99ad53] px-2 rounded-xl">&copy;2019-2023</div>
                </div>
            </div>
            <div className="cardcontainer w-1/2 h-[60vh] flex gap-[1.3vw]">
                <div className="relative w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center">
                    <img src="/images/card/starForCard.svg" alt="Star" width={200} />
                    <button className="absolute bottom-[2vw] left-[2vw] border px-2 rounded-xl text-white font-semibold tracking-tighter opacity-70">RATING 5.0 ON CLUTCH</button>
                </div>
                <div className="relative w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center">
                    <img src="/images/card/imgForCard.png" alt="Image" width={200} />
                    <button className="absolute bottom-[2vw] left-[2vw] border px-2 rounded-xl text-white font-semibold tracking-tighter opacity-70">BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
   
   </>
  )
}

export default Cards
