import React from "react";
import styled from "styled-components";

const StyledFooter = styled.p`
  color: #555555;
  font-style: italic;

  &:hover {
    font-style: normal;
  }
`

export default function Footer() {
  return (
    <>
      <StyledFooter>Made by Joe Stanton</StyledFooter>
    </>
  )
}