import React from 'react';
import { NavLink, useNavigate, useLocation   } from "react-router-dom";
//Components
import { ThemingBtn } from './ThemingBtn';
import { ButtonColorTypes, ButtonSizeTypes } from '../types/buttonTypes';
import { GenericIconButton } from './GenericIconButton';
// Icons
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


export const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/'

    return (
        <div className='navbar flex space-between place-center'>
            <div className='links-wrapper flex place-center'>
                <div>
                    {!isHomePage &&
                        <GenericIconButton
                            color={ButtonColorTypes.INHERIT} 
                            size={ButtonSizeTypes.SMALL} 
                            isDisabled={false} 
                            icon={<ArrowBackIosRoundedIcon fontSize="inherit"/>}
                            label={'arrow-back-icon'}
                            handleClick={() => navigate(-1)}
                        />
                    }
                </div>
                <NavLink className='forward' to={`/`} >Home</NavLink>
                <NavLink className='forward' to={`/dinner-reservation`} >Dinner Reservation</NavLink>
            </div>
            <ThemingBtn/>
        </div>
    )
}