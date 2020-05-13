import React from "react";
import styled from "styled-components";
import { actionColor } from "../../utils/cityColors.js";

function Select(props) {
  const Select = styled.select`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 5px;
    height: 100%;
    width: auto;
    border-radius: 2px;
    border-color: grey;
    background: white;
    font-size: 1.2rem;
    @media screen and (max-width: 600px) {
      font-size: 0.9rem;
    }
  `;
  const Option = styled.option`
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    list-style-type: none;
    margin: 0;
    padding: 1% 3%;
    background: white;
    color: black;
    font-size: 0.9rem;
    cursor: pointer;
  `;
  return (
    <Select data-testid="select" value={props.value} onChange={props.onChange}>
      {props.options.map((option) => {
        return (
          <Option key={`option-${option}`} value={option}>
            {option}
          </Option>
        );
      })}
    </Select>
  );
}

export default Select;
