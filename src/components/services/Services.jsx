import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I specialize in crafting delightful User Interfaces
          <br /> alongside handling backend systems. 
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Clean</motion.b> Code
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Eye For</motion.b> Design.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 whileHover={{ color: "orange" }}>UI</motion.h2>
          <p>
            I prioritize user experience above all ensuring that every design enchances usability alongside security,performance & speed.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 whileHover={{ color: "orange" }}>Backend</motion.h2>
          <p>
            As a frontend-focused developer have a fair backend experience in Node.js & loopback 3, so you don't need to scratch your head why your API doesn't work & blame the UI devs
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 whileHover={{ color: "orange" }}>Collaboration</motion.h2>
          <p>
            I thrive in team environments, communicating effectively with UX Designers, Developers and stakeholders to get things done.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 whileHover={{ color: "orange" }}>Fun</motion.h2>
          <p>
            Boring dev? Ain't Have Time For that! I love having fun apart from work. Keeping healthy, exercising, playing sports , Binge watching is what fuels my inner developer & geeky side, pushes me to keep going. 
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
