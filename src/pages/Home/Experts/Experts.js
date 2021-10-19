import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: "https://static9.depositphotos.com/1003326/1189/i/600/depositphotos_11899201-stock-photo-doctor.jpg",
        name: 'Sakira jahan',
        expertize: 'Surgery Specialist in (DMC)'
    },
    {
        img: "https://www.demo.unitemplates.com/medico/images/hospital/doctor_001.jpg",
        name: 'John Anderson',
        expertize: 'Eye Specialish(RMC)'
    },
    {
        img: "https://jituchauhan.com/site-templates/medical-website-template/02_gastroenterology/images/dr-single.jpg",
        name: 'Zakaria Smith',
        expertize: 'Child Specialish(SMC)'
    },
    {
        img: "https://bodikacosmetic.com/wp-content/uploads/2015/11/1.jpg",
        name: 'Nasrin jahan',
        expertize: 'NuroSerjon(UK)'
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e-LlVxLqh5hNiv1fzvYWTr5vOb4uqUsTmbMfwBdyQFlcdCB-AhDTDc0xKmjK7iLej60&usqp=CAU",
        name: 'Sakib Gossamy',
        expertize: 'Kidney Specialist'
    },
    {
        img: "https://image1.masterfile.com/getImage/NjkzLTA2MzI0MjQ5ZW4uMDAwMDAwMDA=AKtGJu/693-06324249en_Masterfile.jpg",
        name: 'Kamal Uddin',
        expertize: 'Ear Specialist (India)'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-dark fw-bolder m-5">Our Expert Doctors🧑‍⚕️</h2>
            <div className="row bg-success bg-opacity-10">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;