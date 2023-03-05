import styled from "styled-components";

import imgLogo from "../assets/images/logo.png";

export function Header() {
    return (
        <Container>
            <img src={imgLogo} alt=""/>
            <h1>ZapRecall</h1>          
        </Container>
    );
}

const Container = styled.div `
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    img {
        width: 52px;
        height: auto;
    }

    h1 {
        font-family: "Righteous", cursive;
        font-weight: 400;
        font-size: 36px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`;
    