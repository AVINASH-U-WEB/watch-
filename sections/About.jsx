"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Watch" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Watch </span>
        Innovation is at the heart of Watch. We continuously push the boundaries
        of horology, incorporating advanced features and innovative{" "}
        <span className="font-extrabold text-white">
          designs into our collections
        </span>
        . From classic elegance to contemporary sophistication,{" "}
        <span className="font-extrabold text-white">
          our diverse range of timepieces caters{" "}
        </span>
        to the unique tastes and lifestyles of our discerning clientele
      </motion.p>
      <motion.img variants={fadeIn('up','tween',0.3,1)} src="/arrow-down.svg"  alt="" className="w-[18px] h-[28px] object-contain mt-[28px]" />
    </motion.div>
  </section>
);

export default About;
