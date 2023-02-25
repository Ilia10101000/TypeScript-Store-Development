import React from "react";
import linkedin from '../../img/icons8-линкедин-50.png';
import facebook from '../../img/icons8-facebook-новый-50.png';
import github from '../../img/icons8-github-50.png';
import instagram from '../../img/icons8-instagram-50.png';
import telegram from '../../img/icons8-telegram-48.png';

import './footer.css';

export default function Footer(){

    return (
        <footer>
            <div className="footer-container">
                <div>
                    <ul className="footer-links-container">
                        <li><img src={linkedin} alt='linkedin'/></li>
                        <li><img src={facebook} alt='facebook'/></li>
                        <li><img src={github} alt='github'/></li>
                        <li><img src={instagram} alt='instagram'/></li>
                        <li><img src={telegram} alt='telegram'/></li>
                    </ul>
                </div>
                <div>Company 2000-2023</div>
            </div>
        </footer>
    )
}