import { useState, useEffect, useRef } from 'react';
// import './Cursor.css';
import gsap from 'gsap';
// import { AnimatePresence, easeInOut, easeOut, motion } from 'framer-motion';

export default function Cursor(){
    const ref = useRef(null);

    useEffect(() =>{
        const cursor = document.getElementsByClassName("custom-cursor");
        const links = document.querySelectorAll(".big");
        const cursorText = document.getElementsByClassName("cursor-text");

        const onmousemove = (e) =>{
            const {clientX, clientY} = e;
            gsap.to(ref.current,{x:clientX-5,y:clientY-5}, {ease: 'elastic.out'});
        }

        const onmouseenter = (e) =>{
            const link = e.target;
            if(link.classList.contains('view')){
                gsap.to(cursor,{scale:4});
                cursorText.style.display = 'block'
            }
            else{
                gsap.to(cursor, {scale:0.2})
            }
        }

        const onmouseleave = (e) =>{
            const link = e.target;
            if(link.classList.contains('view')){
                gsap.to(cursor,{scale:1});
                cursorText.style.display = 'none';
            }
            else{
                gsap.to(cursor, {scale:1})
            }
        }

        document.addEventListener("mousemove", onmousemove);
        links.forEach((link)=>{
            link.addEventListener("mouseenter", onmouseenter);
            link.addEventListener("mouseleave", onmouseleave);
        })
    })

    return(
        <div ref={ref} id='custom-cursor' className='custom-cursor'>
            <span className='cursor-text'>Open</span>
        </div>
    )}