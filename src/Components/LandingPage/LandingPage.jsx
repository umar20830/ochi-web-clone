import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
    return (
        <>
            <div className="w-full h-screen pt-1">
                <div className="textstructure mt-[10vw]">
                    {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((marker, index) => {
                        return (
                            <div className="marker text-[#212121] font-['Test_Founders_Grotesk_X_Condensed'] ml-20">
                                <div className="w-fit flex items-center gap-2 overflow-hidden">
                                
                                {index===1 && <div className="w-[9vw] h-[5.3vw] bg-red-600 relative top-[7px] rounded-md"></div> }

                                <h1 key={index} className="text-[9vw] leading-[7vw]">{marker}</h1>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className="border-t-[1px] border-[#b2b2b2] mt-[6vw] flex items-center justify-between py-6 px-16 font-['Neue_Montreal']">
                    {["For public and private companies", "From the first pitch to IPO"].map((p, index) => (
                        <p key={index} className="text-[1.1vw] text-[#333333] tracking-tight">{p}</p>
                    ))}
                    <div className="start flex items-center gap-1">
                        <div className="uppercase border border-[#333333] px-4 py-1 rounded-full text-[1vw] text-[#333333]">
                            <a href="#">start the project</a>
                        </div>
                        <div className="arrow border border-[#333333] p-[6px] rounded-full flex justify-center items-center">
                            <GoArrowUpRight size={"1.3vw"} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LandingPage
