export default function orderReducer(state, action) {
    switch (action.type) {
        case "ADD_ORDER":
            return {
                ...state,
                orders: [...state.orders, action.payload],
            };

        case "EDIT_ORDER":
            const updatedOrder = action.payload;

            const updatedOrders = state.orders.map((order) => {
                if (order.id === updatedOrder.id) {
                    return updatedOrder;
                }
                return order;
            });

            return {
                ...state,
                orders: updatedOrders,
            };

        case "REMOVE_ORDER":
            return {
                ...state,
                orders: state.orders.filter(
                    (order) => order.id !== action.payload
                ),
            };

        default:
            return state;
    }
};