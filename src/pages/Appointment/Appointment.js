import React from 'react';
import { Link } from 'react-router-dom';

import './Appointment.css';


const Appointment = ({appointment}) => {
    const {id,name, fee,description, address,phone,reception, img} = appointment;
    return (
        <div className="appointment pb-3">
            <img className="w-50 mt-3 rounded-3 " src={img} alt="" />
            <h4 className="mt-4">{name}</h4>
            <address className="px-3">{description}</address>
            <address>{address} <br />
            Reception for booking:{reception}
             <br /> <b>Visiting Charge: {fee}.00 TK</b>
             </address>
            
        </div>
    );
};

export default Appointment;