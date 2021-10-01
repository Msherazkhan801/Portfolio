import React from "react";
import styles from "../ClintSectionn/Clints.module.css"
import asset1 from "./img_clint/asset1.png"
const Clint2=()=>{
    return(
        <>  <img src={asset1 } />
        <p className={styles.p}>To meet the client's needs, Sam has worked overtime. She does this with a positive attitude and understands it will 
        benefit her team. Give her feedback that shows how much you appreciate her extra efforts </p>
            <img src={asset1 } className={styles.asset_dot_img} />
            <p className={styles.cline_data}><span className={styles.clint_span}>- sara Smith</span><br/>
                CEO ABC Company</p></>
    )
}
export default Clint2;