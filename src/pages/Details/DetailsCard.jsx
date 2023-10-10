const DetailsCard = ({ service }) => {
    const { id, image, title, description, price } = service;
    // console.log(title);
    return (
            <div className="mt-20">
                <div className='relative'>
                    <div>
                        <img className='w-full h-[600px] rounded-lg' src={image} alt="" />
                    </div>
                    <div className='absolute  py-10 w-full bottom-0 bg-black bg-opacity-50 rounded-b-lg'>
                        <div className='ml-10 g'>
                            <button className='px-5 py-2 bg-orange-400 rounded-md text-white text-xl font-medium'>Price {price}</button>
                        </div>
                    </div>
                </div>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold mt-6'>{title}</h1>
                <p className='lg:text-base text-sm font-normal text-gray-500 mt-2 mb-5'>{description}</p>
            </div>
    );
};

export default DetailsCard;