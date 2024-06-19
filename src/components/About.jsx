import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const tiltOptions = {
    max: 25,
    scale: 1.1,
    speed: 500,
    glare: true,
    "max-glare": 0.5,
  };

  return (
    <Tilt options={tiltOptions} className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full service-card'
      >
        <div className='creative-background'>
          <motion.img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
            whileHover={{ scale: 1.1 }}
          />
          <h3
            className={`text-white text-[20px] font-bold text-center ${
              index % 2 === 0 ? "text-blue-500" : "text-green-500"
            }`}
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am Pratham Gupta, a prefinal year student at Indian Institute of Technology (IIT), Kharagpur.
        I'm a versatile programmer with a strong foundation in competitive programming, complemented by frontend development proficiency in technologies such as React.js, Node.js, and Three.js. I excel in algorithmic problem-solving and data structures, having honed my abilities through various programming contests and competitions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
