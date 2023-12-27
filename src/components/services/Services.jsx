import "./services.scss";
import {motion, useInView} from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-scroll";

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
        staggerChildren: 0.1
    },
 },
};

const Services = () => {

    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref}
    animate={/*isInView && remove this afterwards*/ "animate"}>  
      <motion.div className="textContainer" variants={variants}>
        <p>
        The expert in anything was <br/> once a beginner.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Skills
            </h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>For My</motion.b> Work.
            </h1>
            <Link to="Portfolio" smooth={true} duration={500}>
          <button>My Projects</button>
        </Link>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Web Development</h2>
            <p>Web development is a dynamic field that evolves rapidly with new technologies and frameworks emerging regularly. It plays a crucial role in shaping the digital experience by bringing ideas and content to life on the internet.</p>
            <a target="_blank" href="https://www.geeksforgeeks.org/web-development/">Go</a>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Data Structure </h2>
            <p><br />
              Data structures are fundamental tools in computer science and software development, providing a systematic way to organize and manage data for efficient computation and problem-solving.
              </p>
            <a target="_blank" href="https://www.tutorialspoint.com/data_structures_algorithms/index.htm">Go</a>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>SQL</h2>
            <p><br />
              SQL is a fundamental tool for anyone working with relational databases. It is widely used in software development, data analysis, and business intelligence, making it a crucial skill for professionals in these fields.</p>
            <a target="_blank" href="https://www.w3schools.com/sql/">Go</a>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Prototype Designer</h2>
            <p>
            Prototype designing is a crucial phase in the product development process, where preliminary models or samples are created to visualize, test, and refine design concepts before mass production.</p>
            <a target="_blank" href="https://en.wikipedia.org/wiki/Fusion_360">Go</a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services