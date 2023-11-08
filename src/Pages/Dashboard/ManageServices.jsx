import { useLoaderData } from "react-router-dom";
import ManageServiceCard from "./ManageServiceCard/ManageServiceCard";
import { useState } from "react";

const ManageServices = () => {

    const serviceData = useLoaderData();

    const [servicesData,setServicesData] = useState(serviceData)

    return (
        <div>
            <div className="text-center py-5">
                <h2 className=" font-bold text-4xl">Manage Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map((service) => <ManageServiceCard key={service._id} service={service} servicesData={servicesData} setServicesData={setServicesData}></ManageServiceCard>)
                }
            </div>
        </div>
    );
};

export default ManageServices;