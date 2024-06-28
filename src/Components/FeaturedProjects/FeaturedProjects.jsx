import React from 'react'

const FeaturedProjects = () => {
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
                                    <div key={index} className="w-[45vw] h-[35vw] ">
                                       <div className="relative w-full h-full hover:scale-[95%] transition-all duration-150">
                                        <h1 className={`absolute z-50 text-[5vw] text-[#0c4b43] font-bold top-[14vw] ${index===0 ? "left-[32vw]" : index===2 ? "left-[28vw]" : null }`}>
                                            {index===0 ? "FYDE".split("").map((e,index)=><span key={index}>{e}</span>) : 
                                             index===1 ? "VISE".split("").map((e,index)=><span key={index}>{e}</span>) :
                                             index===2 ? "TRAWA".split("").map((e,index)=><span key={index}>{e}</span>) : 
                                             "PREMIUM BLEND".split("").map((e,index)=><span key={index}>{e}</span>)}
                                            </h1>
                                       <img src={img} alt="Image" className={`w-full h-full rounded-xl hover:opacity-60`} />
                                       </div>
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
