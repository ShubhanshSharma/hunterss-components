import React, { useEffect } from 'react'
import prize1 from '../techhunterssAssets/1st prize.png';
import prize2 from '../techhunterssAssets/2nd prize.png';
import prize3 from '../techhunterssAssets/3rd prize.png';
import ReactParallaxTilt from 'react-parallax-tilt';
import gsap from 'gsap';
import Cursor from '../Components/Cursor';

const Prizes = () => {

    useEffect(() => {

        const tl = gsap.timeline();

        tl.fromTo('.card', {
            yPercent: -50,
            opacity: 0,
        },
        {
            yPercent: 0,
            opacity:1,
            duration: 0.5,
            ease: "bounce.out",
            stagger:{
                each:0.4,
            },
            delay:1,
        })
        tl.to('.card',{
            boxShadow: '0px 0px 80px 0px rgba(163,111,0,1)',
            duration: 0.4,
            ease:'power3.out'
        })
        tl.to('.card',{
            boxShadow: '',
            duration: 0.4,
            delay: 0.4,
        })
        tl.to('.card',{
            scale: 0.8,
            duration: 0.4,
        })
    },[])

  return (
    <div className=' h-screen w-full gap-8 px-44 flex flex-col justify-between cursor-none'>\
    {/* Cursor */}
    <Cursor />

        <div className=' text-[#a36f00] text-4xl text-left w-fit mt-[0px] flex items-center'>
            <p>$ git  commit   <b> Prizes;</b></p>
            <pre className=' italic text-sm'>                             (hover)</pre>
        </div>
        <div className=' relative w-full flex justify-between px44 items-center'>
            <ReactParallaxTilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#a36f00" glarePosition='all' glareBorderRadius="0px" scale={1.25}>
                <img src={prize2} className='card big rounded-xl transform duration-500 hover:shadow-prize '/>
            </ReactParallaxTilt>
            <ReactParallaxTilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#a36f00" glarePosition='all' glareBorderRadius="0px" scale={1.25}>
                <img src={prize1} className='card big rounded-xl transform duration-500 hover:shadow-prize '/>
            </ReactParallaxTilt>
            <ReactParallaxTilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#a36f00" glarePosition='all' glareBorderRadius="0px" scale={1.25}>
                <img src={prize3} className='card big rounded-xl transform duration-500 hover:shadow-prize '/>
            </ReactParallaxTilt>
        </div>
        
    </div>
  )
}

export default Prizes