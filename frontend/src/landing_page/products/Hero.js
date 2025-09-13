import React from 'react';

function Hero() {
    return ( 
        <div className='container'> 
        <div className="p-5 mt-5 mb-5 text-center text-muted border-bottom">
        <h2 className='fs-3'>Zerodha Products</h2>
        <h3 className='mt-3 fs-5'>Sleek, modern, and intuitive trading platforms</h3>
        <p className='mt-4 fs-6 mb-5'>Check out our <a href="#" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
            </a>
        </p>
        </div>
        </div>
     );
}

export default Hero;