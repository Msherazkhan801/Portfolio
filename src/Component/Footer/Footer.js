import React from "react"
import styles from "../Footer/Footer.module.css"
import portfolio from "./image/Portfolio.png"
import behance from "./image/behance.png"
import dribbble from "./image/dribbble.png"
import insta from "./image/insta.png"
import linkin from "./image/linked in.png"
import pinterest from "./image/pinterest.png"
const Footer = () => {
    return (
        <div className={styles.Footer_section}>
            <div className={styles.footer_container}>
                <img src={portfolio} className={styles.footer_logo} />
                <div>
                    <a href="#" className={styles.navbar_a}> About</a>
                    <a href="#" className={styles.navbar_a} > | Portfolio</a>
                    <a href="#" className={styles.navbar_a}> | Contact</a>
                </div>
                <p className={styles.text_footer}>NY / +1 123456 7890 / hello@graphics.studio.com</p>
                <div className={styles.social_link}>
                    <img src={behance} className={styles.icon}/>
                    <img src={dribbble}  className={styles.icon}/>
                    <img src={insta}  className={styles.icon}/>
                    <img src={linkin} className={styles.icon}/>
                    <img src={pinterest}  className={styles.icon}/>
                </div>
                <hr className={styles.footer_line}/>
                <p className={styles.footer_para}>Copyright © 2019 Graphics Studio | All rights reserved</p>
            </div>
           
        </div>
    )
}
export default Footer;