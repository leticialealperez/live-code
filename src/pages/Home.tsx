import { Fragment } from "react/jsx-runtime";
import { Title } from "../components/styled/Title";
import { Table } from "../components/styled/Table";
import { morkProduct } from "../mock/products";
import { useState } from "react";

export interface Produts {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

export function Home() {
	const [products, setProduct] = useState<Produts[]>(morkProduct)

	return (
		<Fragment>
			<Title>Alô GrowDev</Title>
			<Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
				</thead>

				<tbody>
                    {products.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
				</tbody>
			</Table>
		</Fragment>
	);
}
