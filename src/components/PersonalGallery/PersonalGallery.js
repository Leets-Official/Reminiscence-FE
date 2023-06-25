import React from "react";
import { createGlobalStyle } from "styled-components";
import ImageSlide from "./ImageSlide";
import ImageFrame from "./ImageFrame";
import TextFrame from "./TextFrame";

const GlobalStyle = createGlobalStyle`
  body{
    background-color : black;
  }
`;

export default function PersonalGallery() {
  return (
    <div>
      <GlobalStyle />
      <ImageSlide />
      <ImageFrame />
      <TextFrame />
    </div>
  );
}
