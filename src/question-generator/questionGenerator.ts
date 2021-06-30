import { QuestionVaraibles } from "./model"

export const questionVaraiblesGenerator = (numberPool: ReadonlyArray<number>, totalToGenerate: number): ReadonlyArray<QuestionVaraibles> => {

    const getRandomNumberFromPool = () => {
        const index = Math.round((Math.random() * (numberPool.length - 1)));
        return numberPool[index];
    }

    return new Array<QuestionVaraibles>(totalToGenerate).map(() => {
        return {
            x: getRandomNumberFromPool(),
            y: getRandomNumberFromPool()
        }
    });
}