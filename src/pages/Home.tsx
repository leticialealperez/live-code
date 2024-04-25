import { Fragment } from "react/jsx-runtime";
import { Title } from "../components/styled/Title";
import { Table } from "../components/styled/Table";

export interface Produts {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

export function Home() {
	return (
		<Fragment>
			<Title>Alô GrowDev</Title>
			<Table>
				<thead>
					<tr>
						<th>Descrição</th>
						<th>Preço</th>
						<th>Quantidade</th>
					</tr>
				</thead>

				<tbody>
					<th></th>
				</tbody>
			</Table>
		</Fragment>
	);
}
