import { v4 as randonId } from "uuid";
import { Produts } from "../pages/Home";

export const morkProduct: Produts[] = [
	{
		id: randonId(),
		name: "Batata",
		price: 5,
		quantity: 2,
	},
	{
		id: randonId(),
		name: "Cebola",
		price: 1,
		quantity: 20,
	},
	{
		id: randonId(),
		name: "Cenoura",
		price: 5,
		quantity: 30,
	},
];
