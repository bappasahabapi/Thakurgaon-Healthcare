import React from 'react';
import "./Booking.css";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Appointments from '../../Appointments/Appointments';



const Booking = () => {
    const { serviceId } = useParams();



    return (
        <div className="booking">
            
            <h2>  Service  is booked by Id No:{serviceId}</h2>  
            <Link to="/">
                <button className="btn btn-warning mt-2">   Go Back </button>
            </Link>  
           <Link className="text-decoration-none border-4 " to="/appointments">
           <Appointments></Appointments>
           </Link>
           

        </div>

    );
};

export default Booking;