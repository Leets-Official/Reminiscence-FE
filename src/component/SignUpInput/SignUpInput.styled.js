import { styled } from 'styled-components';

export const InputContainer = styled.div`
  width: 550px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 46px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-family: K2D;
  font-weight: 700;

  color: white;
`;

export const Input = styled.input`
  width: 550px;
  height: 70px;

  font-size: 17px;
  font-family: K2D;
  font-weight: 500;

  margin-top: 26px;
  padding: 0 20px 0 20px;
  background: white;
  box-sizing: border-box;
  outline: none;

  border: none;
  border-radius: 5px;

  ::placeholder {
    color: #b1b1b1;
  }
`;
