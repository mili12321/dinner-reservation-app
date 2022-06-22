export interface IOrder {
    id: string;
    isCompleted: boolean;
    meals: string[] | never[];
}

export type OrderContextType = {
    orders: IOrder[];
    addOrder: ( ) => void;
    editOrder: (order: IOrder) => void;
    removeOrder: (id: string) => void;
};