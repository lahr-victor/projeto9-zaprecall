import React from "react";
import styled from "styled-components";

import iconAlmost from "../assets/images/icon_almost.png";
import iconCorrect from "../assets/images/icon_correct.png";
import iconPlay from "../assets/images/icon_play.png";
import iconTurn from "../assets/images/icon_turn.png";
import iconWrong from "../assets/images/icon_wrong.png";

export function Card({questionIndex, questionText, answerText, answeredQuestionsNumber, setAnsweredQuestionsNumber}) {

    const [questionAnswered, setQuestionAnswered] = React.useState(false);
    const [cardSelected, setCardSelected] = React.useState(false);    
    const [cardFlipped, setCardFlipped] = React.useState(false);
    const [answerResult, setAnswerResult] = React.useState("");
    const [answerIcon, setAnswerIcon] = React.useState(iconPlay);

    function selectCard() {
        if (!questionAnswered) {
            setCardSelected(true);
        }
    }

    function flipCard() {
        setCardFlipped(true);
    }

    function selectAnswerResult(result) {
        setAnswerResult(result);
        setAnswerIcon(selectIcon(result));
        setAnsweredQuestionsNumber(answeredQuestionsNumber + 1);
        setQuestionAnswered(true);
        setCardSelected(false);        
    }

    function selectColor(result) {
        switch (result) {
            case "wrong": 
                return "#FF3030";
            case "almost": 
                return "#FF922E";
            case "correct": 
                return "#2FBE34";
            default: 
                return "#333333";
        }
    }

    function selectIcon(result) {
        switch (result) {
            case "wrong": 
                return iconWrong;
            case "almost": 
                return iconAlmost;
            case "correct": 
                return iconCorrect;
            default: 
                return iconPlay;
        }
    }

    if (!cardSelected) {
        return (
            <Container  
            onClick={selectCard}
            questionAnswered={questionAnswered}
            cardSelected={cardSelected}
            answerResult={answerResult}
            resultColor={() => selectColor(answerResult)}
            >
                <h2>Pergunta {questionIndex}</h2>
                <img src={answerIcon} alt=""></img>
            </Container>
        );
    } else if (!cardFlipped) {
        return (
            <Container
            onClick={flipCard}
            >
                <p>{questionText}</p>
                <img src={iconTurn} alt=""></img>
            </Container>
        )    
    } else {
        return (
        <Container>
            <p>{answerText}</p>
            <div>
                <button onClick={() => selectAnswerResult("wrong")}>Não lembrei</button>
                <button onClick={() => selectAnswerResult("almost")}>Quase não lembrei</button>
                <button onClick={() => selectAnswerResult("correct")}>Zap!</button>
            </div>            
        </Container>    
        )
    }
}

const Container = styled.div `
    width: 300px;
    min-height: ${props => props.cardSelected ? "131px" : "65px"};
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.cardSelected ? "#FFFFD4" : "#FFFFFF"};
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
    cursor: pointer;

    h2 {
        font-weight: 700;
        font-size: 16px;
        color: ${props => props.resultColor};
        text-decoration: ${props => props.questionAnswered ? "line-through" : "none"};
    }

    img {
        width: 20px;
        height: auto;
    }
`