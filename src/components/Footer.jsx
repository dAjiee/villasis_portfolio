import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Footer = () => {
    const [data, setData] = useState({
        socialLinks: [],
        name: ""
    });


    const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}footer/`);
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <footer className='footer font-poppins'>
            <hr className='border-slate-200' />

            <div className='footer-container'>
                <p>
                    © 2024 <strong>{data.name}</strong>. All rights reserved.
                </p>

                <div className='flex gap-3 justify-center items-center'>
                    {data.socialLinks && data.socialLinks.map((link) => (
                        <Link key={link.name} to={link.link} target='_blank'>
                            <img
                                src={link.iconUrl}
                                alt={link.name}
                                className='w-6 h-6 object-contain'
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;