import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  text-transform: uppercase;
  transition: font-size 1s;

  &:hover {
    font-size: 3em;
  }
`

export default function Title() {
  return (
    <>
      <StyledTitle>Astronomy Photo Of The Day</StyledTitle>
    </>
  )
}