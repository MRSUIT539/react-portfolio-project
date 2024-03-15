import React from 'react'
import styles from './Footer.module.css'

function Footer() {

    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
        <p>Copyright © {currentYear}. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
