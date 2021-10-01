import React from "react";
import styles from "../ClintSectionn/Clints.module.css"
import asset1 from "./img_clint/asset1.png"
const Clint1=()=>{
    return(
        <>  <img src={asset1 } />
        <p className={styles.p}>Positive feedback is a form of evaluation that focuses on an employee's strengths, talents and accomplishments. When you provide positive feedback, you are 
        telling your team members what they're doing correctly and should continue to do.  </p>
            <img src={asset1 } className={styles.asset_dot_img} />
            <p className={styles.cline_data}><span className={styles.clint_span}>- sheraz khan</span><br/>
                CEO ABC Company</p></>
    )
}
export default Clint1;