import { AiOutlineArrowRight } from 'react-icons/Ai';

const ServicesCard = ({ service }) => {
    // console.log(service);
    const { image, title, description } = service;
    return (
        <div>
            {/* <div className="card card-compact w-full bg-base-100 shadow-xl">
                <div>
                    <img className="w-full h-[200px] rounded-lg" src={image} alt="" />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl justify-center">{title}</h2>
                    
                    <p className='text-base'>{description}</p>
                    <div className="card-actions">
                        <button className="btn text-white bg-orange-400 px-3 py-2 rounded-lg">Show Details<AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </div>
                </div>
            </div> */}

            <div className="card  bg-base-100 shadow-xl">
                <div>
                    <img className="w-full h-[200px] rounded-lg" src={image} alt=""  />
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg md:text-xl lg:text-2xl">{title}</h2>
                    <hr className="text-bold text-orange " />
                    <p className='lg:text-sm md:text-sm font-semibold text-gray-400'>{description}</p>
                    <div className="card-actions mt-5">
                        <button className="btn text-white bg-orange-400 px-3 py-2 rounded-lg">Show Details<AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;