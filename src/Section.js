import React from "react";

export default function Section(props) {
  return (
    <>
      <img src={props.data.hdurl} alt={props.data.title} />
      <p>Date: {props.data.date}</p>
      <p>{props.data.explanation}</p>
    </>
  )
}