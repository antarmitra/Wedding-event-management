import { AiOutlineArrowRight } from 'react-icons/Ai';
import image6 from "../../../assets/image/banner.jpg"
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-fit mt-14">
                <img className="w-screen h-screen rounded-md" src={image6} alt="" />
                <div className="hero-overlay bg-white bg-opacity-25"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="lg:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-white">Lets Make your Day Unforgettable</h1>
                        <p className="lg:text-xl md:text-lg text-base font-normal text-white">A wedding is a joyous and sacred celebration of love, uniting two souls in a lifelong commitment <br /> surrounded by the embrace of family and friends. It marks the beginning of a beautiful journey <br />filled with promises, shared dreams, and boundless love.</p>
                        <div className='mt-10'>
                            <button className=" btn bg-orange-400 text-white text-lg font-semibold">See More<AiOutlineArrowRight></AiOutlineArrowRight></button>
                        </div>
                        {/* <div className='p-5'>
                            <input type="text" placeholder="Search here....." className=" py-3 px-5 rounded-lg lg:w-full max-w-xs text-black" />
                            <button className="bg-[#FF444A] text-white py-3 px-5 rounded-e-md  text-[16px]">Search</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;