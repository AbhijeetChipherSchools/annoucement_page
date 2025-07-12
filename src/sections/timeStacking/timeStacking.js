import React from 'react';
import './timeStacking.css';
import '../commons.css' ;

import {TimeStackIcon, ThinkingIcon, LoopIcon, DangerIcon} from "../../icons/icons";
const TimeStacking = () => {
    return (
        <div className="time-stacking-container">
            <h2 className="title">
                <TimeStackIcon/> Time Stacking Explained
            </h2>

            <div className="info-box">
                <div className="info">
                    <ThinkingIcon/>
                    <div className="temp">
                    <p>
                        <strong> Claimed extra time using CipherPoints?</strong> Any unused minutes will be carried over
                        the next day — so you don’t lose what you’ve earned. </p> <LoopIcon/>
                    </div>
                </div>

                <hr color={"black"}/>
                <div className="info">
                    <DangerIcon/>
                    <p className="note">
                        <strong> Note:</strong> The daily 45-minutes free access resets every day and does not stack.
                        Only extra time claimed through CipherPoints stacks up for future use.
                    </p>
                </div>

            </div>

            <h2 className="sub-title">Wondering why we added this step?</h2>

            <div className="info-box">
                <p>We added this small manual step to help protect your learning experience.</p>
                <p><strong>Why?</strong></p>
                <p>
                    Some users try to play videos at 16X – 32X speed just to farm points.🥲
                    <br />
                    This tiny click helps us keep CipherSchools fair, focused, and bot-free — without ever stopping your learning.
                </p>
            </div>

            <p className="footer-note">
               <strong>
                   Redeeming 5 CipherPoints = 30 mins is an unlimited loop.
               </strong>
            </p>
        </div>
    );
};

export default TimeStacking;
