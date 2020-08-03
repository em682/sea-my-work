import React from "react";
import "../style.css";
import sun from '../assets/sun.png'; 
import Wave from 'react-wavify';

export default function Header({executeScroll}) {

    return(
        <div>
            <img src={sun} alt="Sun" className="sun"/>
            <div className="nav">
                <h1>Ethan Ma</h1>
                <nav>
                    <button onClick={executeScroll}>About</button> 
                    <button onClick={executeScroll}>Projects</button> 
                </nav>
            </div>
            <Wave 
                className="wave"
                fill='#53DAFA'
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
                fill='#0097FF'
                paused={false}
                options={{
                height: 40,
                amplitude: 80,
                speed: 0.15,
                points: 5,
                }}
            />
           
        </div>
    )
}