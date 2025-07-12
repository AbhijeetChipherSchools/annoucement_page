import { Icon } from '@iconify/react';
import clockIcon from '@iconify-icons/mdi/clock-outline';
import coinIcon from '@iconify-icons/mdi/coin';
import rupeeIcon from '@iconify-icons/mdi/currency-inr';
import bookOpenIcon from '@iconify-icons/mdi/book-open-variant';
import playCircleIcon from '@iconify-icons/mdi/play-circle';

import './icons.css';
import stopwatchOutline from "@iconify-icons/mdi/stopwatch-outline";
import databaseIcon from '@iconify-icons/mdi/database';

import layersIcon from '@iconify-icons/mdi/layers-outline';
import repeatIcon from '@iconify-icons/mdi/repeat-variant';
import headCogIcon from '@iconify-icons/mdi/head-cog-outline';


import alertOutline from '@iconify-icons/mdi/alert-outline';



import bookIcon from '@iconify-icons/mdi/book-outline';
import playCircle from '@iconify-icons/mdi/play-circle';

export const LearnIcon = () => (
    <div className="icon-wrapper learn-icon">
        <Icon icon={bookIcon} className="icon book" />
        <Icon icon={playCircle} className="icon play" />
    </div>
);


export const DangerIcon = () => (
    <div className="icon-wrapper danger-outline">
        <Icon icon={alertOutline} className="icon" color={"red"} />
    </div>
);

export const StartLearningIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={bookIcon} className="icon" />
    </div>
);


export const TimeEarnIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={clockIcon} className="icon" />
    </div>
);

export const LoopIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={repeatIcon} className="icon" />
    </div>
);



export const ThinkingIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={headCogIcon} className="icon" />
    </div>
);
export const TimeStackIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={layersIcon} className="icon" />
    </div>
);
export const ClockIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={clockIcon} className="icon" />
    </div>
);

export const CoinIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={databaseIcon} className="icon" />
    </div>
);

export const RupeeIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={rupeeIcon} className="icon" />
    </div>
);

export const BookIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={bookOpenIcon} className="icon" />
    </div>
);

export const PlayIcon = () => (
        <Icon icon={playCircleIcon}  className="play-icon"/>

);

export const StopwatchIcon = () => (
    <div className="icon-wrapper">
        <Icon icon={stopwatchOutline} className="icon" />
    </div>
);
