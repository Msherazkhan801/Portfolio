import React, { useState } from "react"
import styles from "../ClintSectionn/Clints.module.css"
import map_clint from "./img_clint/map-55e32ae4c19a85738ebb72d3172e3ab7.png"
import boy_pic from "./img_clint/3.png"
import boy_pic2 from "./img_clint/boy.png"
import pic2 from "./img_clint/1.png"
import girl_pic from "./img_clint/22.png"
import Clint1 from "../ClintSectionn/Clint1"
import Clint2 from "./Clint2"
import Clint3 from "./Clint3"



const Clints = () => {
    const [text ,settext]=useState('clint1')
    
    const clint1ClickHander = () =>{
        settext("clint1")
    }
    const clint2ClickHander = () =>{
        settext("clint2")
    }
    const clint3ClickHander = () =>{
        settext("clint3")
    }
    return (
        <div className={styles.Clint_main}>
            <div className={styles.container}>
                <h1 className={styles.heading}>What My Client Says</h1>
                <hr className={styles.line} />
                <p className={styles.Capibality_pargh}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
                <div className={styles.clint_dp}>
                    <div className={styles.clint_pic_position}>
                        <img src={map_clint} className={styles.map} />
                        <div className={styles.clint_pic}><img src={boy_pic} className={styles.pic_hover} onClick={()=>{clint1ClickHander()}}/></div>
                        <div className={styles.clint_pic1}><img src={boy_pic2} className={`${styles.img_boy}  ${styles.pic_hover}`} onClick={()=>{clint1ClickHander()}}/></div>
                        <div className={styles.clint_pic2}><img src={girl_pic} className={`${styles.image_girl}  ${styles.pic_hover}`}onClick={()=>{clint2ClickHander()}} /></div>
                        <div className={styles.clint_pic2a}><img src={girl_pic} className={`${styles.image_2a}  ${styles.pic_hover}`} onClick={()=>{clint3ClickHander()}} /></div>
                        <div className={styles.clint_pic3}><img src={pic2} className={`${styles.img3}  ${styles.pic_hover}`} onClick={()=>{clint2ClickHander()}}/></div>
                        <div className={styles.clint_pic3a}><img src={pic2} className={`${styles.img4}  ${styles.pic_hover}`} onClick={()=>{clint1ClickHander()}}/></div>
                    </div>
                    <div className={styles.clint_info}>
                    {
                           ( ()=>{
                                if(text=='clint1'){
                                    return <Clint1/>
                                }
                                else if(text=='clint2'){
                                    return <Clint2/>
                                } if(text=='clint3'){
                                    return <Clint3/>
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Clints;