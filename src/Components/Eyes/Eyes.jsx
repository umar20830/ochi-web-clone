import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;

            let halfWidth = window.innerWidth / 2;
            let halfHeight = window.innerHeight / 2;

            let deltaX = x - halfWidth;
            let deltaY = y - halfHeight;

            // Above four lines also written as:
            // let deltaX = x - window.innerWidth/2;
            // let deltaY = y - window.innerHeight/2;

            let angleFromCenterToYourPoint = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            let angle = Math.atan2(deltaY,deltaX);

            setRotate(angleFromCenterToYourPoint-180);

        })
    })

    return (
        <>
            <div className="eyes w-full h-screen">
                <div className="background relative bg-cover bg-center w-full h-full bg-[url('/images/eyesbg.jpg')]">
                    <div className="flex gap-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[100%]">
                        <div className="outer w-[16vw] h-[16vw] rounded-full bg-white flex justify-center items-center">
                            <p className="absolute text-[2vw] text-white">play</p>
                            <div className="inner w-[10vw] h-[10vw] bg-[#212121] rounded-full flex justify-center items-center">
                                <div style={{ transform: `rotate(${rotate}deg)` }} className="w-full">
                                    <div className="dot w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="outer w-[16vw] h-[16vw] rounded-full bg-white flex justify-center items-center">
                            <p className="absolute text-[2vw] text-white">Play</p>
                            <div className="inner w-[10vw] h-[10vw] bg-[#212121] rounded-full flex justify-center items-center">
                                <div style={{ transform: `rotate(${rotate}deg)`}} className="w-full">
                                    <div className="dot w-[1.5vw] h-[1.5vw] bg-white rounded-full "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Eyes
