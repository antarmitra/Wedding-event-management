import { useEffect, useState } from "react";
import ServicesCard from "./servicesCard";


const Services = () => {

    const [loadData, setloadData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setloadData(data))
    }, [])

    
    return (
        <div className="py-20">
            <h2 className="text-4xl text-center font-semibold">Our Main Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                {
                   loadData?.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;