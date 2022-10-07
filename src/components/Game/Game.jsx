import React, { useState, useEffect } from 'react';
import Board from '../UI/Board/Board';
import { shuffledCardArray } from '../../helpers/shuffledCardArrayCreator';

import classes from './Game.module.scss';

const Game = () => {
  const [cards, setCards] = useState(shuffledCardArray());
  const [cardFlipepd, setCardFlipped] = useState(0);
  const [choiceOneId, setChoiceOneId] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const onCardClick = (event, id, card, setisCardShown) => {
    setCardFlipped((prevState) => prevState + 1);

    if (!choiceOne) {
      setChoiceOneId(id);
      setChoiceOne(card);
      setisCardShown(true);
    } else if (!choiceTwo && id !== choiceOneId) {
      setChoiceTwo(card);
      setisCardShown(true);
    }
  };

  useEffect(() => {
    if (!choiceOne || !choiceTwo) return;

    if (choiceOne === choiceTwo) {
      const matchedNumber = choiceOne;

      setCards((prevCards) => {
        const matchedCardsArray = prevCards.map((card) => {
          if (card.card === matchedNumber) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
        return [...matchedCardsArray];
      });
    }

    resetTurns();
  }, [choiceOne, choiceTwo]);

  return (
    <main className={classes.game}>
      <Board
        cards={cards}
        onCardClick={onCardClick}
        cardFlipepd={cardFlipepd}
      />
    </main>
  );
};

export default Game;
