import React from "react";
import CardBack from "../CardBack/CardBack";
import Card from "../Card/Card";
import cards from "../../data/cards";

export default function CardGrid({ cardData, flipCard, dealtCards }) {
  return (
    <div id="card-grid">
      {dealtCards.map((array, index) => {
        return (
          <div className="card-row" key={index}>
            {array.map((cardIndex) => {
              return cardData[cardIndex].flipped ? (
                <Card src={cards[cardIndex].path} key={cardIndex} />
              ) : (
                <CardBack onClick={() => flipCard(cardIndex)} key={cardIndex} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
