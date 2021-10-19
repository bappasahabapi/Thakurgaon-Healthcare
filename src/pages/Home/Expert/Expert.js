import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className=" col-lg-4 col-sm-6 col-12 mt-5   ">
            <img className="w-75 h-75 " src={img} alt="" />
            <h3 className="mt-4">{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </div>
    );
};

export default Expert;