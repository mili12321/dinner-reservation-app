import React, { useState, useEffect } from "react";
import { SelectMeal } from "../../../cmps/SelectMeal"
import { MealTypeTypes } from "../../../types/mealTypeTypes"
import { fromBeginningToIthElement } from "../../../utils/fromBeginningToIthElement"
import { IOrder, OrderContextType } from "../../../interfaces/order.interface"
import { GenericButton } from "../../../cmps/GenericButton"
import { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from "../../../types/buttonTypes"
import { useContext } from "react"
import { OrderContext } from "../../../context/orderContext/OrderProvider"
import { MealDescriptionWrapper } from "../../../cmps/MealDescriptionWrapper";
import { IMenuItem } from "../../../interfaces/menuItem.interface";

interface Props {
    order: IOrder
}

const selectMealTypes = [MealTypeTypes.FIRST,MealTypeTypes.MAIN,MealTypeTypes.DESERT]

export const Order = ({order}:Props) => {

    const [meals, setMeals] = useState(order.meals);

    useEffect(() => {
        setMeals(order.meals);
    }, [order])

    const selectMealTypesToShow = fromBeginningToIthElement( meals.length, selectMealTypes)

    const { removeOrder, editOrder } = useContext(OrderContext) as OrderContextType;

    const removeCurrentOrder = () => {
        removeOrder(order.id)
    }

    const onEditOrder = (newMeals: string[]) => {
        const editedOrder = { 
            id:order.id,
            meals:newMeals,
            isCompleted:newMeals.length===3
        }
        editOrder(editedOrder) 
    }


    const updateMeals = ({index, meal}:{index: number, meal:string}) => {
        const newMeals = [...meals]
        if(newMeals[index]){
            // Replace meal value
            newMeals[index]=meal
            newMeals.length = index+1
            if(newMeals[index+1]){
                // All meals after the current meal will be reset
                newMeals[index+1]=''
            }
        }else{
            // adds a new meal value for the fist time
            newMeals.push(meal)
        }
        setMeals(newMeals)
        onEditOrder(newMeals)        
    };

    const [hoverdMenueItem, setHoverdMenueItem] = useState<IMenuItem|null>(null)
    const onHoverItem = (menuItem:IMenuItem | null) => {
        setHoverdMenueItem(menuItem)
    }
    
    
    return (
        <div className="order-wrapper flex place-center">
            <div className="order-name">Guest_{order.id}</div>
            
            {selectMealTypesToShow.map((type: string, index: number) =>
                <div className="select-meal-wrapper" key={`select-${type}-meal-${index}`}>
                    <SelectMeal 
                    mealType={type} 
                    currentMeal={Boolean(meals[index]) ? meals[index] : '' }
                    currentMealIndex={index}
                    updateMeals={updateMeals}
                    meals={meals}
                    onHoverItem={onHoverItem}
                    />
                    <MealDescriptionWrapper hoverdMenueItem={hoverdMenueItem}/>
                </div>
            )}
            {order.isCompleted&&<GenericButton
                variant={ButtonVariantTypes.CONTAINED} 
                color={ButtonColorTypes.SECONDARY} 
                size={ButtonSizeTypes.SMALL} 
                isDisabled={false} 
                text={'remove'}
                handleClick={removeCurrentOrder}
            />}
        </div>
    )
}
