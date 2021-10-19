import React from "react";
import "./Footer.css";

const Footer = () => 
{
  return (
    <div className="mt-5 footer">
      <div className="">
        <div className="row">
          <div className="col-md-4  ">
            <div className="first-cart ">
              <h1 className="">Our Branches</h1>
              <p>Horipur sub-district</p>
              <p>Pirangong sub-district</p>
              <p>Ruheia sub-district</p>
              
            </div>
          </div>
          <div className="col-md-4">
                <h1>Hotline</h1>
                <p><strong>Reception: +8801823039800 <br />
                   Cardiac Service:+8801771241673 <br />
                  Customer Care: +8801824666536
                  </strong></p>
          </div>
          <div className="col-md-4">
            <div className="second-part">
              <h1>Contact Us</h1>
              <small className="mt-5">Office: 46 Mina Tower, Thakurgaon Sadar</small>
              <br />
              <small className="mt-3">Phone: 01789845674</small>
              <br />
              <small className="mt-3">Fax: 08) 06 4752 1499</small>
              <br />
              <small className="mt-3">Email:thakurgahospital.com </small>
            </div>
          </div>
        </div>
        <hr />
        <div className="botton text-center">
          <small>2020  All Rights Reserved by</small>
           <br />
          <small>©Coder Bappa</small>
        </div>
      </div>
    </div>) };

export default Footer;
