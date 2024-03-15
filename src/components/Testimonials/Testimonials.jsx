import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testim_con}>
        <h3>Testimonials</h3>
        <div className={styles.testim_list}>
            <div className={styles.testim_items}>
                <p id={styles.p_descr}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='man_testimonials'></img>
                <h4>John Doe</h4>
                <p id={styles.p_position}>Web Developer</p>
            </div>
            <div className={styles.testim_items}>
                <p id={styles.p_descr}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src='https://plus.unsplash.com/premium_photo-1673512198691-16512bc2642e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww' alt='man_testimonials'></img>
                <h4>Jane Doe</h4>
                <p id={styles.p_position}>Web Developer</p>
            </div>
            <div className={styles.testim_items}>
                <p id={styles.p_descr}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src='https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D' alt='man_testimonials'></img>
                <h4>Jim Doe</h4>
                <p id={styles.p_position}>Web Developer</p>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonials
