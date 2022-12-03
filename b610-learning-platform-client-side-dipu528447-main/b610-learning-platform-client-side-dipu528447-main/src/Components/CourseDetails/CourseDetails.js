import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftMenu from '../LeftMenu/LeftMenu';
import JsPDF from 'jspdf';
const CourseDetails = () => {
    const data=useLoaderData();
    const generatePDF = () => {

        const report = new JsPDF('portrait','pt','a4');
        report.html(document.querySelector('#details')).then(() => {
            report.save('details.pdf');
        });
    }
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid lg:w-1/4 sm:w-full flex-grow h-full card place-items-center">
                    <LeftMenu></LeftMenu>    
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid lg:w-3/4 sm:w-full flex-grow h-full card bg-base-300 rounded-box place-items-center">
                <button className="btn btn-outline btn-primary " onClick={generatePDF}>Download PDF!</button>
                    <div className="card lg:card-side bg-base-100 shadow-xl mx-auto my-10" >
                        <figure><img src={data.image} alt="Album"/></figure>
                        <div className="card-body ">
                            <div id="details">
                                <h2 className="card-title">{data.title}!</h2>
                                <ul className='text-start'>
                                    <li>Instructor : {data.course_discription.instructor}</li>
                                    <li>Language : {data.course_discription.language}</li>
                                    <li>Course Length : {data.course_discription.course_length}</li>
                                    <li>Course price : {data.course_discription.price}</li>
                                </ul>
                            </div>
                           
                            <div className="card-actions justify-end">
                                <Link to={`/checkout/${data.id}`}><button className="btn btn-primary">Get Premium Access!</button></Link>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;