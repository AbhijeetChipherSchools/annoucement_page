import React from 'react';
import './learningUpgrade.css';
import '../commons.css' ;
import {CoinIcon, PlayIcon, RupeeIcon, StopwatchIcon} from "../../icons/icons";

const LearningUpgrade = () => {
    return (
        <div className="learning-upgrade-container">
            <div className="left-section">
                <h1>
                    Fair. Focused. <span className="highlight">Free</span> — Now Upgraded!
                </h1>
                <p>Your learning time just got smarter</p>
                <p>
                    We’ve introduced a <span className="highlight">45-minutes daily</span> timer to the Free Program to help you stay
                    focused and consistent in your learning journey.
                </p>
                <p>
                    But don’t worry — you can easily extend your time using CipherPoints (no payments needed)!
                </p>
                <div className="button-row">
                    <button className="primary-button">
                        <PlayIcon/> Start Learning Now
                    </button>
                    <a href="#" className="link-button">Wondered why?</a>
                </div>
            </div>

            <div className="right-section">
                <div className="info-card">

                    <StopwatchIcon/> 45-minute daily timer added to Free Learning
                </div>
                <div className="info-card">
                   <CoinIcon/> Get more learning minutes with your CipherPoints you earned
                </div>
                <div className="info-card">
                   <RupeeIcon/> Still 100% free — no charges
                </div>
            </div>
        </div>
    );
};

export default LearningUpgrade;
