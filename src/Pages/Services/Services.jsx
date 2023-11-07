import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import { useState } from "react";

const Services = () => {

    const serviceData = useLoaderData();

    const [dataLength,setDataLength] = useState(4)
    const [allData,setAllData] =useState(serviceData)
    const [searched,setSearched] = useState(serviceData);


    const handleServiceName = (e) => {
        e.preventDefault();
        const form = e.target;
        const search = form.search.value;
        if(search.length) {
            const filterCard = allData.filter(
                (card) => card.service_name.toLowerCase() == search.toLowerCase()
            );
            if(filterCard){
                setSearched(filterCard);
            }
        }
        else{
            setSearched(allData);
        }
    };

    const handleInputChange = (e) => {
        const search = e.target.value;
        if (!search.length) {
            setSearched(allData);
        }
    };


    return (
        <div className=" max-w-[1200px] mx-auto pt-4 ">
            <form onSubmit={handleServiceName} className=" my-5">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" name="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900  border-2 border-red-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find Services..." onChange={handleInputChange} required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>


            <div className="text-center">
                <h2 className=" font-bold text-4xl">Our Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    searched.slice(0,dataLength).map((service)=> <ServicesCard key={service._id} service={service}></ServicesCard>)
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