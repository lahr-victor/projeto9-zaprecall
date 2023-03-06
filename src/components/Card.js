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

    const colorWrong = "#FF3030"
    const colorAlmost = "#FF922E";
    const colorCorrect = "#2FBE34";

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
                return colorWrong;
            case "almost": 
                return colorAlmost;
            case "correct": 
                return colorCorrect;
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
            cardSelected={cardSelected}
            questionAnswered={questionAnswered}
            resultColor={() => selectColor(answerResult)}
            >
                <h2>Pergunta {questionIndex}</h2>
                <img src={answerIcon} alt="" onClick={!questionAnswered && (() => setCardSelected(true))}></img>
            </Container>
        );
    } else if (!cardFlipped) {
        return (
            <Container
            cardSelected={cardSelected}
            >
                <p>{questionText}</p>
                <img src={iconTurn} alt="" onClick={() => setCardFlipped(true)}></img>
            </Container>
        )    
    } else {
        return (
        <Container
        cardSelected={cardSelected}
        >
            <p>{answerText}</p>
            <div>
                <Answer onClick={() => selectAnswerResult("wrong")} color={colorWrong}>Não lembrei</Answer>
                <Answer onClick={() => selectAnswerResult("almost")} color={colorAlmost}>Quase não lembrei</Answer>
                <Answer onClick={() => selectAnswerResult("correct")} color={colorCorrect}>Zap!</Answer>
            </div>
        </Container>    
        )
    }
}

const Container = styled.div `
    width: 300px;
    height: ${props => props.cardSelected ? "180px" : "65px"};
    padding: 15px;
    display: flex;
    flex-direction: ${props => props.cardSelected ? "column" : "row"};
    justify-content: space-between;
    align-items: ${props => props.cardSelected ? "left" : "center"};
    background-color: ${props => props.cardSelected ? "#FFFFD4" : "#FFFFFF"};
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;

    h2 {
        font-weight: 700;
        font-size: 16px;
        color: ${props => props.resultColor};
        text-decoration: ${props => props.questionAnswered ? "line-through" : "none"};
    }

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }

    img {
        width: 20px;
        height: auto;
        cursor: ${props => props.questionAnswered ? "initial" : "pointer"};
        align-self: ${props => props.cardSelected && "flex-end"};
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

const Answer = styled.button `
    width: 80px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    color: #FFFFFF;
    padding: 0 10px;
    background-color: ${props => props.color};
`