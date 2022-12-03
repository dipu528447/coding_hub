import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <ul className='flex lg:flex-col sm:flex-row'>
            {data.map((item,index)=>
                {
                    
                    return <Link to={`/category/${item.id}`} className='p-6 bg-base-300 rounded-box m-2' key={index}>{item.title}</Link>
                    
                })}
            </ul>
        </div>
    );
};

export default LeftMenu;