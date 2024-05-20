import React, { useRef } from "react";
import { ModalStyled } from "../styled/Modal";
import { v4 as randonId } from "uuid";
import { Produts } from "../../pages/Home";

import { ModalBody } from "../styled/Modal/ModalBody";
import { ModalButton } from "../styled/Modal/ModalButton";
import { ModalContent } from "../styled/Modal/ModalContent";
import { ModalDialog } from "../styled/Modal/ModalDialog";
import { ModalFooter } from "../styled/Modal/ModalFooter";
import { ModalHeader } from "../styled/Modal/ModalHeader";
import { ModalTitle } from "../styled/Modal/ModalTitle";
import { ActionButton } from "../styled/ActionButton";

interface ModalProps {
	setProduct: React.Dispatch<React.SetStateAction<Produts[]>>;
	isShow?: boolean;
	showModal: () => void;
}

export function Modal({ setProduct, isShow, showModal }: ModalProps) {
	const nameRef = useRef<HTMLInputElement>(null);
	const priceRef = useRef<HTMLInputElement>(null);
	const quantityRef = useRef<HTMLInputElement>(null);
	const createProduct = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

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
	};

	return (
		<ModalStyled isShow={isShow} onSubmit={(e) => createProduct(e)}>
			<ModalDialog>
				<ModalContent>
					<ModalHeader>
						<ModalTitle>TESTE TITLE</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<input
							name='name'
							ref={nameRef}
							type='text'
							placeholder='Nome do produto'
						/>
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
						<ActionButton type='submit' onSubmit={(e) => createProduct(e)}>
							ok
						</ActionButton>
					</ModalFooter>
				</ModalContent>
			</ModalDialog>
		</ModalStyled>
	);
}
