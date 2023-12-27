import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const items = [
    {
        id: 1,
        title: "Shoe Shop Management",
        img: "/Project1.png",
        desc: "Shoe Shop Management is a comprehensive project designed to streamline and enhance the operational efficiency of a shoe retail business. This system provides a user-friendly interface for managing inventory, tracking sales, and overseeing customer interactions within a shoe store.",   
    },
    {
        id: 2,
        title: "Query Generator - Chatbot",
        img: "/Project2.png",
        desc: "Query Generation using Chatbot involves leveraging natural language processing and machine learning techniques to empower chatbots in generating meaningful queries based on user interactions.",   
    },
    {
        id: 3,
        title: "ScriptSage Website",
        img: "/Project3.png",
        desc: "ScriptSage is a dynamic website dedicated to empowering users in their coding journey. With a user-friendly interface and a diverse range of programming tutorials, ScriptSage facilitates a seamless and engaging learning experience. The platform offers step-by-step guidance, interactive coding exercises, and real-world project examples to help users master coding languages and concepts. ",   
    },
    {
        id: 4,
        title: "Koshish - Student Dropout Analysis",
        img: "/Project4.png",
        desc: "Koshish - Student Dropout Analysis is a data-driven initiative aimed at understanding and addressing the complex issue of student dropout rates. This project employs advanced analytics and machine learning to analyze various factors contributing to student attrition in educational institutions.",   
    }
];

const Single= ({item}) =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref});

    const y = useTransform(scrollYProgress,[0,1], [-300,300]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"  ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref 
        ,offset:["end end","start start"]});
    
    const scaleX = useSpring(scrollYProgress, 
        {
            stiffness: 100,
            damping: 30,
        }
        );

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {
            items.map((item) => (<Single item= {item} key={item.id}/>))
        }
      
    </div>
  );
};

export default Portfolio
