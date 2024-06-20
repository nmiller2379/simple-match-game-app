import React from "react";
import back from "../../assets/back.png";

export default function CardBack({ onClick }) {
  return (
    <button onClick={onClick}>
      <img src={back} alt="back of card" />
    </button>
  );
}
