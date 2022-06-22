import React  from 'react';
import { Stack, IconButton } from "@mui/material"

interface Props {
    color: "inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined,
    size: "small" | "medium" | "large" | undefined,
    isDisabled: boolean,
    icon: JSX.Element,
    label: string,
    handleClick: () => void
}

export const GenericIconButton = ( { color, size, isDisabled, icon, label, handleClick } : Props ) => {


    const onHandleClick = () => {
        if(!isDisabled){
            handleClick()
        }
    }

    return (
        <Stack direction="row" spacing={1}>
            <IconButton 
            aria-label={label} 
            color={color}
            size={size}
            disabled={isDisabled}
            onClick={onHandleClick}
            >
                {icon}
            </IconButton>
        </Stack>
    )
}