import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import banner from "../../assets/image/SI6.jpg";
import gallery1 from "../../assets/image/g1.jpg";
import gallery2 from "../../assets/image/g2.jpg";
import gallery3 from "../../assets/image/g3.jpg";
import gallery5 from "../../assets/image/g5.jpg"
import gallery6 from "../../assets/image/g6.jpg";
import gallery4 from "../../assets/image/g4.jpg";


const Gallery = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <div className="hero min-h-fit mt-14">
                    <img className="w-screen h-[500px] rounded-md" src={banner} alt="" />
                    <div className="hero-overlay bg-white bg-opacity-25"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="lg:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-white">Wedding Gallery</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16  mt-20 mb-10 md:p-4 p-2 lg:p-0">
                <div>
                    <img className="w-[600px]" src={gallery1} alt="" />
                </div>
                <div>
                    <img className="w-[600px]" src={gallery2} alt="" />
                </div>
                <div>
                    <img className="w-[600px]" src={gallery3} alt="" />
                </div>
                <div>
                    <img className="w-[600px]" src={gallery5} alt="" />
                </div>
                <div>
                    <img className="w-[600px]" src={gallery6} alt="" />
                </div>
                <div>
                    <img className="w-[600px]" src={gallery4} alt="" />
                </div>
                
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Gallery;