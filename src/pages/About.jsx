import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState({
    skills: [],
    experiences: [],
    leadership_description: "",
    about_description: "",
    name: ""
  });

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/aboutPage/');
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
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">{data.name}!</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p> {data.about_description ? data.about_description:""} </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
      </div>

      <div className="mt-16 flex flex-wrap gap-12">
        {data.skills && data.skills.map((skill, index) => (
          <div className="block-container w-20 h-20" key={"Skills" + index}>
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Leadership Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p> {data.leadership_description ? data.leadership_description:""} </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {data.experiences && data.experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={"Experience" + index}
                date={experience.date}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-containt"
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slat-200" />

      <CTA />
    </section>
  )
}

export default Home