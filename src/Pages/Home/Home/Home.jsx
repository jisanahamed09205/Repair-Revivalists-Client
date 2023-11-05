import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Location from "../Location/Location";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className="text-center">
                <a
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
                    Show All
                    <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                </a>
            </div>
            <FAQ></FAQ>
            <Location></Location>
        </div>
    );
};

export default Home;