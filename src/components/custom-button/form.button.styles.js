import styled from "styled-components";

export const NavigateButton = styled.button`
  margin-top: 2.1rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#00B9E5"};
  border-radius: 4px;
  padding: 12px 30px;
  width: ${(props) => (props.width ? props.width : "35rem")};
  height: 2.4rem;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 15px;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : "#00B9E5")};
  display: block;
  outline: none;
`;
