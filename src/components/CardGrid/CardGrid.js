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
      {/* <div className="card-row"></div>
      {cardData[0].flipped ? (
        <Card src={cards[0].path} />
      ) : (
        <CardBack onClick={() => flipCard(0)} />
      )}
      {cardData[1].flipped ? (
        <Card src={cards[1].path} />
      ) : (
        <CardBack onClick={() => flipCard(1)} />
      )}
      {cardData[2].flipped ? (
        <Card src={cards[2].path} />
      ) : (
        <CardBack onClick={() => flipCard(2)} />
      )}
      <div className="card-row">
        {cardData[4].flipped ? (
          <Card src={cards[4].path} />
        ) : (
          <CardBack onClick={() => flipCard(4)} />
        )}
        {cardData[7].flipped ? (
          <Card src={cards[7].path} />
        ) : (
          <CardBack onClick={() => flipCard(7)} />
        )}
        {cardData[6].flipped ? (
          <Card src={cards[6].path} />
        ) : (
          <CardBack onClick={() => flipCard(6)} />
        )}
      </div> */}
    </div>
  );
}
