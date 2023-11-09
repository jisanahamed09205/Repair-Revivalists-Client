import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MySchedules = () => {

    const {user} = useContext(AuthContext)

    const [bookings,setBookings] = useState([])

    const url = `http://localhost:5000/bookings?userEmail=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[url]);

    const handleRemove = id =>{
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
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                  });
                  const remaining = bookings.filter((booking)=>booking._id !== id);
                  setBookings(remaining)
                }
            })
          }
        });
    }

    const handleBookingStatus = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'Confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.modifiedCount > 0){
                //update state
                const remaining = bookings.filter(book=>book._id !==id);
                const updated = bookings.find(book=>book._id===id)
                updated.status = 'Confirm'
                const newBookngs = [updated, ...remaining]
                setBookings(newBookngs);
            }
        })
    }

    return (
        <div className=" max-w-[1200px] mx-auto bg-green-50">
            <Helmet>
                <title>Repair Revivalists || My Schedules</title>
            </Helmet>
            <h2 className="text-3xl">My bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className=" font-bold text-xl text-black">
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Service Price</th>
                            <th>Service Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleRemove={handleRemove}
                                handleBookingStatus={handleBookingStatus}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MySchedules;