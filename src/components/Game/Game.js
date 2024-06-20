import React, { useState, useEffect } from "react";
import CardGrid from "../CardGrid/CardGrid";
import cards from "../../data/cards";
import Matches from "../Matches/Matches";
import twoOfClubs from "../../assets/2_of_clubs.png";
import twoOfHearts from "../../assets/2_of_hearts.png";
import threeOfClubs from "../../assets/3_of_clubs.png";
import threeOfDiamonds from "../../assets/3_of_diamonds.png";
import fourOfClubs from "../../assets/4_of_clubs.png";
import fourOfDiamonds from "../../assets/4_of_diamonds.png";
import fiveOfClubs from "../../assets/5_of_clubs.png";
import jackOfSpades from "../../assets/jack_of_spades.png";

export default function () {
  const [cardData, setCardData] = useState(cards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    console.log(cardData);
    console.log(flippedCards);
    const timeOutId = setTimeout(() => {
      if (flippedCards.length === 2) {
        if (flippedCards[0].value === flippedCards[1].value) {
          setMatches(matches + 1);
          const newCardData = [...cardData];
          newCardData.forEach((card) => {
            if (card.value === flippedCards[0].value) {
              card.matched = true;
            }
          });
          setCardData(newCardData);
        } else {
          const newCardData = [...cardData];
          newCardData.forEach((card) => {
            if (card.flipped && !card.matched) {
              card.flipped = false;
            }
          });
          setCardData(newCardData);
        }
        setFlippedCards([]);
      }
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [flippedCards]);

  const flipCard = (position) => {
    const flippedCard = cardData[position];
    const newCardData = [...cardData];
    newCardData[position].flipped = !newCardData[position].flipped;
    setCardData(newCardData);
    setFlippedCards([...flippedCards, flippedCard]);
  };
  return (
    <div id="game">
      <CardGrid cardPosition={cardData} flipCard={flipCard} />
      <Matches matches={matches} />
    </div>
  );
}
