import React from "react";
import styled from "styled-components";

function Select(props) {
  const Select = styled.select``;
  return (
    <Select value={props.value} onChange={props.onChange}>
      {props.options.map((option) => {
        return <option value={option}>{option}</option>;
      })}
    </Select>
  );
}

export default Select;
