import styled from 'styled-components';

export const Header = styled.header`
  height: 50px;
  width: 100%;
  top: 0;
  background-color: #6643b5;
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 5px 0;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.19);
  right: 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  display: inline-block;
  height: 40px;
  width: 350px;
  border-radius: 2px;
  border: none;
  padding-left: 40px;
  font-size: 20px;
  &:focus {
    outline: 0;
  }

  &::placeholder {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  height: 42px;
  background-color: white;
  border: none;
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Svg = styled.svg`
  &:hover {
    fill: #f83e4b;
  }
  &:focus {
    fill: #7dd87d;
  }
`;
