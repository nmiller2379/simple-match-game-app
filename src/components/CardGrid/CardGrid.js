import React from "react";
import CardBack from "../CardBack/CardBack";
import Card from "../Card/Card";


export default function CardGrid({ cardPosition, flipCard }) {
  return (
    <div id="card-grid">
      <div className="card-row"></div>
      {cardPosition[0].flipped ? (
        <Card src={twoOfHearts} />
      ) : (
        <CardBack onClick={() => flipCard(0)} />
      )}
      {cardPosition[1].flipped ? (
        <Card src={twoOfClubs} />
      ) : (
        <CardBack onClick={() => flipCard(1)} />
      )}
      {cardPosition[2].flipped ? (
        <Card src={threeOfClubs} />
      ) : (
        <CardBack onClick={() => flipCard(2)} />
      )}
      <div className="card-row">
        {cardPosition[4].flipped ? (
          <Card src={fourOfClubs} />
        ) : (
          <CardBack onClick={() => flipCard(4)} />
        )}
        {cardPosition[7].flipped ? (
          <Card src={jackOfSpades} />
        ) : (
          <CardBack onClick={() => flipCard(7)} />
        )}
        {cardPosition[6].flipped ? (
          <Card src={fiveOfClubs} />
        ) : (
          <CardBack onClick={() => flipCard(6)} />
        )}
      </div>
    </div>
  );
}
