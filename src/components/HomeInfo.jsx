import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Alexander!</span>👋
            <br />
            An Aspiring Software Engineer from Davao City!
            </h1>
    ),
    2: (
        <InfoBox
            text="Student at the helm of tech innovation. See how I code and lead."
            link="/about"
            btnText="Learn More About Me!"
        />
    ),
    3: (
        <InfoBox
            text="Fueling innovation with passion. Explore my portfolio of successes."
            link="/projects"
            btnText="Visit my Portfolio!"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev?"
            link="/contact"
            btnText="Let's Talk!"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo