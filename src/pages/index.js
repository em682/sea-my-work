import React, {useEffect,useRef} from "react";
import lottie from "lottie-web/build/player/lottie_light";
import turtle from "../animations/turtle.json";
import whale from "../animations/whale.json";
import sun from '../assets/sun.png';
import birds from '../assets/birds.png';  
import Wave from 'react-wavify';
import "../style.css"
import Project from "../components/project"
import { AiFillLinkedin,AiFillGithub,AiFillInstagram,AiFillMail } from 'react-icons/ai';
const scrollToRef = (ref) => window.scrollTo({top:ref.current.offsetTop,behavior: 'smooth'}) 

export default function Home() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#whale"),
      animationData: whale,
      loop: true, 
  autoplay: true
    });
    lottie.loadAnimation({
      container: document.querySelector("#turtle"),
      animationData: turtle,
      loop: true, 
  autoplay: true
    });
  }, []);
  
  const aboutRef = useRef(null)
  const projRef = useRef()
  const goToAbout = () => scrollToRef(aboutRef)
  
  const goToProjects = () => scrollToRef(projRef);
  return (
    <div style={{backgroundColor:"#0097FF"}}>
      <header className="header" style={{backgroundImage: 'linear-gradient(#f4afc2,#b28bc0)'}}>
      <img src={sun} alt="Sun" className="sun"/>
      <img src={birds} alt="Seagulls" className="birds"/>
            <div className="nav">
                <h1>Ethan Ma</h1>
                <nav>
                    <button style={{cursor:'pointer'}} onClick={goToAbout}>About</button> 
                    <button style={{cursor:'pointer'}} onClick={goToProjects}>Projects</button> 
                </nav>
            </div>
            <Wave 
                className="wave"
                fill='#00a8ff'
                paused={false}
                options={{
                height: 50,
                amplitude: 150,
                speed: 0.15,
                points: 3
                }}
            />
            <Wave 
                className="wave"
                fill='#0266c8'
                paused={false}
                options={{
                height: 40,
                amplitude: 80,
                speed: 0.15,
                points: 5,
                }}
            />
      </header>
      <div className="content" style={{backgroundImage: 'linear-gradient(#0266c8,#003062)' }}>

        <h2 ref={aboutRef}>About Me</h2>
        <p>I am a junior studying information science at Cornell University. I am interested in web/app development, 
          particularly the front-end side. I also have an interest in data science and would love to delve deeper into it. 
          My interests are mainly dancing, basketball, and gaming. I also 
          enjoy cooking and rock climbing. I am a huge NBA fan.
        </p>
        <p>I dont have many skills but im good at coding lol. 
        </p>

        <div style={{width:'20vw',marginTop:'20vw',marginBottom:'20vw'}}id="turtle" />
        
        <h2 ref={projRef} > Projects</h2>
        <div className="projects">
              <Project/>
              <Project/>
              <Project/>
        </div>
           <div style={{width:'30vw',margin:'auto'}} id="whale" />

        <h2 className="special" style={{color:"#FD7014"}}>Let's Connect!</h2>

        <div className='icon-links'>
          <AiFillLinkedin color="#fff" size={"10vw"}/>
          <AiFillGithub color="#fff" size={"10vw"}/>
          <AiFillInstagram color="#fff" size={"10vw"}/>
          <AiFillMail color="#fff" size={"10vw"}/>
        </div>
        <p>Designed and built by Ethan Ma</p>
        
        
      </div>
      
    </div>)
}
