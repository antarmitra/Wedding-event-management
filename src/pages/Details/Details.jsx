import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";
import Footer from "../shared/Footer/Footer";


const Details = () => {
   
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    const { id } = useParams();
    const integerId = parseInt(id)
    console.log(integerId)

    const service = useLoaderData();

    const findData = service.find(details => details.id === integerId);
    console.log(findData);

    return (
        <div>
            <Navbar></Navbar>
            <DetailsCard service={findData}></DetailsCard>
            <Footer></Footer>
        </div>
    );
};

export default Details;