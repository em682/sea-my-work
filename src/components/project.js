import React from "react";
import "../default.css";
import logo from '../assets/RunawayLogoTransparent.png'
import music from '../assets/m.png'
import cali from '../assets/cal.png'
import {DiReact,DiJavascript1,DiPython,DiHtml5,DiCss3,DiPhp} from 'react-icons/di'
import {FiExternalLink,FiGithub} from 'react-icons/fi'

export default function Project({id}) {

'4vw'

    return(
        <div className="projectContainer">
            { id ===0 ?
            <div> 
                <div className="overlay">
                    <div className="icons">
                        <DiJavascript1 color="#fff" size={'3vw'} />
                        <DiReact color="#fff" size={'3vw'} />
                    </div>
                </div>
                <div className="projectImg">
                    <img src={logo} alt="Runaway" className="img"/>     
                </div>
                <div className='descCard'>
                    <p className="title">Runaway App</p>
                    <p className="desc">Worked as a front end developer for Runaway's mobile and web app. 
                    Features I worked on include an infinite scrolling feed, messaging, and filtering resources from the database.</p>
                    <div className="external">
                        <a href="https://github.com/umcody/runaway">
                            <FiGithub color="#fff" size={'4vw'} />
                        </a>
                        <a href="https://www.runawayapp.com">
                            <FiExternalLink color="#fff" size={'4vw'} />
                        </a>
                    </div>
                </div>
            </div>
            : 
            id ===1 ?  
            <div>
                <div className="overlay">
                <div className="icons">
                        <DiPython color="#fff" size={'3vw'} />
                    </div>
                </div>
                <div className="projectImg">
                    <img src={music} alt="Music Taste" className="img"/>     
                </div>
                <div className='descCard'>
                    <p className="title">Music Taste</p>
                    <p className="desc">Using pandas and Jupyter notebook, I performed data analysis on my listening 
                    trends based on data from the Spotify web API. Data was then visualized with Infogram.</p>
                    <div className="external">
                        <a href="https://github.com/em682/music-taste">
                                <FiGithub color="#fff" size={'4vw'} />
                        </a>
                        <a href="https://infogram.com/music-taste-1h8n6m1llv9m6xo?live">
                                <FiExternalLink color="#fff" size={'4vw'} />
                        </a>
                    </div>
                </div>
            </div>
            : 
            <div>
                <div className="overlay">
                <div className="icons">
                        <DiHtml5 color="#fff" size={'3vw'} />
                        <DiCss3 color="#fff" size={'3vw'} />
                        <DiPhp color="#fff" size={'3vw'} />
                    </div>
                </div>
                <div className="projectImg">
                    <img src={cali} alt="Calisthenics" className="img"/>     
                </div>
                <div className='descCard'>
                    <p className="title">Calisthenics</p>
                    <p className="desc">Created a basic website to practice backend development and database querying. 
                    The site has a list of exercises with tags and descriptions, allowing users to upload their own pictures.</p>
                    <div className="external">
                        <a href="https://serene-forest-61580.herokuapp.com/index.php">
                            <FiExternalLink color="#fff" size={'4vw'} />
                        </a>
                    </div>
                </div>
            </div>
                 } 
        </div>
    )
}