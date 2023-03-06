import imgPlay from "../assets/images/icon_play.png";

import styled from "styled-components";

export function Card({questionIndex, questionText, answer, setAnsweredQuestionsNumber}) {
    return (
        <Container>
            <h2>Pergunta {questionIndex}</h2>
            <img src={imgPlay} alt="Play"></img>
        </Container>
    );
}

const Container = styled.div `
    width: 300px;
    min-height: 65px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;

    h2 {
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    }

    img {
        width: 20px;
        height: auto;
    }
`