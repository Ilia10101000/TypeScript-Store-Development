import React from "react";
import photo from '../../../img/photo-768.jpg'
import react from '../../../img/react.png'
import css from '../../../img/css.png'
import typescript from '../../../img/typescript.png'
import api from '../../../img/api.png'
import novaposhta from '../../../img/novaposhta.jpg'

import './about.css'


export default function About(){

    return (
        <div className="about-page-container">
            <div className="img-container"><img src={photo}/></div>
            <div>Hi. My name is Ilia. I`m from Ukraine. I`m 28 years old.</div>
            <div className="about-info-container">
            I am a front-end developer with 1,5 year experience. I like to develop interesting projects using modern approaches. I constantly study popular web traffic trends. This is my pet page of the online store. 
                <div className="creation-technology-container">
                    For its creation were used:
                    <ul className="skills-list">
                        <li>React<img src={react}/></li>
                        <li>TypeScript<img src={typescript}/></li>
                        <li>CSS<img src={css}/></li>
                        <li>Nova Poshta<img src={novaposhta}/></li>
                        <li>API<img src={api}/></li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    )
}