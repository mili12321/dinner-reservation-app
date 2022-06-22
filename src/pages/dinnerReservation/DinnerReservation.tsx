import React, { useContext } from 'react';
import { OrderContext } from '../../context/orderContext/OrderProvider'
import { ButtonVariantTypes, ButtonColorTypes, ButtonSizeTypes } from "../../types/buttonTypes";
import AlarmIcon from '@mui/icons-material/Alarm';
import { GenericButton } from '../../cmps/GenericButton';
import { Order } from './cmps/Order';
import { OrderContextType } from '../../interfaces/order.interface';

export const DinnerReservation = () => {

    const { orders, addOrder } = useContext(OrderContext) as OrderContextType;

    const addNewOrder = () => {
        addOrder()
    }

    return (
        <div className='dinner-reservation-page flex column place-center'>
            <div  className='title'>Dinner Reservation</div>
            <div className="dinner-reservation-wrapper flex column">
                <div className='dinner-reservation-list flex column justify-center'>
                    {orders.map((order, idx) => <Order key={idx} order={order}/>)}
                </div>

                {(orders.at(-1)?.isCompleted || orders.length === 0 )&&<GenericButton
                    variant={ButtonVariantTypes.OUTLINED} 
                    color={ButtonColorTypes.INFO} 
                    size={ButtonSizeTypes.SMALL} 
                    isDisabled={false} 
                    endIcon={<AlarmIcon fontSize="inherit"/>}
                    text={'add new order'}
                    handleClick={addNewOrder}
                />}
            </div>
        </div>
    )
}