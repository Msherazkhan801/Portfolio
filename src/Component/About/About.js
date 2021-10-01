import React, { useState } from "react"
import styles from "../About/About.module.css"
import layer from "../About/Assetimg/layer.png"
import line from "../About/Assetimg/pic.png"
import All_cards from "../Cards/All_cards"
import Logo from "../Cards/Logo"
import Mobile from "../Cards/Mobile"
import Website from "../Cards/Website"


const About = () => {
    const [nav, setNav] = useState('all')
   
    const allClickHander = () =>{
        setNav("all")
    }
    const LogoClickHander = () =>{
        setNav("logo")
    }
    const WebClickHander = () =>{
        setNav("website")
    }
    const MobileClickHander = () =>{
        setNav("mobile")
    }


    return (
        <div className={styles.about_section}>
            <div className={styles.about_container}>
                <div className={styles.txt_field_about}>
                    <div>
                        <h1 className={styles.about_text}>About Me </h1>
                        <p className={styles.text_para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.</p>
                        <button className={styles.btn_cv}>Download CV</button></div>
                    <div className={styles.card}>
                        <img src={layer} className={styles.about_img} />
                    </div>
                </div>
                <div className={styles.Portfolio}>
                    <h1 className={styles.portfolio_text}>Portfolio</h1>
                    <div className={styles.line}><img src={line} />
                    </div>
                    <button className={styles.back_btn}>B</button>
                    <button className={styles.next_btn}>N</button>
                </div>
                <div>
                    <a className={styles.navbar_click} onClick={()=>{allClickHander()}}> ALL</a>
                    <a className={styles.navbar_click} onClick={()=>{LogoClickHander()}}> Logo</a>
                    <a className={styles.navbar_click} onClick={()=>{WebClickHander()}}> Website</a>
                    <a className={styles.navbar_click} onClick={()=>{MobileClickHander()}}> Mobile</a>
                </div>

                <div>
                {
                           ( ()=>{
                                if(nav=='all'){
                                    return <All_cards/>
                                }
                                else if(nav=='logo'){
                                    return <Logo/>
                                }else if(nav=='website'){
                                    return <Website/>
                                }else if(nav=='mobile'){
                                    return <Mobile/>
                                }
                            })()
                        }
                </div>
            </div> </div>
    )
}
export default About;