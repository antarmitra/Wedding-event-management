import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";


const Details = () => {
   

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
        </div>
    );
};

export default Details;