import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { SelectChangeEvent } from '@mui/material/Select';
import { menuItems } from "../utils/menuItems";
import { IMenuItem } from "../interfaces/menuItem.interface";

interface Props {
    mealType: string,
    currentMeal: string ,
    currentMealIndex: number,
    updateMeals: ({index, meal}:{index: number, meal:string}) => void,
    meals: string[],
    onHoverItem: (menuItem:IMenuItem | null) => void
}

export const SelectMeal = ({mealType, currentMeal, currentMealIndex, updateMeals, onHoverItem}:Props) => {

    useEffect(() => {
        setMeal(currentMeal);
    }, [currentMeal])
    

    const [meal, setMeal] = useState(currentMeal);
  
    const handleChange = (event: SelectChangeEvent) => {
        setMeal(event.target.value);
        updateMeals({index:currentMealIndex, meal:event.target.value})
    };

    
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id={`${mealType}-inputLabel-select`}>
                {mealType}
            </InputLabel>
            <Select
                labelId={`${mealType}-select`}
                id={`${mealType}-select`}
                value={meal}
                label={mealType}
                onChange={handleChange}
                onBlur={()=>onHoverItem(null)}
            >
                <MenuItem value="" disabled>
                <em>None</em>
                </MenuItem>
                {
                    menuItems[mealType].map((menuItem, idx) =>
                        <MenuItem 
                        key={idx}
                        value={menuItem.title}
                        onMouseEnter={()=>onHoverItem(menuItem)}
                        onMouseLeave={()=>onHoverItem(null)}
                        >{menuItem.title}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}