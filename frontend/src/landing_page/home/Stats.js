import React from 'react';

function Stats() {
    return (  
        <div className='container mt-5'>
            <div className='row p-2'>
                <div className='col-5'>
                    <h1 className='fs-3 mb-5'>Trust with confidence</h1>

                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    
                    <h2 className='mt-4 fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    
                    <h2 className='mt-4 fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    
                    <h2 className='mt-4 fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p> 
                </div>
                <div className='col-7 text-center'>
                    <img src='media/images/ecosystem.png' style={{width: "85%"}}></img>
                    <div className='mt-3'>
                        <a href='#' className='mx-4' style={{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='#' style={{textDecoration: "none"}}>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className='text-center mt-4'>
                <img src='media/images/pressLogos.png'></img>
            </div>
        </div>
    );
}

export default Stats;