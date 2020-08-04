import React from "react";
import "../style.css";
import sun from '../assets/sun.png'; 
import Wave from 'react-wavify';
import lottie from "lottie-web/build/player/lottie_light";
import scroll from "../animations/scroll.json";
export default function Header({executeScroll}) {
    useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("scroll"),
          animationData: scroll,
          loop: true, 
      autoplay: true
        });
    });
    return(
        <div>
            <img src={sun} alt="Sun" className="sun"/>
            <div className="nav">
                <h1>Ethan Ma</h1>
                <nav>
                    <button onClick={executeScroll}>About</button> 
                    <button onClick={document.getElementById('Projects').scrollIntoView}>Projects</button> 
                </nav>
            </div>
            <Wave 
                className="wave"
                fill='#53DAFA'
                paused={false}
                options={{
                height: '10vw',
                amplitude: '20vw',
                speed: 0.15,
                points: 3
                }}
            />
            <Wave 
                className="wave"
                fill='#0097FF'
                paused={false}
                options={{
                height: '8vw',
                amplitude: '15vw',
                speed: 0.15,
                points: 5,
                }}
            />
            <div style={{width:200}} id="scroll" />
           
        </div>
    )
}