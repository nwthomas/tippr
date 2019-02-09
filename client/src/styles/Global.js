import { css, keyframes } from "styled-components";

const hoverBtn = keyframes`
  0% {
    color: black;
    background: #43d9b8;
    border: 1px solid #43d9b8;
  }
  100% {
    color: #43d9b8;
    background: white;
    border: 1px solid #43d9b8;
  }
`;

export const Global = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    background: #f8f8f8;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    text-transform: uppercase;
  }
  h1 {
    font-size: 3rem;
  }

  p,
  input {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: #43d9b8;
    font-family: "Source Sans Pro", sans-serif;
  }
  input {
    -webkit-appearance: none;
    background: #f1f1f1;
    border: 1px solid #b5b5b5;
    padding: 5px;
    height: 40px;
    font-size: 1.4rem;
    font-family: "Source Sans Pro", sans-serif;
  }
  button {
    color: black;
    background: #43d9b8;
    font-size: 1.6rem;
    padding: 12px 16px;
    border: 1px solid #43d9b8;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    outline: none;
    cursor: pointer;

    &:hover {
      animation: ${hoverBtn} 0.2s forwards;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
  .App {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
`;
