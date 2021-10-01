import React from "react"
import styles from "../HeroSection/Hero.module.css"
import Logo from "./Images/Portfolio.png"
import dots from "./Images/upper dots.png"
import icon from "./Images/icon.png"
import man from "./Images/man.png"
import sidot from "./Images/sidedot.png"
import behance from "./Images/behance.png"
import dribbble from "./Images/dribbble.png"
import insta from "./Images/insta.png"
import linkin from "./Images/linked in.png"
import pinterest from "./Images/pinterest.png"

const Hero = () => {
    return (
        <div className={styles.main_div}>
            <div className={styles.Container}>
                <div className={styles.logos}> <img src={Logo}  className={styles.logo_design}/><hr/></div>
                <div className={styles.navbar}>
                    <a className={styles.navbar_a} > About</a>
                    <a href="#" className={styles.navbar_a}> Porfolio</a>
                    <a href="#" className={styles.navbar_a}> Contact</a>
                    <button className={styles.navbar_btn}> Get Start</button>
                </div>
            </div>
               <div className={styles.Containers}>
               <img src={dots} className={styles.dots_img}/>
                   <div className={styles.text_field}>
                  <p className={styles.intro_txt}>Hello, I am <br/><span className={styles.txt_name}>Mark
                         Reccardo</span></p>
                         <img src={man} className={styles.man_pic}/>
             </div>   
    <p className={styles.UX_paraghrap}>A young <span className={styles.UX}>UI/UX</span>  designer with crazy for mobile & web design.</p>
    <p className={styles.icon_paraghrap}>Find Me on</p>
    <div className={styles.social_link}>
                    <img src={behance} className={styles.icon}/>
                    <img src={dribbble}  className={styles.icon}/>
                    <img src={insta}  className={styles.icon}/>
                    <img src={linkin} className={styles.icon}/>
                    <img src={pinterest}  className={styles.icon}/>
                </div>
      <div className={styles.button}>
          <button className={styles.btn1}>Hire Me</button>
          <button className={styles.btn1}>Portfolio</button>
          <img src={sidot} className={styles.sideots}/>
      </div>
             </div>
        </div>
    )
}
export default Hero;