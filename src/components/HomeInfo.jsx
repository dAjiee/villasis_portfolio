import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" alt="Arrow"/>
        </Link>
    </div>
);

const HomeInfo = ({ currentStage }) => {
    const [data, setData] = useState({
        name: ""
    });

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/homePage/');
            const result = await response.json();
            setData(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
    };

    return renderContent[currentStage] || null;
};

export default HomeInfo;
