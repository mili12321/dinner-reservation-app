import React, { createContext, useReducer, useMemo } from 'react';
import orderReducer from './OrderReducer';
import {makeId} from '../../utils/makeId'

const initialState = {
    orders: [
        {
            id: makeId(),
            isCompleted: false,
            meals:[]
        }
    ]
};

export const OrderContext = createContext(initialState);

export const OrderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(orderReducer, initialState);

    function addOrder() {
        const order = {
            id: makeId(),
            isCompleted: false,
            meals:[]
        }
        dispatch({
            type: "ADD_ORDER",
            payload: order
        });
    }

    function editOrder(order) {
        dispatch({
            type: "EDIT_ORDER",
            payload: order
        });
    }

    function removeOrder(id) {
        dispatch({
            type: "REMOVE_ORDER",
            payload: id
        });
    }

    const value = useMemo(() => ({
        orders: state.orders,
        addOrder,
        editOrder,
        removeOrder
    }), [state.orders]);

    return (  <OrderContext.Provider
        value={value}
      >
        {children}
      </OrderContext.Provider>
    )
};