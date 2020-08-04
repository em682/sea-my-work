import React, {useEffect,useRef} from "react";
import lottie from "lottie-web/build/player/lottie_light";
import turtle from "../animations/turtle.json";
import whale from "../animations/whale.json";
import sun from '../assets/sun2.png';
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
      <header className="header" style={{backgroundImage: 'linear-gradient(#b28bc0,#f4afc2)'}}>
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
                fill='#0266c8'
                paused={false}
                options={{
                  height: 10,
                  amplitude: 20,
                  speed: 0.15,
                  points: 3
                }}
            />
      </header>
      <div className="content" style={{backgroundImage: 'linear-gradient(#0266c8,#003062)' }}>

        <h2 style={{paddingTop:'5vh'}}ref={aboutRef}>About Me</h2>
        <p>I am a junior studying information science at Cornell University. I am interested in web/app development, 
          particularly the front-end side. I also have an interest in data science and would love to delve deeper into it. 
          My interests are mainly dancing, basketball, and gaming. I also 
          enjoy cooking and rock climbing. I am a huge NBA fan.
        </p>
        <p>I dont have many skills but im good at coding lol. 
        </p>

        <div className="turt" style={{width:'20vw',right:0,opacity:0}}id="turtle" />
        
        <h2 ref={projRef} style={{marginTop:'30vh',paddingTop:'5vh'}}>Projects</h2>
        <div className="projects">
              <Project/>
              <Project/>
              <Project/>
        </div>
           <div style={{width:'40vw',margin:'auto'}} id="whale" />

        <h1 className="special" style={{color:"#00a8ff"}}>Let's Connect!</h1>

        <div className='icon-links'>
          <AiFillLinkedin color="#fff" size={"10vw"}/>
          <AiFillGithub color="#fff" size={"10vw"}/>
          <AiFillInstagram color="#fff" size={"10vw"}/>
          <AiFillMail color="#fff" size={"10vw"}/>
        </div>
        <div style={{textAlign:'center'}}>
          <a className='center' href="https://github.com/em682/ocean-portfolio">Designed and built by Ethan Ma</a>
        </div>
        <p className='center'> Lottie Animations used from
          @shafiu / LottieFiles @shafiu / LottieFiles</p>
        
      </div>
      
    </div>)
}
