const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray;
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const primeNumbersArray = (limit = 60, arrayLength = 16) => {
  const primeNumbersArray = [];

  for (let i = 0; i <= limit; i++) {
    if (isPrime(i)) {
      const length = primeNumbersArray.push(i);

      if (length === arrayLength) break;
    }
  }

  return primeNumbersArray.concat(primeNumbersArray);
};

export const shuffledCardArray = () => {
  const arrayForShuffle = [...primeNumbersArray()];
  const shuffledArray = shuffleArray(arrayForShuffle);

  return shuffledArray.map((number) => {
    return { card: number, matched: false };
  });
};
