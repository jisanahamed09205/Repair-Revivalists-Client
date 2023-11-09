import { space } from "postcss/lib/list";
import Swal from "sweetalert2";

const BookingRow = ({booking,handleRemove,handleBookingStatus}) => {

    const {_id,name,userEmail,date,area,price,imgURL,status} = booking;

    return (
            <tr>
                <td>{name}</td>
                <td>{date}</td>
                <td>{area}</td>
                <td>{price}</td>
                <td>
                    {
                        status === 'Confirm' ? <span className=" font-bold text-orange-600">Completed</span> : 
                            <button className=" btn btn-primary btn-sm" onClick={() => handleBookingStatus(_id)}>In Progress</button>
                        // <div className="dropdown">
                        //     <label tabIndex={0} className="btn btn-sm"><button>Inprogress</button></label>
                        //     <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        //         <li><button onClick={() => handleBookingStatus(_id)} className="btn-sm btn">Inprogress</button></li>
                        //         <li><button onClick={() => handleBookingStatus(_id)} className="btn-sm btn">Pending</button></li>
                        //         <li><button onClick={() => handleBookingStatus(_id)} className="btn-sm btn">Compleat</button></li>
                        //     </ul>
                        // </div>
                    }
                </td>
                <td>
                <button onClick={()=> handleRemove(_id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                </td>
            </tr>
    );
};

export default BookingRow;