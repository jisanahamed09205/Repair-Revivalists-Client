
const Banner = () => {
    return (
        <div>
            {/* Hero */}
            {/* <div className="bg-slate-900"> */}
            <div className="bg-[url('/banner.jpg')] hero">
            <div className="hero-overlay bg-opacity-50"></div>
                <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                        {/* Title */}
                        <div className="max-w-3xl text-center mx-auto">
                            <h1 
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="block font-[500] text-gray-200 text-4xl sm:text-xl md:text-3xl lg:text-5xl font-Playpen">
                            Revitalize, Repair, and Reconnect: Join Our Community Repair Workshops!
                            </h1>
                        </div>
                        {/* End Title */}
                        <div className="max-w-3xl text-center mx-auto">
                            <p 
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                            className="text-lg text-gray-200 font-Manrope">Discover a vibrant community committed to revitalizing items, fostering repair skills, and strengthening connections through our Community Repair Workshops. Join us today!</p>
                        </div>
                        {/* Buttons */}
                        <div className="text-center">
                            <a 
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
                                Get started
                                <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                </svg>
                            </a>
                        </div>
                        {/* End Buttons */}
                    </div>
                </div>
            </div>
            {/* End Hero */}

        </div>
    );
};

export default Banner;