import swal from "sweetalert";

const Location = () => {

    const handleSubmit = e =>{
        e.preventDefault('');
        swal("Successful!", "Your Feedback Submitted!", "success")
    }

    return (
        <div className=" max-w-[1200px] mx-auto">
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className=" lg:w-2/3 w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394146.66169577395!2d-74.36607686439967!3d40.71427296366841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e1!3m2!1sen!2sus!4v1699435235931!5m2!1sen!2sus" />
                    </div>
                        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                                <div className="relative mb-4">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" required id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" required id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <input id="message" required name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                </div>
                                <input className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value="Submit" />
                            </form>
                        </div>
                </div>
            </section>

        </div>
    );
};

export default Location;