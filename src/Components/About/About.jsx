import React from 'react'

const About = () => {
    return (
        <>
            <div className="w-full py-[7vw] bg-[#cdea68] font-['Neue_Montreal'] rounded-tl-3xl rounded-tr-3xl text-[#212121]">
                <div className="offers">
                    <h1 className="ml-[3vw] mr-[18vw] text-[3.5vw] leading-[4vw] tracking-tight mb-[4vw]">Ochi is a strategic partner for fast-growing tech businesses that need to
                        {[" raise funds,", " sell products,", " explain complex ideas,", " and hire great people."].map((item, index) => {
                            return (

                                <span key={index} className="font-bold">{item}</span>
                            )
                        })}
                    </h1>
                </div>
                <div className="w-full approch border-t-[1px] border-[#99ad53] flex gap-[1vw] px-[6vw]">
                    <div className="w-1/2">
                        <h1 className="text-[3.5vw] tracking-tight">Our approach:</h1>
                        <button className="bg-[#212121] uppercase px-[2vw] py-[1vw] rounded-full text-[1vw] text-white flex items-center gap-[1.5vw]
                        mt-[.5vw]">
                            read more
                            <div className="w-[.6vw] h-[.6vw] rounded-full bg-white"></div>
                            </button>
                    </div>
                    <div className="image w-1/2 h-[55vh] mt-[1vw]">
                        <img className="rounded-xl" src="/images/aboutImage.jpg" alt="Image" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
