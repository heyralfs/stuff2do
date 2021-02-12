import React from "react";
import styled from "styled-components";

const Form = styled.form`
  input,
  select,
  button[type="submit"] {
    height: 35px;
    border: 1px solid ${({ theme }) => theme.bgColor};
    transition: all 300ms;
  }
  input,
  select {
    padding: 5px 10px;
    margin-right: 5px;
    color: ${({ theme }) => theme.color};
  }
  input:focus,
  select:focus,
  button[type="submit"]:focus {
    outline: 0;
  }
  input {
    width: calc(75% - 45px);
  }
  select {
    width: 25%;
    color: #666;
  }
  button[type="submit"] {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.widgetBg};
    width: 35px;
    display: inline-block;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    opacity: 0.9;
  }
`;

export default Form;
