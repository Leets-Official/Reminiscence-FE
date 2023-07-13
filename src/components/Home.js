import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const LinkContainer = styled(Link)`
  font-size: 24px;
  font-weight: 700;

  width: 300px;
  height: 71px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid gray;
  background: white;

  text-decoration: none;
  color: black;
  cursor: pointer;
  position: relative;
`;

function Home() {
  return (
    <HomeStyle>
      <LinkContainer to="/api/images/1">Personal Gallery로 이동</LinkContainer>
    </HomeStyle>
  );
}

export default Home;
