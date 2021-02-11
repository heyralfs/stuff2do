import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  input, 
  select,
  button[type="submit"] {
    padding: 5px;
    height: 35px;
    border: 1px solid ${ ( {theme} )  => theme.submitColor };
    transition: all 300ms;
  }
  input:focus, 
  select:focus,
  button[type="submit"]:focus {
    outline: 0;
  }
  input {
    width: calc( 70% - 35px );
  }
  select {
    width: 30%;
    color: #666;
  }
  button[type="submit"] {
    background-color: ${ ( {theme} )  => theme.submitColor };
    color: ${ ( {theme} )  => theme.widgetBg };
    width: 35px;
    display: inline-block;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    opacity: 0.9;
  }
`;

export default Form;