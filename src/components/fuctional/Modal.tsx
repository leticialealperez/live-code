import React,{ useRef } from "react";
import { ModalStyled } from "../styled/Modal"
import { v4 as randonId } from "uuid";
import { Produts } from "../../pages/Home";

interface ModalProps{
    setProduct: React.Dispatch<React.SetStateAction<Produts[]>>;
    isShow?: boolean
}

export function Modal({setProduct, isShow}: ModalProps ){
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const quantityRef = useRef<HTMLInputElement>(null)
    const createProduct = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()

        const name = nameRef.current?.value
        const price = priceRef.current?.value
        const quantity = quantityRef.current?.value
        
        if(!name || !price || !quantity){
            return
        }

        const newProduct: Produts = {
            id: randonId(),
            name,
            price: Number(price),
            quantity: Number(quantity)
        }

        setProduct((data)=> [newProduct, ...data])
    }

    return (
        <ModalStyled isShow={isShow} onSubmit={(e)=> createProduct(e)} >
            <input name="name" ref={nameRef } type="text" placeholder="Nome do produto"/>
            <input name="price" ref={priceRef} type="number" placeholder="Preço do produto"/>
            <input name="quantity" ref={quantityRef} type="number" placeholder="Quantidade do produto"/>
        </ModalStyled>
    )
}