import styled from "styled-components";

import { Card } from "./Card";
import cards from "../cards";

export function Deck({answeredQuestionsNumber, setAnsweredQuestionsNumber}) {
    return (
        <Container>
            {cards.map((card, index) => (
                <Card
                questionIndex={index + 1}
                questionText={card.question} 
                answerText={card.answer}
                answeredQuestionsNumber={answeredQuestionsNumber}
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