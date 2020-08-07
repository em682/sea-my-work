import React, {useEffect,useRef,useState} from "react";
import lottie from "lottie-web/build/player/lottie_light";
import turtle from "../animations/turtle.json";
import whale from "../animations/whale.json";
import me from '../assets/me.jpg';
import birds from '../assets/birds.png'; 
import logo from '../assets/logo2.png';
import logo2 from '../assets/logo.png';
import Wave from 'react-wavify';
import "../style/default.css";
import Switch from "../components/switch";
import { AiFillLinkedin,AiFillGithub,AiFillInstagram,AiFillMail } from 'react-icons/ai';
import HamburgerMenu from 'react-hamburger-menu';
import {theme1,theme2} from "../style/theme.js";
import Runlogo from '../assets/RunawayLogoTransparent.png'
import music from '../assets/m.png'
import cali from '../assets/cal.png'
import {DiReact,DiJavascript1,DiPython,DiHtml5,DiCss3,DiPhp} from 'react-icons/di'
import {FiExternalLink,FiGithub,FiChevronsDown} from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const scrollToRef = (ref) => window.scrollTo({top:ref.current.offsetTop,behavior: 'smooth'}) 

export default function Home() {


  const [open, setOpen] = useState(false);
  const [light,setLight] = useState(true);

  var theme = theme1;
  if (light){
   theme=theme1
  }
  else theme=theme2

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
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };


  const aboutRef = useRef(null)
  const projRef = useRef()
  const contactRef = useRef()

  const goToAbout = () => scrollToRef(aboutRef)
  const goToProjects = () => scrollToRef(projRef);
  const goToContact = () => scrollToRef(contactRef);

  function handleClick() {
    setOpen(!open)
  }
  

   const Project = ({id})=> {
    return(
        <div className="projectContainer">
            { id ===0 ?
            <div> 
                <div className="overlay">
                    <div className="icons">
                        <DiJavascript1 color="#fff" size={'calc(20px + 3vw)'} />
                        <DiReact color="#fff" size={'calc(20px + 3vw)'} />
                    </div>
                </div>
                <div className="projectImg">
                    <img src={Runlogo} alt="Runaway" className="img"/>     
                </div>
                <div className='descCard' style={{backgroundColor:theme.secondary}}>
                    <p className="title" style={{color:theme.tertiary}}>Runaway App</p>
                    <p className="desc">Worked as a front end developer for Runaway's mobile and web app. 
                    Features I worked on include an infinite scrolling feed, messaging, and filtering resources from the database.</p>
                    <div className="external">
                        <a href="https://github.com/umcody/runaway">
                            <FiGithub color="#fff" size={'calc(20px + 3vw)'} />
                        </a>
                        <a href="https://www.runawayapp.com">
                            <FiExternalLink color="#fff" size={'calc(20px + 3vw)'} />
                        </a>
                    </div>
                </div>
            </div>
            : 
            id ===1 ?  
            <div>
                <div className="overlay">
                <div className="icons">
                        <DiPython color="#fff" size={'calc(20px + 3vw)'} />
                    </div>
                </div>
                <div className="projectImg">
                    <img src={music} alt="Music Taste" className="img"/>     
                </div>
                <div className='descCard' style={{backgroundColor:theme.secondary}}>
                    <p className="title" style={{color:theme.tertiary}}>Music Taste</p>
                    <p className="desc">Using pandas and Jupyter notebook, I performed data analysis on my listening 
                    trends based on data from the Spotify Web API. Data was then visualized with Infogram.</p>
                    <div className="external">
                        <a href="https://github.com/em682/music-taste">
                                <FiGithub color="#fff" size={'calc(20px + 3vw)'} />
                        </a>
                        <a href="https://infogram.com/music-taste-1h8n6m1llv9m6xo?live">
                                <FiExternalLink color="#fff" size={'calc(20px + 3vw)'} />
                        </a>
                    </div>
                </div>
            </div>
            : 
            <div>
                <div className="overlay">
                <div className="icons">
                        <DiHtml5 color="#fff" size={'calc(20px + 3vw)'} />
                        <DiCss3 color="#fff" size={'calc(20px + 3vw)'} />
                        <DiPhp color="#fff" size={'calc(20px + 3vw)'} />
                    </div>
                </div>
                <div className="projectImg">
                    <img src={cali} alt="Calisthenics" className="img"/>     
                </div>
                <div className='descCard' style={{backgroundColor:theme.secondary}}>
                    <p className="title" style={{color:theme.tertiary}}>Calisthenics</p>
                    <p className="desc">Created a basic website to practice backend development and database querying. 
                    The site has a list of exercises with tags and descriptions, allowing user upload.</p>
                    <div className="external">
                        <a href="https://serene-forest-61580.herokuapp.com/index.php">
                            <FiExternalLink color="#fff" size={'calc(20px + 3vw)'} />
                        </a>
                    </div>
                </div>
            </div>
                 } 
        </div>
    )
}


  return (
    <div style={{backgroundColor:theme.primary}}>
      <header className="header" style={{backgroundImage:theme.header}}>
        <div className="sun" style={{backgroundColor:theme.sun}}/>
        <div style={{position:'absolute',top:'300px',left:0,width:'100%',zIndex:10}}>
          <h1 style={{color: light ? theme.secondary : theme.tertiary}}>Hey! I'm Ethan.</h1>
          <button className="sea" onClick={goToAbout}>
            
            <td style={{textAlign: 'center',width:'100%',display:'block'}}>
            <FiChevronsDown size={50} style={{color: theme.foreground}}/>
            </td>
          </button>
        </div>
        
          
          <div className="nav">
            <img src={light? logo : logo2} alt="Logo" className="logo"/>
            <div style={{position:'absolute',top:'100px',right:'4vw',zIndex:9,display:'flex',flexDirection:'row'}}>
              
              <Switch
                      isOn={light}
                      handleToggle={() => setLight(!light)} 
                  />
              
              </div>
            <nav>
              <button style={{color: light ? theme.secondary : theme.tertiary}} onClick={goToAbout}>About</button> 
              <button style={{color: light ? theme.secondary : theme.tertiary}} onClick={goToProjects}>Projects</button> 
              <button style={{color: light ? theme.secondary : theme.tertiary}} onClick={goToContact}>Contact</button> 
            </nav>
          </div>
            <HamburgerMenu
              isOpen={open}
              menuClicked={handleClick}
              width={35}
              height={27.5}
              strokeWidth={3}
              rotate={0}
              color={light ? theme.secondary : theme.tertiary}
              className="burger"
            />
            <div className={open? "open" : "menu"} style={{backgroundColor:theme.menuBack}}> 
              <nav>
              <button style={{color: light ? theme.secondary : theme.tertiary}} onClick={goToAbout}>About</button> 
              <button style={{color: light ? theme.secondary : theme.tertiary}} onClick={goToProjects}>Projects</button> 
              <button style={{color: light ? theme.secondary : theme.tertiary}} onClick={goToContact}>Contact</button> 
              </nav>

              </div>
              {light ? <img src={birds} alt="Seagulls" className="birds"/> : null}
            <Wave 
                className="wave"
                fill={theme.primary}
                paused={false}
                options={{
                  height: 10,
                  amplitude: 25,
                  speed: 0.2,
                  points: 3
                }}
            />
      </header>
      <div className="content" style={{backgroundImage: theme.water }}>
        <h2 style={{color:theme.foreground}} className ="aboutTitle" ref={aboutRef}>About Me</h2>
        <div className='about'>
          <img src={me} alt="That's me" className= "me"/>
          <div className="bio">
            <div className= "aboutCard" style={{backgroundColor:theme.secondary}}>
              <p >I'm a student at Cornell University studying Info Science. I enjoy designing and coding applications.
                I'm also interested in data science and would love to delve deeper.
                My interests are mainly dancing, basketball, and rock climbing.
              </p>
            </div>
            <div className="skillsContainer" style={{backgroundColor:theme.secondary}}>
              <p className="skills">
                Languages:
              </p>
              <ul>
                <li style={{borderColor:theme.tertiary}}>HTML5</li>
                <li style={{borderColor:theme.tertiary}}>CSS3</li>
                <li style={{borderColor:theme.tertiary}}>Javascript</li>
                <li style={{borderColor:theme.tertiary}}>Java</li>
                <li style={{borderColor:theme.tertiary}}>Python</li>
              </ul>
              <p className="skills">
                Technologies:
              </p>
              <ul>
                <li style={{borderColor:theme.tertiary}}>React</li>
                <li style={{borderColor:theme.tertiary}}>Gatsby</li>
                <li style={{borderColor:theme.tertiary}}>React Native</li>
                <li style={{borderColor:theme.tertiary}}>pandas</li>
                <li style={{borderColor:theme.tertiary}}>scikit-learn</li>
              </ul>
            </div>
          </div>
            
            <div>
          </div>
        </div>
        <p>
        </p>

        <div className="turt" style={{width:'250px',right:0,opacity:0}}id="turtle" />
        
        <h2 style={{color:theme.foreground}} ref={projRef} style={{marginTop:'200px',paddingTop:'2vw'}}>Projects</h2>

        <div className="projectsMobile">
            <div className = "slider">
            <Slider {...settings}>
                <div>
                <Project id={0}/>
                </div>
                <div>
                <Project id={1}/>
                </div>
                <div>
                <Project id={2}/>
                </div>
              
            </Slider>
            </div>
        </div>
        <div className="projects">
              <Project id ={0} />
              <Project id ={1}/>
              <Project />
        </div> 
      
           <div style={{width:'50vw',margin:'auto'}} id="whale" />

        <h2 style={{color:theme.tertiary}} ref={contactRef} className="special">Let's Connect!</h2>
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
