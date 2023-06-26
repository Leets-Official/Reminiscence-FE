// PersonalGallery.js
import React from "react";
import { createGlobalStyle } from "styled-components";
import ImageSlide from "./ImageSlide";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: black;
  }
`;

export default function PersonalGallery() {
  return (
    <div>
      <GlobalStyle />
      <ImageSlide />
    </div>
  );
}
