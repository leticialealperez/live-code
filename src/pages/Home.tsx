import { useMemo, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { v4 as randonId } from "uuid";
import { Paragraph } from "../components/styled/Paragraph";
import { Table } from "../components/styled/Table";
import { Title } from "../components/styled/Title";

export interface Produts {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

export function Home() {
	const [products, setProduct] = useState<Produts[]>([
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
			quantity: 10,
		},
	]);
	//criando formatador
	//moeda
	const currencyFormatter = new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'})
	
	//deletar
	

	// valor total em estoque
	const amountTotal = useMemo(()=>{		 
		const value = products.reduce((acc, current)=>{
			const valuePerProduct = current.price * current.quantity

			return acc + valuePerProduct;
		}, 0)
		return value
	},[products])

	// quantidade total em estoque
	const quantityTotal = useMemo(() => {
		const soma = products.reduce((acc, current) => {
			return acc + current.quantity;
		}, 0);

		return soma;
	}, [products]);

	return (
		<Fragment>
			<Title>Alô GrowDev</Title>
			<Paragraph>Quantity of Stock: {quantityTotal}</Paragraph>
			<Paragraph>Amount of Stock: {currencyFormatter.format(amountTotal)}</Paragraph>
			<Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
				</thead>

				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>{product.name}</td>
							<td>{currencyFormatter.format(product.price)}</td>
							<td>{product.quantity}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Fragment>
	);
}
