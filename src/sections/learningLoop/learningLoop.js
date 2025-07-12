import React from "react";
import "./learningLoop.css";
import '../commons.css' ;
import {StartLearningIcon, ClockIcon, BookIcon, LearnIcon} from "../../icons/icons";
const LearningLoop = () => {
    return (
        <div className="learning-loop">
            <p className="section-title">The unlimited loop</p>
            <div className="loop-steps">
                <div className="step">
                    <StartLearningIcon/>
                    <div>
                        <p className="step-title">Start learning for first</p>
                        <p className="step-detail">45 minutes for FREE</p>
                    </div>

                </div>

                <div className="step">
                    <ClockIcon/>
                    <div>
                        <p className="step-title">In-between earn</p>
                        <p className="step-detail">
                            15 CipherPoints by learning for 30 minutes<br />
                            <small><a href="#" className="link">Check points policy here</a></small>
                        </p>
                    </div>
                </div>

                <div className="step">

                    <LearnIcon/>
                    <div>
                        <p className="step-title">And redeem points</p>
                        <p className="step-detail">To get more learning minutes</p>
                    </div>

                </div>
            </div>

            <div className="missions-section">
                <div className="missions-text">
                    <h3>No worries — we’ve got you covered with missions!</h3>
                    <p>Complete missions and earn enough points to keep your FREE learning going without any interruptions. 💪</p>
                    <button className="start-button">Start Learning now →</button>
                </div>
                <div className="missions-image">
                    <img src="/cipherschoolsui.png" alt="CipherSchools UI" />
                </div>
            </div>

            <div className="subscribe-banner">
                <p className="banner-title">🤝 Love Learning Without Limits?</p>
                <p className="banner-text">
                    If you're someone who hates the ticking timer and loves to binge-learn… Why not support your own growth?<br />
                    <strong>Unlock full access for just 49/month — Less than your late-night nachos or chai + maggie combo! 🧠 </strong>
                </p>
                <button className="interest-button">Yes, I'm interested</button>
            </div>
        </div>
    );
};

export default LearningLoop;
