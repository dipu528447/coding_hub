import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftMenu from '../LeftMenu/LeftMenu';

const Checkout = () => {
    const dataCheckout=useLoaderData()
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid lg:w-1/4 sm:w-full flex-grow h-full card place-items-center">
                    <LeftMenu></LeftMenu>    
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid lg:w-3/4 sm:w-full flex-grow h-48 card bg-base-300 rounded-box place-items-center">        
                    <h1 className='text-6xl'>congratulations!!!</h1>
                    <p className='text-2xl'>you have purchased {dataCheckout.title} tutorial</p>  
                </div>
            </div>
        </div>
    );
};

export default Checkout;