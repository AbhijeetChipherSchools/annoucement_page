import LearningUpgrade from "../sections/learningUpgrade/learningUpgrade";
import TimeStacking from "../sections/timeStacking/timeStacking";
import Missions from "../sections/learningLoop/learningLoop";
import React from "react";
import '../sections/commons.css' ;
export  const Announcement = () => {

    return (
        <div className="container">
            <LearningUpgrade/>
            <TimeStacking/>
            <Missions/>
        </div>
    )

}