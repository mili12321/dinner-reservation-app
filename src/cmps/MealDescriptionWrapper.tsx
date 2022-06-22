import React from 'react'
import icon_alarm_clock from '../assets/imgs/icon-alarm-clock.png'
import icon_flames from '../assets/imgs/icon-flames.png'
import icon_star from '../assets/imgs/icon-star.png'
import { IMenuItem } from '../interfaces/menuItem.interface'

interface Props {
    hoverdMenueItem:IMenuItem | null
}

export const MealDescriptionWrapper = ({hoverdMenueItem}:Props) => {

    const getDesignInformation = ({key, val}:{key: string, val: string | number}) => {
        const getIcon = (key: string) => {
            const icons = {
                rate:icon_star,
                price:icon_flames,
                calories:icon_flames,
                prepTime: icon_alarm_clock
            }
            return icons[key as keyof typeof icons] 
        }
        return (
            <div className="flex additional-info-wrapper place-center">
                <div className='icon'><img src={getIcon(key)} alt="" /></div>
                <div className='info'>{val}</div>
            </div>
        )
    }

    if(!hoverdMenueItem) return null
    return (
        <div className='meal-description-wrapper fade-in active flex column place-center'>
            <div className='meal-image'><img src={hoverdMenueItem.image} alt="bacon_King_Burger" /></div>
            <div className="information-wrapper flex column">
                <div className="information-header flex space-between place-center">
                    <div className="title">{hoverdMenueItem.title}</div>
                    <div className="price">${hoverdMenueItem.price}</div>
                </div>
                <div className="description">{hoverdMenueItem.desc}</div>
                <div className="additional-meal-information flex space-between">
                    {['rate', 'calories', 'prepTime'].map((item, idx)=>
                        <React.Fragment key={`additional-meal-information-${idx}`}>
                            {getDesignInformation({key: item, val: hoverdMenueItem[item  as keyof typeof hoverdMenueItem]})}
                        </React.Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}