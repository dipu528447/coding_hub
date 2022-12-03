import React, { useContext, useState } from 'react';
import { json, Link, Outlet, useLoaderData } from 'react-router-dom';
import { ThemeContext } from '../../App';
import LeftMenu from '../LeftMenu/LeftMenu';


const Courses = () => {
    const loadCourses=useLoaderData();
    const [theme,setTheme]=useContext(ThemeContext)
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid lg:w-1/4 sm:w-full flex-grow h-full card place-items-center">
                    <LeftMenu></LeftMenu>    
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid lg:w-3/4 sm:w-full flex-grow h-full card bg-base-300 rounded-box place-items-center">
                {loadCourses.map(course=>{
                        return (
                            <div className={`card lg:card-side  shadow-xl m-12`}>
                                <figure><img src={course.image} alt="Album" className='w-52 h-full'/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{course.title} !</h2>
                                    <p>Price: {course.course_discription.price}.</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/categoryDetails/${course.id}`}><button className="btn btn-primary">Show Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Courses;