import React from 'react';
import { NavLink } from "react-router-dom";
import { ThemingBtn } from './ThemingBtn';

export const Navbar = () => {

    return (
        <div className='navbar flex space-between place-center'>
            <div className="logo">Dinner Reservations</div>
            <div className='links-wrapper flex place-center'>
                <NavLink className='forward' to={`/`} >Home</NavLink>
                <NavLink className='forward' to={`/dinner-reservation`} >Dinner Reservation</NavLink>
            </div>
            <ThemingBtn/>
        </div>
    )
}