import React from "react";
import "../style.css";
import logo from '../assets/RunawayLogoTransparent.png'
export default function Project({id}) {

    return(
        <div>
            <div style={{backgroundColor:"#222831",width:'25vw',borderRadius:'5vw',justifyContent:'center',alignItems:'center'}}>
                {}
                
                <img src={logo} alt="Runaway" style={{width:'25vw'}}/>
            </div>
            <p>This is an app</p>
        </div>
    )
}