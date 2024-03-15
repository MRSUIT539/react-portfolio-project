import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebook, FaL } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt'

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text1}>Hi, it's me</p>
            <h3 className={styles.text2}>John Doe</h3>
            <p className={styles.text3}>
              <span style={{marginRight: '10px'}}>I'm a </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Front-end Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Web Deloper',
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              </p>
            <a className={styles.text4}>Lorem ipsum dolor sit ament, consectetur adipisicing elit. Fuga fugiat commodi <br></br> quas cupliditate minus dolore nulla eos accusantium labore explicabo.</a>
            <ul className={styles.hero_social}>
              <li><a href='#'><FaGithub /></a></li>
              <li><a href='#'><FaLinkedinIn /></a></li>
              <li><a href='#'><FaFacebook /></a></li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={false}>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
