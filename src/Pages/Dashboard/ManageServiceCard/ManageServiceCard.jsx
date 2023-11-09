import { Link } from "react-router-dom";
import { GrEdit } from 'react-icons/gr';
import Swal from "sweetalert2";


const ManageServiceCard = ({service,servicesData,setServicesData}) => {

    const {_id,service_name,service_img,service_description,service_provider_name,service_provider_img,service_price,service_area} =service;

    const handleDelete = _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/service/${_id}`,{
                method: 'DELETE'
            })
                .then(res=> res.json())
                .then(data=>{
                    // console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Service has been deleted.",
                            icon: "success"
                        });
                        const remaining = servicesData.filter(serv=>serv._id !== _id)
                        setServicesData(remaining);
                    }
                })
            }
          });
    }

    return (
        <div>
            <div className="w-96 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mx-auto my-5">
                {/* framer motion */}
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
                    <div className="flex justify-between items-center my-5">
                        <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-error btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <Link to={`/updateService/${_id}`}>
                            <button className="btn btn-square btn-accent btn-outline">
                                <GrEdit className="h-6 w-6 "></GrEdit>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServiceCard;