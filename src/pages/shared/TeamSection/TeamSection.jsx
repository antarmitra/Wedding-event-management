import image1 from "../../../assets/image/T1.jpg"
import image2 from "../../../assets/image/T2.jpg"
import image3 from "../../../assets/image/T3.jpg"
import image4 from "../../../assets/image/T4.jpg"

const TeamSection = () => {
    return (
        // <div className="mb-48 mx-auto">
        //     <h2 className="text-4xl font-semibold text-center">Our Team Members</h2>
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-14">
        //         <div>
        //             <img className="rounded-full duration-1000  hover:scale-105" src={image1} alt="" />
        //             <div className="mt-4 text-center">
        //                 <h2 className="text-2xl font-semibold">Robert Fox</h2>
        //                 <p className="text-xl">CEO</p>
        //             </div>
        //         </div>
        //         <div>
        //             <img className="rounded-full duration-1000  hover:scale-105" src={image2} alt="" />
        //             <div className="mt-4 text-center">
        //                 <h2 className="text-2xl font-semibold">Tennis Wilson</h2>
        //                 <p className="text-xl">Wedding Planner</p>
        //             </div>
        //         </div>
        //         <div>
        //             <img className="rounded-full duration-1000   hover:scale-105" src={image3} alt="" />
        //             <div className="mt-4 text-center">
        //                 <h2 className="text-2xl font-semibold">Annette Black</h2>
        //                 <p className="text-lg">Makeup Artist</p>
        //             </div>
        //         </div>
        //         <div>
        //             <img className="rounded-full duration-1000 hover:scale-105" src={image4} alt="" />
        //             <div className="mt-4 text-center">
        //                 <h2 className="text-2xl font-semibold">Tenefar Abram</h2>
        //                 <p className="text-xl ">Dress Designer</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="mb-8 md:mb-24 mx-auto">
            <h2 className="text-4xl font-semibold text-center">Our Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
                <div className="mb-4 md:mb-0">
                    <img className="rounded-full duration-1000 hover:scale-105" src={image1} alt="" />
                    <div className="mt-4 text-center">
                        <h2 className="text-xl md:text-2xl font-semibold">Robert Fox</h2>
                        <p className="text-lg md:text-xl">CEO</p>
                    </div>
                </div>
                <div className="mb-4 md:mb-0">
                    <img className="rounded-full duration-1000 hover:scale-105" src={image2} alt="" />
                    <div className="mt-4 text-center">
                        <h2 className="text-xl md:text-2xl font-semibold">Tennis Wilson</h2>
                        <p className="text-lg md:text-xl">Wedding Planner</p>
                    </div>
                </div>
                <div className="mb-4 md:mb-0">
                    <img className="rounded-full duration-1000 hover:scale-105" src={image3} alt="" />
                    <div className="mt-4 text-center">
                        <h2 className="text-xl md:text-2xl font-semibold">Annette Black</h2>
                        <p className="text-lg md:text-xl">Makeup Artist</p>
                    </div>
                </div>
                <div>
                    <img className="rounded-full duration-1000 hover:scale-105" src={image4} alt="" />
                    <div className="mt-4 text-center">
                        <h2 className="text-xl md:text-2xl font-semibold">Tenefar Abram</h2>
                        <p className="text-lg md:text-xl">Dress Designer</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TeamSection;