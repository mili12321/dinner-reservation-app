import { Home } from "../pages/Home";
import { DinnerReservation } from "../pages/dinnerReservation/DinnerReservation";

export const componentTypes: { [key: string]: React.FC<{}>; } = {
    home: Home,
    dinnerReservation: DinnerReservation,
};