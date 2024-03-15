import React from 'react'
import styles from './Skills.module.css'
import { FaJs, FaReact, FaGitAlt, FaNodeJs, FaFigma } from "react-icons/fa6";

function Skills() {
  return (
    <div className={styles.skills_wrapper}>
      <h2 className={styles.label}>My Skill Set</h2>
      <ul className={styles.skills_program}>
          <li className={styles.language}><FaJs /></li>
          <li className={styles.language}><FaReact /></li>
          <li className={styles.language}><FaGitAlt /></li>
          <li className={styles.language}><FaNodeJs /></li>
          <li className={styles.language}><FaFigma /></li>
      </ul>
    </div>
  )
}

export default Skills
