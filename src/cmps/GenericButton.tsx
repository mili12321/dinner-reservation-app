import React, { useEffect, useState } from 'react';
import { Stack, Button } from "@mui/material"

interface Props {
    text:string,
    variant: "text" | "outlined" | "contained" | undefined,
    color: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined,
    size: "small" | "medium" | "large" | undefined,
    isDisabled: boolean,
    startIcon?: JSX.Element,
    endIcon?: JSX.Element,
    handleClick: () => void,
}

export const GenericButton = ( { variant, color, size, isDisabled, startIcon, endIcon, text, handleClick } : Props ) => {


    const onHandleClick = () => {
        if(!isDisabled){
            handleClick()
        }
    }

    return (
        <Stack spacing={2} direction="row">
            <Button
             variant={variant}
             color={color}
             size={size}
             disabled={isDisabled} 
             onClick={onHandleClick}
             startIcon={startIcon}
             endIcon={endIcon}
            >{text}</Button>
        </Stack>
    )
}