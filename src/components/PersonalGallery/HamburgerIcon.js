// HamburgerIcon.js
import styled, { css } from 'styled-components';
import React, { useState } from 'react';

const HamburgerBar = styled.div`
  width: 24px;
  height: 3px;
  background-color: white;
  margin: 2.5px;
  transition: 300ms ease-in-out;

  ${(props) =>
    props.sideNav1 &&
    css`
      transform: translateY(5.5px);
      opacity: 0;
      transition: 150ms ease-in-out;
    `};

  ${(props) =>
    props.sideNav2 &&
    css`
      transform: translateY(4.35px) rotateZ(45deg);
      transition: 300ms ease-in-out;
      background-color: black;
    `};

  ${(props) =>
    props.sideNav3 &&
    css`
      transform: translateY(-3.3px) rotateZ(-45deg);
      transition: 300ms ease-in-out;
      background-color: black;
    `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 6px;
  cursor: pointer;
  z-index: 2;
`;

const Hamburger = ({ sideNav, setSideNav, onClick }) => {
  const handleClick = () => {
    setSideNav(!sideNav);
    onClick();
  };

  return (
    <Container onClick={handleClick}>
      <HamburgerBar sideNav1={sideNav} />
      <HamburgerBar sideNav2={sideNav} />
      <HamburgerBar sideNav3={sideNav} />
    </Container>
  );
};

export default Hamburger;
