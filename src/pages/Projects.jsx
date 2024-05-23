import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { useEffect, useState } from 'react';
import CTA from '../components/CTA';

const Home = () => {
  const [data, setData] = useState({
    projects: [],
    projects_description: ""
  });

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/projects/');
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
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects!</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p> {data.projects_description ? data.projects_description:""} </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {data.projects && data.projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Open Project
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>

            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200"/>

      <CTA />
    </section>
  )
}

export default Home