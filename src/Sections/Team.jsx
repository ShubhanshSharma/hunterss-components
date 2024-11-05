import React, { useEffect } from 'react'
import vinImage from '../techhunterssAssets/vinayaksir3-removebg-preview.png';
import silky from '../techhunterssAssets/silkymaamFinal.png';
import ananya from '../techhunterssAssets/ananya-removebg-preview.png'; 
import TeamCard from '../Components/TeamCard';
import gsap from 'gsap';

const Team = () => {

    const organizers = [
        {
            name: 'Vinayak',
            image: vinImage,
            cuteness: 15,
            anger: 58,
            humour: 30,
            fun: 90,
            IQ: 99,
            info: 'With great power comes great responsibilties'
        },{
            name: 'Silky',
            image: silky,
            cuteness: 85,
            anger: 58,
            humour: 30,
            fun: 90,
            IQ: 70,
            info: 'Carpe diem. Seize the day, boys. Make your lives extraordinary'
        },{
            name: 'Ananya',
            image: ananya,
            cuteness: 85,
            anger: 88,
            humour: 30,
            fun: 90,
            IQ: 50,
            info:'My mama always said life was like a box of chocolates. You never know what you\'re gonna get'
        }
    ]

    useEffect(() => {

        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.team-name',
                start: "top 50%",
                end: "bottom top",
                scrub: false, // Adjust scrub for desired effect,
                toggleActions: 'play none none reverse',
                markers: false

            }
        })

        tl.fromTo('.team-word', {
            y:-140,
            opacity: 0,
        },
        {
            y:0,
            opacity:1,
            duration: 1.2,
            stagger:{
                each:0.05
            },
            delay: 1,
            ease: 'bounce.out'
        })

        
    },[])
  return (
    <div className=' min-h-screen w-screen'>

            
            <div className='team' >

                <div className='single-team-container flex flex-col mt-12' style={{height: "unset"}}>
                    <div className='team-name team-name-organisers flex mx-auto text-6xl font-bold mb-10'>
                                {
                                    'Organizers'.split('').map((word) => {
                                        return word === '' ? <div className='word'>&nbsp;</div> : <div className='team-word text-[#a36f00]'>{word}</div>
                                    })
                                }
                    </div>
                    

                    {/* team cards */}
                    <div className='team-cards-container team-scroll flex w-full justify-around'  >
                        {
                            organizers.map((member) => {
                                // console.log(member.image)
                                return (<TeamCard  name={member.name} img={member.image} cuteness={member.cuteness}
                                anger={member.anger} humour={member.humour} IQ={member.IQ} fun={member.fun} info={member.info} />)
                            })
                        }
                    </div>
                </div>
                    
            </div>
        </div>
  )
}

export default Team