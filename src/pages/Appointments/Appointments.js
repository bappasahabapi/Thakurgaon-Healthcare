import React, { useEffect, useState } from 'react';
import Appointment from '../Appointment/Appointment';
import "./Appointments.css"

const Appointments = () => {
    const [appointments, setAppointments] =useState([]);
    useEffect(()=>{
        fetch('appointments.json')
        .then(response =>response.json())
        .then(data => setAppointments(data));
    },[])
    return (
        <div id="appointments">
            <h2 className="text-dark fw-bolder m-5">Any Emmergency  Appointment</h2>
            <div className="text-center fw-bold text-success">
                 <p>Contact: <a href="#"> +88029126226</a> </p> 
                 <p>Contact: <a href="#"> +88029126575</a></p> 
                 <p>Contact: <a href="#"> +88029126568</a> </p> 
                 <p>Contact: <a href="#"> +88029126641</a></p> 
            </div>
            <hr className="w-75 mx-auto " />
            <br />
            <div>
            <h2>Sepcial doctor </h2>
            <br /><br /><br />
            </div>
            <div className="container appointment-container">
                
                {
                    appointments.map(appointment=>
                        <Appointment
                        key={appointment.id}
                        appointment={appointment}
                        ></Appointment>)
                }

            </div>
        </div>
    );
};

export default Appointments;