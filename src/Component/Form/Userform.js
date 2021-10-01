import React from "react"
import styles from "../Form/Userform.module.css"
const Userform = () => {
    return (
        <div className={styles.form_section}>
            <div className={styles.form_container}>
                <h1 className={styles.heading}>Let’s Make Something Great Together</h1>
                <p className={styles.Capibality_pargh}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
                <form>
                    <div className={styles.form_input1}>
                        <input placeholder="Name.." type="text" className={styles.Input} />
                        <input placeholder="Email.." type="email" className={styles.Input} />
                    </div>
                    <div className={styles.form_input1}>
                        <input placeholder="Phone#" type="number" className={styles.Input} />
                        <input placeholder="budget" type="text" className={styles.Input} />
                    </div>
                    <input placeholder="" className={styles.input_massage} />
                </form>
                    <button className={styles.button}>Hire Me</button>
            </div>



        </div>
    )
}
export default Userform;