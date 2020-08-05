import React from "react";
import "../default.css";
import logo from '../assets/RunawayLogoTransparent.png'
import music from '../assets/music.png'
import cali from '../assets/cali.png'
import {DiReact,DiJavascript1,DiPython,DiHtml5,DiCss3,DiPhp} from 'react-icons/di'
import {FaSpotify} from 'react-icons/fa'
import {FiExternalLink,FiGithub} from 'react-icons/fi'

export default function Project({id}) {
    return(
        <div className="projectContainer">
            { id ==0 ?
            <div> 
                <div className="overlay">
                    <div className="icons">
                        <DiJavascript1 color="#fff" size={"5vw"} />
                        <DiReact color="#fff" size={"5vw"} />
                    </div>
                </div>
                <div className="projectImg">
                    <img src={logo} alt="Runaway" style={{width:'27vw'}}/>     
                </div>
                <div className='descCard'>
                    <p className="title">Runaway App</p>
                    <p className="desc">Worked as a front end developer in the development of Runaway’s mobile app. 
                    Features I worked on include an infinite scrolling feed, messaging, and filtering resources from the database.</p>
                    <div className="external">
                        <a href="https://github.com/umcody/runaway">
                            <FiGithub color="#fff" size={"4vw"} />
                        </a>
                        <a href="https://www.runawayapp.com">
                            <FiExternalLink color="#fff" size={"4vw"} />
                        </a>
                    </div>
                </div>
            </div>
            : 
            id ==1 ?  
            <div>
                <div className="overlay">
                <div className="icons">
                        <DiPython color="#fff" size={"5vw"} />
                        <FaSpotify color="#fff" size={"4.5vw"} />
                    </div>
                </div>
                <div className="projectImg">
                    <img src={music} alt="Music Taste" style={{width:'27vw',height:'27vw'}}/>     
                </div>
                <div className='descCard'>
                    <p className="title">Music Taste</p>
                    <p className="desc">Using pandas and Jupyter notebook, I performed data analysis on my listening 
                    trends based on data from the Spotify web API.</p>
                    <div className="external">
                        <a href="https://github.com/em682/music-taste">
                                <FiGithub color="#fff" size={"4vw"} />
                        </a>
                        <a href="https://infogram.com/music-taste-1h8n6m1llv9m6xo?live">
                                <FiExternalLink color="#fff" size={"4vw"} />
                        </a>
                    </div>
                </div>
            </div>
            : 
            <div>
                <div className="overlay">
                <div className="icons">
                        <DiHtml5 color="#fff" size={"5vw"} />
                        <DiCss3 color="#fff" size={"5vw"} />
                        <DiPhp color="#fff" size={"5vw"} />
                    </div>
                </div>
                <div className="projectImg">
                    <img src={cali} alt="Calisthenics" style={{width:'27vw',height:'27vw'}}/>     
                </div>
                <div className='descCard'>
                    <p className="title">Calisthenics</p>
                    <p className="desc">Created a basic website to practice backend development and database querying. List of exercises with tags and descriptions.</p>
                    <div className="external">
                        <a >
                            <FiGithub color="transparent" size={"4vw"} />
                        </a>
                        <a href="https://serene-forest-61580.herokuapp.com/index.php">
                            <FiExternalLink color="#fff" size={"4vw"} />
                        </a>
                    </div>
                </div>
            </div>
                 } 
        </div>
    )
}