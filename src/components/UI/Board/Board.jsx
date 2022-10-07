import React from 'react';

import Card from '../../Card/Card';

import classes from './Board.module.scss';

const Board = ({ cards, onCardClick, cardFlipepd }) => {
  return (
    <section className={classes.board}>
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card.card}
          matched={card.matched}
          onClick={onCardClick}
          id={index}
          cardFlipepd={cardFlipepd}
        />
      ))}
    </section>
  );
};

export default Board;
