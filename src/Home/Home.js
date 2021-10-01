import React from "react"
import About from "../Component/About/About";
import Capibality from "../Component/Capibality/Capibality";
import Clints from "../Component/ClintSectionn/Clints";
import Userform from "../Component/Form/Userform";
import Hero from "../Component/HeroSection/Hero";
import Footer from "../Component/Footer/Footer";
import styles from "../Home/Home.module.css"
const Home = () => {
    return (
        <>
            
            <Hero />
            <About />
           <Capibality />
             <Clints />
           <Userform />
            <Footer /> 
        </>
    )
}
export default Home;