import React, { useEffect, useState } from 'react';
import "./Booking.css";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Appointments from '../../Appointments/Appointments';



const Booking = () => {
    
    const {serviceId} = useParams();
//----------
    const [details, setDetails] = useState([]);
     const [singleService, setSingleService] = useState({});


    // here we load the data
    useEffect(()=>{
        fetch('/serviceDetail.json') 
        .then(response =>response.json())
        .then(data =>setDetails(data.service))
        // .then(data =>console.log(data.service))
        
    },[])
    
 
    //after load all data it calls 
     
  useEffect(() => {
    const foundService = details.find(
      service => service.login.id == serviceId );
        setSingleService(foundService);
  }, [details, serviceId])

//---------------

    return (
        <div className="booking">
            
            <div className="service">
                <br />
                <h4 className="fw-bolder"> {singleService?.name} SERVICE IS BOOKED .  </h4>
            <img className="w-25 mt-3 rounded-3 mt-3" src={singleService?.img} alt="" />
            <address className="mt-2">
                {singleService?.description} <br />
                Address: <b>{singleService?.address}</b> <br />
                Advanced Booking : <b>{singleService?.booking} </b> <br />
                Visiting Fee: <b>{singleService?.price} Tk.</b>
            </address>
            <Link to="/">
                <button className="btn btn-warning mt-2 fw-bold p-3 rounded-pill">   Go Back </button>
            </Link>  
           <Link className="text-decoration-none border-4 " to="/appointments">
           <Appointments></Appointments>
           </Link>
           

        </div>
  
           

        </div>

    );
};

export default Booking;