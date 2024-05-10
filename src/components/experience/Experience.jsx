import { useRef } from "react";
import "./experience.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Product Developer",
    img: "/edgeverve-logo.png",
    desc: [
        `Finacle Treasury (Treasury Management System Web App)`,
        `2021 - Present`,
      `Contributed to the FT-Web team’s efforts in translating the wireframes into fully functional UI for
    successful first Go-live with 4 Indian Banks.`,
      `Sucessfully completed POC for integration of OE-Workflow and the Maker-Checker approval system
      with our existing Treasury Application, leveraging loopback for backend integration. Additionally,
      crafted UI components for the task approval process/worktray component`,`Collaborated closely with cross-functional teams, including Security and FOSS, to conduct FOSS vulnerability and security assessments and fixed web security issues for the initial FT-Web go-live`,
      `Worked on implementing Content Security Policy throught our application using Webpack and optimised the static HTML files like login page,etc leveraging webpack templates . -Tech Stack : React.js,
      Redux, JavaScript, Loopback 3, Webpack 5`
    ],
  },
];

const SingleItem = ({ item }) => {
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

            <ul>
              {item.desc.map((item, index) => (
                <li key={index}><span>{item}</span></li>
              ))}
            </ul>
            <div className="techstack">
              <span className="chip">React.js</span>
              <span className="chip">Redux</span>
              <span className="chip">JavaScript</span>
              <span className="chip">Loopback 3</span>
              <span className="chip">Webpack 5</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
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
    <div className="portfolioExp" ref={ref}>
      <div className="progress">
        <h1 className="experience">Experience</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <SingleItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Experience;
