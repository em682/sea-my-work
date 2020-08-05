import React, {useEffect,useRef} from "react";
import lottie from "lottie-web/build/player/lottie_light";
import turtle from "../animations/turtle.json";
import whale from "../animations/whale.json";
import me from '../assets/me.jpg';
import birds from '../assets/birds.png';  
import Wave from 'react-wavify';
import "../default.css"
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
  const contactRef = useRef()

  const goToAbout = () => scrollToRef(aboutRef)
  const goToProjects = () => scrollToRef(projRef);
  const goToContact = () => scrollToRef(contactRef);

  return (
    <div style={{backgroundColor:"#0097FF"}}>
      <header className="header" style={{backgroundImage: 'linear-gradient(#f4afc2,#b28bc0)'}}>
        <div className="sun"/>
      <img src={birds} alt="Seagulls" className="birds"/>
            <div className="nav">
                <h1>Ethan Ma</h1>
                <nav>
                    <button style={{cursor:'pointer'}} onClick={goToAbout}>About</button> 
                    <button style={{cursor:'pointer'}} onClick={goToProjects}>Projects</button> 
                    <button style={{cursor:'pointer'}} onClick={goToContact}>Contact</button> 
                </nav>
            </div>
            <Wave 
                className="wave"
                fill='#0266c8'
                paused={false}
                options={{
                  height: 10,
                  amplitude: 25,
                  speed: 0.2,
                  points: 3
                }}
            />
      </header>
      <div className="content" style={{backgroundImage: 'linear-gradient(#0266c8,#003062)' }}>

        <h2 style={{paddingTop:'5vw'}}ref={aboutRef}>About Me</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
          <img src={me} alt="That's me" className= "me"/>
          <div className= "aboutCard">
            <p>I am a junior studying information science at Cornell University. I am interested in front end development 
              with working experience in using React and React Native.
              I also have an interest in data science and would love to delve deeper into it. 
              My interests are mainly dancing, basketball, and rock climbing.
            </p>
            <div style={{ paddingTop: '150px'}}>
            <p className="skills">
              Languages: HTML/CSS, Javascript, Java, and Python
            </p>
            <p className="skills">
              Technologies: ReactJS, GatsbyJS, React Native, pandas, and scikit-learn
            </p>
            </div>
            
          </div>
        </div>
        <p>
        </p>

        <div className="turt" style={{width:'20vw',right:0,opacity:0}}id="turtle" />
        
        <h2 ref={projRef} style={{marginTop:'200px',paddingTop:'5vw'}}>Projects</h2>
        <div className="projects">
              <Project id ={0}/>
              <Project id ={1}/>
              <Project/>
        </div>
           <div style={{width:'40vw',margin:'auto'}} id="whale" />

        <h2  ref={contactRef} className="special">Let's Connect!</h2>
        <div className='icon-links'>
              <a href="https://www.linkedin.com/in/ethan-ma-705147182/">
                <AiFillLinkedin color="#fff" size={"10vw"}/>
              </a>
              <a href="https://github.com/em682">
                <AiFillGithub color="#fff" size={"10vw"}/>
              </a>
              <a href="https://www.instagram.com/_breaking_boards_/">
                <AiFillInstagram color="#fff" size={"10vw"}/>
              </a>
              <a href="mailto:ethanma2k@gmail.com">
                <AiFillMail color="#fff" size={"10vw"}/>
              </a> 
        </div>
        <div className="credits">
          <a className='center' href="https://github.com/em682/ocean-portfolio">Designed and built by Ethan Ma</a>
          <p className='center'> Lottie Animations used from</p>
          <p className='center'> @Elan Chez / LottieFiles </p>
          <p className='center'> @Jorge Cortes S. / LottieFiles</p>
        </div>
      </div>
      
    </div>)
}
