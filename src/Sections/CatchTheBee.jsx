import React, { useEffect, useRef } from 'react'
import bee from '../techhunterssAssets/bee-removebg-preview.png'
import { gsap } from "gsap";
import MagneticHover from '../Components/Magnetic';


const CatchTheBee = () => {

    const divRef = useRef(null);
    const beeRef = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(beeRef.current, "x", {duration: 1, ease: 'elastic.out(1,0.3'});
        const yTo = gsap.quickTo(beeRef.current, "y", {duration: 1, ease: 'elastic.out(1,0.3'});

        const mouseMove = (e) => {
            const { clientX, clientY} = e;
            const { width, height, left, top} = divRef.current.getBoundingClientRect();

            const midX = left + (width/2);
            const midY = top + (height/2);

            if(clientX <= midX) {
                xTo(clientX - (left + width / 2) - 50);
            }else{
                xTo(clientX - (left + width / 2) + 50);
            }

            if (clientY <= midY){
                yTo(clientY - (top + height / 2 ) - 50);
            }else{
                yTo(clientY - (top + height / 2 ) + 50);

            }
        }

        const mouseLeave = (e) =>{
            xTo(0);
            yTo(0);
        }

        divRef.current.addEventListener("mousemove", mouseMove);
        divRef.current.addEventListener("mouseleave", mouseLeave);

        return () => {
        divRef.current.removeEventListener("mousemove", mouseMove);
        divRef.current.removeEventListener("mouseleave", mouseLeave);
        }
    },[])


    const beeHandler = () => {
        window.open("https://hunterssss.in", "_blank");
    }

    const itHandler = () => {
        alert('You have to click on the bee. srry')
    }

    const wordBeeHandler = () => {
        alert('nope. it\'s the bee')
    }

    const openEmail = () => { window.location.href = "mailto:example@example.com"; };
      


  return (
    <div className=' min-h-screen w-screen px-44 cursor-pointer'>
        <h1 className=' text-[#a36f00] text-4xl text-left w-fit mt-[100px] gap-2 flex items-center'>
            $ git  fetch <b onClick={wordBeeHandler}> bee;</b>
            <pre className=' text-sm italic ml-16'>A truee hunter can get the bee (click on <span onClick={itHandler}>it</span>)</pre>
        </h1>

        <div ref={divRef} className=' relative flex items-center justify-center left-[46%] w-[150px] aspect-square'>
            <img ref={beeRef} onClick={beeHandler} src={bee} width={24}/>
        </div>

        <MagneticHover>
            <button onClick={openEmail} className=' font-reguular text-2xl px-6 py-3 bg-yellow-500 rounded-lg flex items-center gap-5 mx-auto mt-16'>
                I Give Up <p className=' text-[8px]'>and you are Hired</p>
            </button>
        </MagneticHover>
    </div>
  )
}

export default CatchTheBee