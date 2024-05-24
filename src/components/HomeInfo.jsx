import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


//Template
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
    //Fetch Data
    const [data, setData] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}homePage/`);
            const result = await response.json();
            setData(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    //Memo
    const memo = useMemo(() => {
            console.log(currentStage);
            if (currentStage === 1) {
                return (<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
                    Hi, I am <span className="font-semibold">{data}!</span>👋
                    <br />
                    An Aspiring Software Engineer from Davao City!
                </h1>);
            } else if (currentStage === 2) {
                return (
                <InfoBox
                    text="Student at the helm of tech innovation. See how I code and lead."
                    link="/about"
                    btnText="Learn More About Me!"
                />);
            } else if (currentStage === 3) {
                return(
                <InfoBox
                    text="Fueling innovation with passion. Explore my portfolio of successes."
                    link="/projects"
                    btnText="Visit my Portfolio!"
                />
                );
            } else if (currentStage === 4) {
                return (
                <InfoBox
                    text="Need a project done or looking for a dev?"
                    link="/contact"
                    btnText="Let's Talk!"
                />
                );
            }
        ;
    }, [
        data,
        currentStage
    ]);

    useEffect(() => {
        fetchData();
    }, []);

    return memo || null;
};

export default HomeInfo;
