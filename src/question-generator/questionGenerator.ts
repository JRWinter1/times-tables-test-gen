import { QuestionVaraibles } from "./model";

const getRandomNumberFromPool = (numberPool: ReadonlyArray<number>) => {

  const index = Math.floor(Math.random() * numberPool.length);
  
  return numberPool[index];
};

export const questionVaraiblesGenerator = (
  numberPool: ReadonlyArray<number>,
  totalToGenerate: number
): ReadonlyArray<QuestionVaraibles> => {
  var current = new Array<QuestionVaraibles>();

  return Array.from(Array(totalToGenerate).keys()).map(() => {
    const x = getRandomNumberFromPool(numberPool.filter(partial11Filter(numberPool)));

    const filteredNumberPool = numberPool.filter(filterEasy11TimesTable(x));

    const deDuped = filteredNumberPool.filter(filterDuplicates(x, current));

    // Id dedpued length is 0, we have exhausted all possible outcomes so remove x from the deduping array.
    if (deDuped.length === 0) {
        current = current.filter(c => c.x !== x || c.y !== x)
    }

    // Only use filtered number pool if it isn't empty.
    const y = getRandomNumberFromPool(
      deDuped.length === 0 ? filteredNumberPool : deDuped
    );

    const v = {
      x: x,
      y: y,
    };

    current.push(v);

    return v;
  });
};

const partial11Filter = (numberPool : ReadonlyArray<number>) => (n : number) => {
    if (n !== 11)
        return true;
    
    const totalOver10 = numberPool.filter(n => n > 10).length

    return  Math.random() < totalOver10/numberPool.length;
}

const filterEasy11TimesTable = (x: number) => (n: number) => {
  if (x < 11) {
    return n !== 11;
  } else if (x === 11) {
    return n > 10;
  } else {
    return true;
  }
};

const filterDuplicates =
  (chosenX: number, currentVariables: ReadonlyArray<QuestionVaraibles>) =>
  (n: number) => {
    return !(
      currentVariables.findIndex(
        (v) => (chosenX === v.x && n === v.y) || (chosenX === v.y && n === v.x)
      ) > -1
    );
  };
