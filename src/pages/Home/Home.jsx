import Services from "../../Service/Services";
import Banner from "../shared/Banner/Banner";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import TeamSection from "../shared/TeamSection/TeamSection";


const Home = () => {
    
    
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <TeamSection></TeamSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;