
const ServicesCard = ({service}) => {

    const {service_name,service_img,service_description,service_provider_name,service_provider_img,service_price,service_area} =service;

    return (
        <div>
            <div className="w-96 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mx-auto my-10">
                <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={service_img} />
                <div className="p-4">
                    <h2 className="text-xl  font-semibold">{service_name}</h2>
                    <p className="text-gray-600">{service_description}</p>
                    <div className="flex justify-between items-center">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus  rounded-full w-8 mr-2">
                                <img src={service_provider_img} alt="" />
                            </div>
                            <h6>{service_provider_name}</h6>
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                    </div>
                    <p><small>{service_area}</small></p>
                    <h6>Price: {service_price}</h6>
                    <div className="flex justify-between items-center mt-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">ViewDetails</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;