import React from "react";
import Clints from "./Clints";
import styles from "../ClintSectionn/Clints.module.css"
import asset1 from "./img_clint/asset1.png"
const Clint3=()=>{
    return(
        <>  <img src={asset1 } />
        <p className={styles.p}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo. </p>
            <img src={asset1 } className={styles.asset_dot_img} />
            <p className={styles.cline_data}><span className={styles.clint_span}>- Sheraz khan</span><br/>
                CEO ABC Company</p></>
    )
}
export default Clint3;