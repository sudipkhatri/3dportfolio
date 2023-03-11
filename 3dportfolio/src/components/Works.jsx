import React from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../styles';
import { projects } from '../constants';
import Tilt from "react-tilt";
import { github } from '../assets';

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
    <div className='w-full flex'>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className = "text-secondary text-[17px] mt-3 max-w-3xl leading-[30px]"
      >
        I have built several IT projects, leveraging the latest technology 
        and best practices to create innovative solutions that improve efficiency,
         productivity, and user experience. I'm still learning and 
         progressing by taking one step at a time.
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {
        projects.map((project, index)=>(
          <ProjectCard key={index} index={index} {...project}/>
        ))
      }
    </div>
    </>
  )
}

const ProjectCard = ({index, name, description, tags, image, source_code_link}) =>{
return(
  <motion.div
  variants={fadeIn("up", "spring", index*0.5, 0.75)}
  >
    <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className ="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className='relative w-full h-[230px] '>
        <img 
        className='w-full h-full object-cover rounded-2xl'
        alt={name}
        src={image}
        />
      </div>

      <div
      className='inset-0 absolute flex justify-end m-3 card-img_hover'
      >
         <div
        className='black-gradient w-10 h-10 rounded-full flex items-center cursor-pointer justify-center'
        onClick={()=>window.open(source_code_link, "_blank")}
        >
          <img 
          src={github}
          alt='github'
          className='w-1/2 h-1/2 object-contain'
          />

        </div>
        {/* <div for another live link
        className='black-gradient w-10 h-10 rounded-full flex items-center cursor-pointer justify-center'
        onClick={()=>window.open(source_code_link, "_blank")}
        >
          <img 
          src={github}
          alt='github'
          className='w-1/2 h-1/2 object-contain'
          />

        </div> */}
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[26px]'>{name}</h3>
        <p className='text-secondary text-[14px] mt-2'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {
          tags.map((tag)=>(
            <p key={tag.name}
            className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))
        }
      </div>

    </Tilt>
  </motion.div>
)
}

export default SectionWrapper(Works, "");