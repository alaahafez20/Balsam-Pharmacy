import React, { useState } from 'react';
import "./HeaderSlider.css";
import { Link } from 'react-router-dom';

const HeaderSlider = (props) => {

  return (
    <div className='header py-4'>
        <div className='container pt-4 mt-5 text-center'>
        <h1 className='pt-5 mt-5 header_title'>
          BALSAM PHARMACY
        </h1>
        <p className='text-center mx-auto header_text py-2 mb-5 w-75'>
        This is a pharmacy website that is an initiative to help the upcoming visitors with the help. Baksam focuses on providing the most efficient help or needs as the pharmacy wants to be simple.
        </p>
        
        <Link to='/OrderPrescription' className='main_btn mt-5'>
          Order Prescription
        </Link>
        
       
        </div>
        
    </div>
  );
}

export default HeaderSlider;