import styled from "styled-components";

export default styled.button`
  font-family: ${(props) => props.theme.font};
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  background: ${(props) => props.theme.primary};
  color: #fff;

  :focus {
    outline: none;
  }

  :hover,
  :active {
    background: lightblue;
    color: blue;
    border-color: lightblue;
  }
`;
