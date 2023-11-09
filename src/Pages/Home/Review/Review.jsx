
const Review = () => {
    return (
        <div>
            <section className="my-8 max-w-[1200px] mx-auto">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="p-4 text-xl md:text-3xl lg:text-5xl font-semibold leadi text-center">What our customers are saying about us</h1>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 font-Playpen">
                    {/* 1st */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-green-100">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>I brought in my old laptop to the Community Repair Workshop, and the team did an amazing job fixing it up. Not only did they save me money, but they also saved a piece of technology from ending up in a landfill. I'm so grateful for this invaluable service!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700" />
                            <p className="text-xl font-semibold leadi">Daniel Rodriguez</p>
                            <p className="text-sm uppercase">Photography and Travel</p>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-green-100">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Attending the Community Repair Workshop was such a rewarding experience. The volunteers were knowledgeable and friendly, and I learned so much about DIY repairs. It's great to be part of a community that values sustainability and hands-on learning.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700" />
                            <p className="text-xl font-semibold leadi">Emily Turner</p>
                            <p className="text-sm uppercase">Gardening and Sustainable Living</p>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-green-100">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>I've been a regular at the workshop for months now, and it's become a second home to me. The sense of camaraderie and the satisfaction of fixing things together is truly special. Kudos to the team for creating this wonderful space!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700" />
                            <p className="text-xl font-semibold leadi">Sarah Johnson</p>
                            <p className="text-sm uppercase">Cooking and Culinary Arts</p>
                        </div>
                    </div>
                    {/* 4th */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-green-100">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>I can't say enough good things about the Community Repair Workshop. They fixed my favorite lamp that I thought was beyond repair, and now it's back in my living room shining brightly. The impact they have on the environment is commendable. Thank you!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700" />
                            <p className="text-xl font-semibold leadi">Jason Patel</p>
                            <p className="text-sm uppercase">Designer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;