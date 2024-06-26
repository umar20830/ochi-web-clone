import React from 'react'

const Marquee = () => {
  return (
    <>
        <div className="marquee py-10 w-full bg-[#004d43] rounded-tl-3xl rounded-tr-3xl">
            <div className="text flex gap-20 font-['Test_Founders_Grotesk_X_Condensed'] border-t-[1px] border-b-[1px] border-white text-white overflow-hidden">
            <h1 className="text-[20vw] text-nowrap uppercase leading-none tracking-tight -mt-[3vw]">we are ochi</h1>
            <h1 className="text-[20vw] text-nowrap uppercase leading-none tracking-tight -mt-[3vw]">we are ochi</h1>
            </div>
        </div>
    </>
  )
}

export default Marquee
