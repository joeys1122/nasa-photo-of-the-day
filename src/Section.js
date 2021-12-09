import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 6%;
  margin-right: 6%;
  border-top: 1px solid #555555;
  border-bottom: 1px solid #555555;
  
  img {
    width: 80%;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  div {
    width: 80%;
    border: 1px solid #555555;
    border-radius: 15px;
    margin-bottom: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    p {
      margin-left: 8%;
      margin-right: 8%;
    }

  }
`

export default function Section(props) {
  return (
    <StyledSection>
      <img src={props.data.hdurl} alt={props.data.title} />
      <div>
        <h2>{props.data.title}</h2>
        <span>Copyright: {props.data.copyright}<br/></span>
        <span>Date: {props.data.date}</span>
        <p>{props.data.explanation}</p>
      </div>
    </StyledSection>
  )
}