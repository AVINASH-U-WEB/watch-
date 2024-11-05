"use client";
import { motion } from "framer-motion";
import {  TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn} from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
      title={(
        <>
          A great watch is not just a device that tells time, but a piece of art that tells a story.
        </>
      )}
      textStyles="text-center"/>
      <motion.div variants={fadeIn('up','tween',0.3,1)}
      className="relative mt-[68px] flex w-full h-[550px] " >
        <img src="/map.png" alt=""
        className="w-full h-full object-contain"
        />
        <div className="absolute bottom-40 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-60 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
