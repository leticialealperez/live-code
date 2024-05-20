import styled from "styled-components"

interface ModalStyledProps{
    isShow?: boolean
}
export const ModalStyled = styled.form<ModalStyledProps>`
    width: 100%;
    max-width: 800px;
    padding: 0 20px;
    background-color: black;

    display: ${({isShow})=> isShow ? "block" : "none"};
`