
const FAQ = () => {
    return (
        <div className="max-w-[1200px] mx-auto bg-green-100">
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    {/* <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p> */}
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What types of items can I bring to the Community Repair Workshop?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">You can bring a wide range of items, including electronics, small appliances, clothing, bicycles, furniture, and more. Our skilled technicians and volunteers are here to assist you with repairs. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Is there a fee for using the Community Repair Workshop services?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">In most cases, our workshops are free to use. However, there may be a nominal fee for specific repairs or if replacement parts are needed. We aim to keep our services accessible to all.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Can I volunteer to help with repairs at the workshop?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Absolutely! We welcome volunteers who are passionate about repair and sustainability. Whether you're an experienced technician or just eager to learn, we'd love to have you join our team. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;