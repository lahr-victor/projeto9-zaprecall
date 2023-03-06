import React from "react";

import ResetStyle from "../assets/styles/ResetStyle";
import GlobalStyle from "../assets/styles/GlobalStyle";

import { Header } from "./Header";
import { Deck } from "./Deck";
import { Footer } from "./Footer";

export function App() {

  const [answeredQuestionsNumber, setAnsweredQuestionsNumber] = React.useState(0);

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
            
      <Header />
      <Deck 
      answeredQuestionsNumber={answeredQuestionsNumber}
      setAnsweredQuestionsNumber={setAnsweredQuestionsNumber} 
      />
      <Footer answeredQuestionsNumber={answeredQuestionsNumber} />
    </>    
  );
}
