import React from 'react'
import styles from './Project.module.css'
import { Tilt } from 'react-tilt'

function Project() {
  return (
    <div className={styles.project_wrapper}>
      <h3 className={styles.project_label}>Portfolio</h3>
      <div className={styles.project_title}>
          <div className={styles.project_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={false}>
              <img src='https://images.unsplash.com/photo-1542831371-d531d36971e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbXxlbnwwfHwwfHx8MA%3D%3D' alt='program'/>
            </Tilt> 
              <p>Project Title</p>
          </div>
          <div className={styles.project_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={false}>
              <img src='https://images.unsplash.com/photo-1542831371-d531d36971e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbXxlbnwwfHwwfHx8MA%3D%3D' alt='program'/>
            </Tilt> 
              <p>Project Title</p>
          </div>
          <div className={styles.project_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={false}>
              <img src='https://images.unsplash.com/photo-1542831371-d531d36971e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbXxlbnwwfHwwfHx8MA%3D%3D' alt='program'/>
            </Tilt> 
              <p>Project Title</p>
          </div>
          <div className={styles.project_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={false}>
              <img src='https://images.unsplash.com/photo-1542831371-d531d36971e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbXxlbnwwfHwwfHx8MA%3D%3D' alt='program'/>
            </Tilt> 
              <p>Project Title</p>
          </div>
          <div className={styles.project_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={false}>
              <img src='https://images.unsplash.com/photo-1542831371-d531d36971e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbXxlbnwwfHwwfHx8MA%3D%3D' alt='program'/>
            </Tilt> 
              <p>Project Title</p>
          </div>
          <div className={styles.project_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={false}>
              <img src='https://images.unsplash.com/photo-1542831371-d531d36971e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbXxlbnwwfHwwfHx8MA%3D%3D' alt='program'/>
            </Tilt> 
              <p>Project Title</p>
          </div>
      </div>
    </div>
  )
}

export default Project
