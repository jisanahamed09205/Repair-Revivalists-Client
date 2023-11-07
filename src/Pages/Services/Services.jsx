import { Link, useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import { useState } from "react";

const Services = () => {

    const serviceData = useLoaderData();


    const [dataLength,setDataLength] = useState(4)

    return (
        <div className=" max-w-[1200px] mx-auto pt-4 ">
            <div className="text-center">
                <h2 className=" font-bold text-4xl">Our Services</h2>
            </div>
            {/* <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mx-auto">
                <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src="/Toyota3.jpg" />
                <div className="p-4">
                    <h2 className="text-xl  font-semibold">Beautiful Card</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
                    <div className="flex justify-between items-center">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus  rounded-full w-8 mr-2">
                                <img src="/avatar.png" alt="" />
                            </div>
                            <h6>Name</h6>
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                    </div>
                    <p><small>California,Usa</small></p>
                    <h6>Price: $778</h6>
                    <div className="flex justify-between items-center mt-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Learn More</button>
                    </div>
                </div>
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    serviceData.slice(0,dataLength).map((service)=> <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className={dataLength === serviceData.length && 'hidden'}>
                <div className="text-center my-5">
                    <button
                    onClick={()=> setDataLength(serviceData.length)}
                        className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
                        See All Services
                        <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Services;