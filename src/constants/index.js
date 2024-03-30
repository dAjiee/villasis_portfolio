import { mathbusters, ecoteneo, gdsc, schoolcrud, cropcare, weaveboard } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    java,
    javascript,
    laravel,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    php,
    pricewise,
    react,
    tailwindcss,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "MathBusters Club",
        company_name: "DRANHS | President",
        icon: mathbusters,
        iconBg: "#accbe1",
        date: "June 2019 - April 2020",
        points: [
            "Orchestrated the club’s strategy, leading to a broader engagement in math across all year levels.",
            "Fostered a collaborative environment that encouraged innovative problem-solving and critical thinking.",
            "Organized events and competitions that showcased the talent and ingenuity of club members.",
            "Mentored peers, nurturing a passion for mathematics and inspiring academic excellence.",
        ],
    },
    {
        title: "Ecoteneo Flora Club",
        company_name: "AdDU SHS | President",
        icon: ecoteneo,
        iconBg: "#b7e4c7",
        date: "June 2021 - April 2022",
        points: [
            "Pivoted club operations to virtual platforms, successfully conducting seminars on sustainability and environmental education.",
            "Led the design and execution of online campaigns promoting eco-friendly habits among the student body during the pandemic.",
            "Collaborated with environmental experts to organize webinars that spread awareness on ecological stewardship.",
            "Guided club members through project planning and execution, ensuring engagement and continuous learning in a remote setting.",
        ],
    },
    {
        title: "Google Developer Student Clubs",
        company_name: "USeP Obrero | Chief Technology Officer ",
        icon: gdsc,
        iconBg: "#FFDA6D",
        date: "September 2023 - May 2024",
        points: [
            "Spearheaded the planning and execution of tech seminars and workshops, enlightening students on emerging technologies and their applications.",
            "Curated a diverse tech education agenda, integrating cutting-edge tools and platforms to prepare students for industry demands.",
            "Fostered a tech-centric learning environment, empowering students with hands-on experiences and practical skill development.",
            "Championed a series of developer events that bridged the gap between academic learning and real-world tech challenges.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dAjiee',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/alexander-vaugn-villasis-7591b9276',
    }
];

export const projects = [
    {
        iconUrl: weaveboard,
        theme: 'btn-back-black',
        name: 'WeaveBoard',
        description: 'A dynamic social media platform built with Next.js 14 and MERN stack, fostering genuine expression and community engagement.',
        link: 'https://github.com/dAjiee/WeaveBoard_app',
    },
    {
        iconUrl: cropcare,
        theme: 'btn-back-green',
        name: 'CropCare',
        description: 'A Java-based application designed for farmers to effortlessly manage land, crop data, and weather updates, ensuring efficient and informed agricultural decisions.',
        link: 'https://github.com/dAjiee/CropCare',
    },
    {
        iconUrl: schoolcrud,
        theme: 'btn-back-yellow',
        name: 'University Database Management System',
        description: 'A Java-based application for concise university management system facilitating real-time academic and administrative operations, with specialized dashboards for course management, grading, and user administration.',
        link: 'https://github.com/dAjiee/University-Faculty-Staff-Database-Management-System',
    },
];