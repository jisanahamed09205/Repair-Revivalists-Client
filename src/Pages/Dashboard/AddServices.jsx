import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../Provider/AuthProvider";

const AddServices = () => {

    // const {_id,service_name,service_img,service_description,service_provider_name,service_provider_img,service_price,service_area,details} =service;

    const {user} = useContext(AuthContext)

    const handleAddService = e =>{
        e.preventDefault();
        const form = e.target;
        const service_name = form.serviceName.value;
        const userEmail = user?.email;
        const service_provider_name = user?.displayName;
        const service_provider_img = user?.photoURL;
        const service_area = form.area.value;
        const service_description = form.serviceDescription.value;
        const details = form.serviceDetails.value;
        const service_price = form.price.value;
        const service_img = form.imgURL.value;
        const newService ={
            service_name,
            userEmail,
            service_provider_name,
            service_provider_img,
            service_area,
            service_description,
            details,
            service_price,
            service_img,
        }
        // send data to the database server
        fetch('http://localhost:5000/addService',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                swal("Added!", "Service Added Successfully!", "success")
                form.reset();
            }
        })
    }

    return (
        <div className="bg-green-100">
            <h2 className=" text-3xl text-center py-5">Add Service</h2>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-5 mx-auto ">
                    <div className=" mx-auto">
                        <form onSubmit={handleAddService}>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Service Name</label>
                                        <input required type="text" id="serviceName" name="serviceName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Your Email</label>
                                        <input disabled
                                            defaultValue={user?.email}
                                            type="email" id="phn" name="userEmail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Your Name</label>
                                        <input type="text" id="userName" 
                                        defaultValue={user?.displayName} disabled
                                        name="userName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Your Img</label>
                                        <input type="text" id="userImg" 
                                        defaultValue={user?.photoURL} disabled
                                        name="userImg" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Area</label>
                                        <input required type="text" id="" name="area" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Service Description</label>
                                        <input required type="text" id="serviceDescription" name="serviceDescription" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Service Details</label>
                                        <input required type="text" id="serviceDetails" name="serviceDetails" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Price</label>
                                        <input required type="text" id="" name="price" defaultValue={'$'} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Service Img</label>
                                        <input required type="text" id="" name="imgURL"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full ">
                                    <input className="btn btn-primary w-full normal-case" type="submit" value="Add Service" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddServices;