import React, { useState, useEffect } from 'react';

import classes from './Card.module.scss';

const Card = ({ card, onClick, id, matched, cardFlipepd }) => {
  const [isCardShown, setIsCardShown] = useState(true);

  useEffect(() => {
    if (cardFlipepd === 0) {
      setTimeout(() => {
        setIsCardShown(false);
      }, 5000);
    } else if (cardFlipepd % 2 === 0 && !matched) {
      setTimeout(() => setIsCardShown(false), 500);
    }
  }, [matched, cardFlipepd]);

  return (
    <div
      className={classes.card}
      onClick={(event) => onClick(event, id, card, setIsCardShown)}
    >
      {(isCardShown || matched) && <p className={classes.number}>{card}</p>}
    </div>
  );
};

export default Card;
