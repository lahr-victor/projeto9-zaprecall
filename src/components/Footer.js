import cards from "../cards";

import styled from "styled-components";

export function Footer({answeredQuestionsNumber}) {
    return (
        <Container>
            <h3>{answeredQuestionsNumber}/{cards.length} CONCLUÍDOS</h3>
        </Container>
    );
}

const Container = styled.div `
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;

    h3 {
        font-weight: 400;
        font-size: 18px;
        color: #333333;
    }

`