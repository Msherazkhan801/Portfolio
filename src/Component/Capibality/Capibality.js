import React from "react"
import styles from "../Capibality/Capibality.module.css"
import group from "./images/Group.png"
const Capibality = () => {
    return (
       
<div className={styles.main_section_capibality}>
    <div className={styles.container}>
<h1 className={styles.heading}>My Capabilities</h1>
<hr className={styles.line}/>
<p className={styles.Capibality_pargh}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
<div className={styles.Capibality_define}>
    <div className={styles.group_image}>
        <div className={styles.group_pic_txt}>
        <img src={group} className={styles.img}/>
        <p className={styles.group_txt}>
            <span className={styles.span}>Web Design</span><br/>
        <span className={styles.span_paragraph}> Get awesome design services  from inkyy.com </span></p>
        </div>

        <div className={styles.group_pic_txt}>
        <img src={group} className={styles.img}/>
        <p className={styles.group_txt}>
            <span className={styles.span}>Web Design</span><br/>
            <span className={styles.span_paragraph}> Get awesome design services  from inkyy.com </span> </p>
        </div>

        <div className={styles.group_pic_txt}>
        <img src={group} className={styles.img}/>
        <p className={styles.group_txt}>
            <span className={styles.span}>Web Design</span><br/>
            <span className={styles.span_paragraph}> Get awesome design services  from inkyy.com </span> </p>
        </div>
        
    </div>
    <div className={styles.group_image2}>
        <div className={styles.group_pic_txt}>
        <img src={group} className={styles.img}/>
        <p className={styles.group_txt}>
            <span className={styles.span}>Web Design</span><br/>
            <span className={styles.span_paragraph}> Get awesome design services  from inkyy.com </span> </p>
        </div>

        <div className={styles.group_pic_txt}>
        <img src={group} className={styles.img}/>
        <p className={styles.group_txt}>
            <span className={styles.span}>Web Design</span><br/>
            <span className={styles.span_paragraph}> Get awesome design services  from inkyy.com </span> </p>
        </div>

        <div className={styles.group_pic_txt}>
        <img src={group} className={styles.img}/>
        <p className={styles.group_txt}>
            <span className={styles.span}>Web Design</span><br/>
            <span className={styles.span_paragraph}> Get awesome design services  from inkyy.com </span> </p>
        </div>
        
    </div>

</div>


</div>
</div>
       
    )
}
export default Capibality;