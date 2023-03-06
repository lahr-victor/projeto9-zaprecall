import { Card } from "./Card";
import cards from "../cards";

import styled from "styled-components";

export function Deck(setAnsweredQuestionsNumber) {
    return (
        <Container>
            {cards.map((card, index) => (
                <Card
                questionIndex={index + 1}
                questionText={card.question} 
                answer={card.answer}
                setAnsweredQuestionsNumber={setAnsweredQuestionsNumber}
                />  
            ))}
        </Container>
    );
}

const Container = styled.div `
    margin-top: 50px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;