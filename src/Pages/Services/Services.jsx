
const Services = () => {
    return (
        <div className=" max-w-[1200px] mx-auto ">
            <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mx-auto">
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
                    <h6>Price: $778</h6>
                    <div className="flex justify-between items-center mt-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Learn More</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;