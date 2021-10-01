import React from "react";
import styles from "../Cards/All_card.module.css"
import abad from "../About/Assetimg/abad.png"
import shot_pic from "../About/Assetimg/shot.png"
import apri_pic from "../About/Assetimg/apri.png"
const Logo=()=>{
    return(
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
         )
}
export default Logo;