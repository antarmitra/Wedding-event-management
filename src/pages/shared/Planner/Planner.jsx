import plan from "../../../assets/image/ful.png"
import { AiOutlineArrowRight } from 'react-icons/Ai';

const Planner = () => {
    return (
        <div className="lg:flex md:flex  mt-5">
            <div>
                <img className="w-[4000px] h-full" src={plan} alt="" />
            </div>
            <div className=" lg:mt-40 md:mt-14 lg:space-y-4  md:mb-10 mb-10">
                <h2 className="lg:text-4xl md:text-2xl font-semibold">Planner of Your Perfect Wedding</h2>
                <p className="lg:text-lg  md:text-sm text-gray-500 ">
                    Planner of Your Perfect Wedding is your dedicated partner in turning your dream wedding into a reality. Our experienced team specializes in crafting unforgettable, tailor-made weddings that reflect your unique style and vision. From the smallest details to the grandest gestures, we meticulously plan and coordinate every aspect, ensuring a seamless and stress-free experience for you. Let us transform your wedding dreams into cherished memories that will last a lifetime.
                </p>
                <button className="btn bg-orange-400 text-white">About More<AiOutlineArrowRight></AiOutlineArrowRight></button>
            </div>
        </div>
    );
};

export default Planner;