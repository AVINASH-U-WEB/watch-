"use client";
import { motion } from "framer-motion";
import {ExploreCard,TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import {exploreWorlds} from '../constants'
import World from "./World";
import { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState('world-2')

  return(
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Watch of world" textStyles="text-center" />
      <TitleText title={<>Choose the Watch you want <br className="md:block hidden" />to Wear</>} textStyles="text-center"/>
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {exploreWorlds.map((World,index)=>(
          <ExploreCard 
          key={World.id}
          {...World}
          index={index}
          active={active}
          handleClick={setActive}
          />
        ))}
      </div>
    </motion.div>
  </section>
  )
};
export default Explore;
