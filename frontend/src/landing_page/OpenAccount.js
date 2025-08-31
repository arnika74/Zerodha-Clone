import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-2'>Open a Zerodha account</h1> 
                <p className='mt-4 mb-4 fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary p-2 fs-5 mt-4 fw-semibold' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
            </div> 
       </div> 
    );
}

export default OpenAccount;