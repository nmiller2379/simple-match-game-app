import React, { useState, useEffect } from "react";
import CardGrid from "../CardGrid/CardGrid";
import cards from "../../data/cards";
import Matches from "../Matches/Matches";
import Timer from "../Timer/Timer";
import Message from "../Message/Message";
import randomNums from "../../utils/randomNums";

export default function () {
  const [cardData, setCardData] = useState(cards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matches, setMatches] = useState(0);
  const [time, setTime] = useState({ minutes: 2, seconds: "00" });
  const [gameOn, setGameOn] = useState(false);
  const [dealtCards, setDealtCards] = useState(randomNums());
  const possibleMatches = 1;

  useEffect(() => {
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

  useEffect(() => {
    if (gameOn) {
      const timeOutId = setTimeout(() => {
        if (
          (time.minutes === 0 && time.seconds === "00") ||
          matches === possibleMatches
        ) {
          console.log("Game Over");
          setGameOn(false);
        } else if (time.seconds === "00") {
          setTime({ minutes: time.minutes - 1, seconds: 59 });
        } else {
          setTime({
            minutes: time.minutes,
            seconds:
              time.seconds - 1 < 10
                ? `0${time.seconds - 1}`
                : time.seconds - 1 || "00",
          });
        }
      }, 100);
      return () => clearTimeout(timeOutId);
    }
  }, [time, gameOn]);

  const flipCard = (position) => {
    if (!gameOn) {
      setGameOn(true);
    }
    if (cardData[position].flipped || flippedCards.length === 2) {
      return;
    }
    const flippedCard = cardData[position];
    const newCardData = [...cardData];
    newCardData[position].flipped = !newCardData[position].flipped;
    setCardData(newCardData);
    setFlippedCards([...flippedCards, flippedCard]);
  };

  return (
    <div id="game">
      <CardGrid
        cardData={cardData}
        dealtCards={dealtCards}
        flipCard={flipCard}
      />
      <Matches matches={matches} totalMatches={possibleMatches} />
      <Timer minutes={time.minutes} seconds={time.seconds} />
      {!gameOn && time.minutes < 2 ? (
        <Message matches={matches} totalMatches={possibleMatches} />
      ) : null}
    </div>
  );
}
