import React from "react";
import styles from "../Cards/All_card.module.css"
import abad from "../About/Assetimg/abad.png"
import shot_pic from "../About/Assetimg/shot.png"
import apri_pic from "../About/Assetimg/apri.png"
import baner4 from "../About/Assetimg/baner4.png"
import center from "../About/Assetimg/center.png"
import last from "../About/Assetimg/last.png"
const All_cards=()=>{
    return(

        <>
        
        <div className={styles.portfolio_card}>
                        <div className={styles.container}>
                            <img src={abad} className={styles.image} />
                            <div className={styles.overlay}>
                                <div className={styles.text}>
                                    <h2>Sed ut Perspiciatis</h2>
                                    <p>Branding, Web Design</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <img src={shot_pic} className={styles.image} />
                            <div className={styles.overlay}>
                                <div className={styles.text}>
                                    <h2>Sed ut Perspiciatis</h2>
                                    <p>Branding, Web Design</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <img src={apri_pic} className={styles.image} />
                            <div className={styles.overlay}>
                                <div className={styles.text}>
                                    <h2>Sed ut Perspiciatis</h2>
                                    <p>Branding, Web Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.portfolio_card}>
                        <div className={styles.container}>
                            <img src={baner4} className={styles.image} />
                            <div className={styles.overlay}>
                                <div className={styles.text}>
                                    <h2>Sed ut Perspiciatis</h2>
                                    <p>Branding, Web Design</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <img src={center} className={styles.image} />
                            <div className={styles.overlay}>
                                <div className={styles.text}>
                                    <h2>Sed ut Perspiciatis</h2>
                                    <p>Branding, Web Design</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <img src={last} className={styles.image} />
                            <div className={styles.overlay}>
                                <div className={styles.text}>
                                    <h2>Sed ut Perspiciatis</h2>
                                    <p>Branding, Web Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
        
        </>
    )
}
export default All_cards;