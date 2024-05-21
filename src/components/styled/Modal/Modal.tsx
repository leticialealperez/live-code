import styled from "styled-components";

interface ModalStyledProps{
	display?: boolean
}

export const Modal = styled.div<ModalStyledProps>`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1055;
	display: ${props => props.display ? "block" : "none"};
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	outline: 0;
	background-color: #0000009d;
`;
