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
    const [answerResult, setAnswerResult] = React.useState(undefined);

    const colorWrong = "#FF3030"
    const colorAlmost = "#FF922E";
    const colorCorrect = "#2FBE34";

    function selectAnswerResult(result) {
        setAnswerResult(result);
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

    function selectIconDataTest(result) {
        switch (result) {
            case "wrong": 
                return "no-icon";
            case "almost": 
                return "partial-icon";
            case "correct": 
                return "zap-icon";
            default: 
                return "play-btn";
        }
    }

    if (!cardSelected) {
        return (
            <Container data-test="flashcard"
            cardSelected={cardSelected}
            questionAnswered={questionAnswered}
            resultColor={() => selectColor(answerResult)}
            >
                <h2 data-test="flashcard-text">Pergunta {questionIndex}</h2>
                <img 
                src={selectIcon(answerResult)} 
                alt="" 
                onClick={!questionAnswered ? () => setCardSelected(true) : undefined}
                data-test={selectIconDataTest(answerResult)}
                />
            </Container>
        );
    } else if (!cardFlipped) {
        return (
            <Container data-test="flashcard"
            cardSelected={cardSelected}
            >
                <p data-test="flashcard-text">{questionText}</p>
                <img 
                src={iconTurn} 
                alt="" 
                onClick={() => setCardFlipped(true)}
                data-test="turn-btn"
                />
            </Container>
        )    
    } else {
        return (
        <Container data-test="flashcard"
        cardSelected={cardSelected}
        >
            <p data-test="flashcard-text">{answerText}</p>
            <div>
                <Result 
                color={colorWrong}
                onClick={() => selectAnswerResult("wrong")} 
                data-test="no-btn"
                >
                    Não lembrei
                </Result>
                <Result
                color={colorAlmost} 
                onClick={() => selectAnswerResult("almost")} 
                data-test="partial-btn"
                >
                    Quase não lembrei
                </Result>
                <Result 
                color={colorCorrect}
                onClick={() => selectAnswerResult("correct")}
                data-test="zap-btn"
                >
                    Zap!
                </Result>
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

const Result = styled.button `
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