import { useEffect } from "react";
import Services from "../../Service/Services";
import Banner from "../shared/Banner/Banner";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import Planner from "../shared/Planner/Planner";
import TeamSection from "../shared/TeamSection/TeamSection";


const Home = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Planner></Planner>
            <TeamSection></TeamSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;