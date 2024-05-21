import { useMemo, useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { v4 as randonId } from "uuid";
import { Paragraph } from "../components/styled/Paragraph";
import { Table } from "../components/styled/Table";
import { Title } from "../components/styled/Title";
import { ModalProduct } from "../components/fuctional/Modal";
import { ModalFooter } from "../components/styled/Modal/ModalFooter";
import { ActionButton } from "../components/styled/ActionButton";
import { ModalHeader } from "../components/styled/Modal/ModalHeader";
import { ModalTitle } from "../components/styled/Modal/ModalTitle";
import { ModalBody } from "../components/styled/Modal/ModalBody";

export interface Produts {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

export function Home() {
	const [display, setDisplay] = useState<boolean>(false);
	const nameRef = useRef<HTMLInputElement>(null);
	const priceRef = useRef<HTMLInputElement>(null);
	const quantityRef = useRef<HTMLInputElement>(null);

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

	console.log(products);
	

	function createProduct() {
		const name = nameRef.current?.value;
		const price = priceRef.current?.value;
		const quantity = quantityRef.current?.value;
		
		if (!name || !price || !quantity) {
			return;
		}

		const newProduct: Produts = {
			id: randonId(),
			name,
			price: Number(price),
			quantity: Number(quantity),
		};

		setProduct((data) => [newProduct, ...data]);
	}

	//criando formatador
	//moeda
	const currencyFormatter = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	//deletar
	function productDelete(idProduct: string) {
		if (window.confirm("Você deseja realmente deletar o produto?")) {
			setProduct((currentValue) =>
				currentValue.filter((productActual) => productActual.id !== idProduct),
			);
		}
	}

	//Abrir Modal
	function showModal() {
		setDisplay((prev) => !prev);
	}

	//criar formulário capaz de cadastrar um novo produto

	//remover o mock
	//sempre salvar os produtos no localStorage
	//ser possivel atualizar um produto, não precisa de modal, usar o prompt do navegador
	// para capturar os dados.

	// valor total em estoque
	const amountTotal = useMemo(() => {
		const value = products.reduce((acc, current) => {
			const valuePerProduct = current.price * current.quantity;

			return acc + valuePerProduct;
		}, 0);
		return value;
	}, [products]);

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
						<tr key={product.id} onClick={() => productDelete(product.id)}>
							<td>{product.name}</td>
							<td>{currencyFormatter.format(product.price)}</td>
							<td>{product.quantity}</td>
						</tr>
					))}
				</tbody>
			</Table>
			<button onClick={showModal}>Adicional Produto</button>
			<ModalProduct display={display}>
				<ModalHeader>
					<ModalTitle>TESTE TITLE</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<input name='name' ref={nameRef} type='text' placeholder='Nome do produto' />
					<input
						name='price'
						ref={priceRef}
						type='number'
						placeholder='Preço do produto'
					/>
					<input
						name='quantity'
						ref={quantityRef}
						type='number'
						placeholder='Quantidade do produto'
					/>
				</ModalBody>
				<ModalFooter>
					<ActionButton onClick={showModal}>Cancelar</ActionButton>
					<ActionButton type='button' onClick={createProduct}>
						ok
					</ActionButton>
				</ModalFooter>
			</ModalProduct>
		</Fragment>
	);
}
