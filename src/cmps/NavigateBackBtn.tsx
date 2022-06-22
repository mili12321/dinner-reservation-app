import React from 'react';
import { useNavigate, useLocation   } from "react-router-dom";
import { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../types/buttonTypes';
import { GenericButton } from './GenericButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

export const NavigateBackBtn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/'

    return (
        <>
            {!isHomePage &&
                <div className="navigate-back-btn">
                    <GenericButton
                        variant={ButtonVariantTypes.OUTLINED} 
                        color={ButtonColorTypes.INHERIT} 
                        size={ButtonSizeTypes.SMALL}  
                        isDisabled={false} 
                        text={'GO BACK'}
                        handleClick={() => navigate(-1)}
                        startIcon={<ArrowBackIosRoundedIcon/>}
                    />
                </div>
            }
        </>
    )
}