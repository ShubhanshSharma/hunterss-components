import './TeamCard.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, } from 'react';
import Tilt from 'react-parallax-tilt';
import bee from '../techhunterssAssets/bee-removebg-preview.png'
// import ReactDOM from 'react-dom';



gsap.registerPlugin(ScrollTrigger);

export default function TeamCard(props){

    //hover text animation
    const cardRef = useRef(null);
    const twitterTween = useRef(null);

    

    // const mouseEnterEvent = () => {
    //     twitterTween.current.play();
    // };
    // const mouseLeaveEvent = () => {
    //     twitterTween.current.reverse();
    // };


    let name = props.name;
    let image = props.img;
    let IQ = props.IQ;
    let humour = props.humour;
    let cuteness = props.cuteness;
    let anger = props.anger;
    let ig = props.ig;
    let info = props.info;
    let finesse = props.fun;
    let ln = props.ln;
    console.log(ln);


    return(
        <div className='teams-card-wrapper' id={props.id}><Tilt>
            <div className='teams-card'  >
                <div>
                    <h1 className='member-name'>{name}</h1>
                </div>
                
                <div className='member-image-container'>
                    <img src={props.img} className='member-image'></img>
                </div>

                <p ref={cardRef} className='team-card-info italic'>
                        "{info}"
                </p>

                <div className='team-card-icons'>
                    <a href={ig} className='member-insta-container' target="_blank">
                        <i className="fa-brands fa-instagram member-insta"></i>
                    </a>

                    <a href={ln} className='member-linkedin-container' target="_blank">
                    <i className="fa-brands fa-linkedin member-linkedin"></i>
                    </a>
                </div>

                

                <div className='hoverCard'>    
                    <div className='stats-section'>                        
                        
                        <div className='metrics'>
                            <span>Humour: </span>
                            <span>Cuteness: </span>
                            <span>Anger: </span>
                            <span>IQ: </span>
                            <span>Finesse: </span>
                        </div>

                        <div className='scores'>
                            <div className='humourStat flex justify-end' style={{width:`${humour}%`}}><img width={15} src={bee} className=' self-end'/></div>
                            <div className='cutenessStat flex justify-end' style={{width:`${cuteness}%`}}><img width={15} src={bee} className=' self-end'/></div>
                            <div className='angerStat flex justify-end' style={{width:`${anger}%`}}><img width={15} src={bee} className=' self-end'/></div>
                            <div className='IQStat flex justify-end' style={{width:`${IQ}%`}}><img width={15} src={bee} className=' self-end'/></div>
                            <div className='funStat flex justify-end' style={{width:`${finesse}%`}}><img width={15} src={bee} className=' self-end'/></div>
                        </div>
                        
                    </div>
                        
                </div>
            </div></Tilt>
            
            
        </div>
    )
}