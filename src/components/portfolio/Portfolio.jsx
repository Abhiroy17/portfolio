import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Swiggy Clone",
    img: "/swiggy.png",
    desc: "Swiggy Clone is a personal project that replicates the popular food delivery application Swiggy. This web app is built using React, Swiggy Live API, Vite as the bundler, Tailwind CSS for styling, Redux Toolkit for state management, and Jest for testing.",
    url: "https://swiggy-clone-food.netlify.app/",
    githubUrl: "https://github.com/Abhiroy17/swiggy-clone",
  },
  {
    id: 2,
    title: "My Own Excel",
    img: "/excel-clone.png",
    desc: "My own excel is a web based UI clone of MS-Excel built purely with Vanilla JavaScript, HTML and CSS, with limited features like cell selection, format, edit. Currently in progress.",
    url: "https://abhiroy17.github.io/excel-clone/",
    githubUrl: "https://github.com/Abhiroy17/excel-clone",
  },
  {
    id: 3,
    title: "Exam Portal",
    img: "/exam-portal.png",
    desc: "Exam Portal is a fullstack Quiz Application built using Java, Springboot, Spring Data JPA, MySQL & Angular as frontend framework. Had built this application during internship days in Virtusa when I was exploring backend mainly using Java, Springboot & bit of Angular",
    githubUrl: "github.com/Abhiroy17/Examportal",
  },
  {
    id: 4,
    title: "Lets Blog",
    img: "blog.png",
    desc: "Lets Blog is a multi-category blog post app built using JSP,Servlet,MySql,HTML 5,CSS 3,Bootstrap 4 where user can register,login,post blogs with images ,captions,text under different category",
    githubUrl: "https://github.com/Abhiroy17/BlogPostWebApp",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="btnContainer">
              {item.url && 
                <a href={item.url} target="_blank">
                 Live Demo
                </a>
              }
              {item.githubUrl && 
                <a href={item.githubUrl} target="_blank">
                  See Code 
                </a>
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
