import Navbar from "../shared/Navbar/Navbar";
import banner from "../../assets/image/SI1.jpg"
import port from "../../assets/image/p.jpg"
import Footer from "../shared/Footer/Footer";
import cart1 from "../../assets/image/p1.jpg";
import cart2 from "../../assets/image/p2.jpg";
import cart3 from "../../assets/image/p3.jpg";


const Portfolio = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <div className="hero min-h-fit mt-14">
                    <img className="w-screen h-[500px] rounded-md" src={banner} alt="" />
                    <div className="hero-overlay bg-white bg-opacity-25"></div>
                    <div className="hero-content text-center text-neutral-content">
                        {/* <div>
                            <h1 className="lg:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-black">Wedding </h1>
                        </div> */}
                    </div>
                </div>
            </div>


            <div className="lg:flex md:flex mt-20 gap-10 mb-20">
                <div className="flex-1">
                    <img className="w-[1500px] h-[700px]" src={port} alt="" />
                </div>
                <div className=" lg:mt-14 md:mt-14 lg:space-y-5 flex-1 md:mb-10 mb-10">
                    <h2 className="lg:text-4xl md:text-2xl font-semibold">Rose and Harry</h2>
                    <p className="lg:text-lg  md:text-sm text-gray-500 ">
                        Randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.

                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which dont look even slightly believable.
                    </p>
                    <h1><span className="font-bold">Client:</span> Robert William</h1>
                    <hr className="w-72" />
                    <h1><span className="font-bold ">Location:</span> 7 Lake Street, London</h1>
                    <hr className="w-72" />
                    <h1><span className="font-bold">Date:</span> 20 April, 2020</h1>
                    <hr className="w-72" />
                    <h1><span className="font-bold">Duration:</span> 3 Month</h1>
                    <hr className="w-72" />
                    <h1><span className="font-bold">Tag:</span> Wedding, Planning</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-10 p-8">
                <div>
                    <img src={cart1} alt="" />
                </div>
                <div>
                    <img src={cart2} alt="" />
                </div>
                <div>
                    <img src={cart3} alt="" />
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Portfolio;