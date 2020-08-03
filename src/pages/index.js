import React, {useEffect,useRef} from "react";
import lottie from "lottie-web/build/player/lottie_light";
import turtle from "../animations/turtle.json";
import whale from "../animations/whale.json";

import Header from "../components/header";
import "../style.css"
 
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

  
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  return (
    <div style={{backgroundColor:"#0097FF"}}>
      <header className="header" style={{backgroundColor:"#A9E2F4"}}>
        <Header executeScroll={executeScroll}/>
      </header>
      <div className="content" style={{backgroundImage: 'linear-gradient(#0097FF,#222831)' }}>

        <h2 ref={myRef}>About Me</h2>
        <p>I am a junior studying information science at Cornell University. I am interested in web/app development, 
          particularly the front-end side. I also have an interest in data science and would love to delve deeper into it. 
          My interests are mainly dancing, basketball, and gaming. I also 
          enjoy cooking and rock climbing. I am a huge NBA fan.
        </p>
        <h2>Projects</h2>
        <p>I am a junior studying information science at Cornell University. I am interested in web/app development, 
          particularly the front-end side. I also have an interest in data science and would love to delve deeper into it. 
          My interests are mainly dancing, basketball, and gaming. I also 
          enjoy cooking and rock climbing. I am a huge NBA fan.
        </p>

        <div style={{width:'20vw'}}id="turtle" />
        
        <div style={{width:'30vw'}} id="whale" />
      </div>
      
    </div>)
}
