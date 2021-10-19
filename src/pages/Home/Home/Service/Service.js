import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { id, name, description, img } = service;
    return (
        <div className="service pb-3 ">
            <img className="w-50 mt-3 rounded-3 " src={img} alt="" />
            <h3 className="mt-4">{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-warning">Booking {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;