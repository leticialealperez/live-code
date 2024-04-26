import { Produts } from "../pages/Home";
import { v4 as randonId } from "uuid"
 
export const morkProduct: Produts[] = [
    {
        id: randonId(),
        name: "Batata",
        price: 5,
        quantity: 2
    },
    {
        id: randonId(),
        name: "Cebola",
        price: 1,
        quantity: 3
    },
    {
        id: randonId(),
        name: "Cenoura",
        price: 5,
        quantity: 10
    },

    
]