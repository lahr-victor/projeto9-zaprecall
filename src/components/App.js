import React from "react";

import ResetStyle from "../assets/styles/ResetStyle";
import GlobalStyle from "../assets/styles/GlobalStyle";

import { Header } from "./Header";
import { Deck } from "./Deck";
import { Footer } from "./Footer";

export function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
            
      <Header />
      <Deck />
      <Footer />
    </>    
  );
}
