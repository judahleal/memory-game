import { useRef, useMemo, useState } from "react";
import { Card } from "../Card";
import { ModalSuccess } from "../Modal/Success";
import { Container } from "./styles";

type ICardProps = {
  card: HTMLButtonElement;
  number: string;
  setIsSelected: (value: boolean) => void;
};

type IHandleCardSelectionProps = {
  card: ICardProps;
  clear?: boolean;
};

export const GameContainer: React.FunctionComponent = () => {
  let numbers = [];
  let cardsNumber = 16; // must be an even number

  for (let i = 1; i <= cardsNumber; i++) {
    numbers.push(i);
  }

  const [showModalSucces, setShowModalSuccess] = useState<boolean>(false);

  let getRandomNumber = (): number => {
    return Math.floor(Math.random() * (cardsNumber / 2) + 1);
  };

  const setRandomNumbers = () => {
    let randomNumbers = [];
    for (let i = 0; randomNumbers.length < cardsNumber; i++) {
      let randomNumber = getRandomNumber();
      if (randomNumbers.filter((number) => number === randomNumber).length < 2) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  };

  let randomNumbers: number[] = useMemo<number[]>(() => setRandomNumbers(), []);

  let selectedCards: ICardProps[] = [];
  let points = 0;

  const containerRef = useRef<HTMLDivElement>(null);

  const valideSelectedCards = (): boolean => {
    return selectedCards[0].number === selectedCards[1].number;
  };

  const handleCardSelection = ({ card, clear }: IHandleCardSelectionProps): boolean => {
    if (clear) {
      selectedCards = [];
      return false;
    }
    selectedCards.push(card);
    if (selectedCards.length === 2) {
      const result = valideSelectedCards();
      if (result) {
        points++;
        selectedCards.forEach((card) => (card.card.disabled = true));
        selectedCards = [];
        if (points === cardsNumber / 2) {
          setShowModalSuccess(true);
        }
        return result;
      }
      const childrenElement: HTMLCollection | undefined = containerRef.current?.children;
      childrenElement && [...childrenElement].forEach((card) => card?.classList.add("block"));
      setTimeout(() => {
        selectedCards.forEach((card) => card.setIsSelected(false));
        childrenElement && [...childrenElement].forEach((card) => card?.classList.remove("block"));
        selectedCards = [];
      }, 500);
    }
    return false;
  };

  return (
    <>
      {showModalSucces && <ModalSuccess />}
      <Container ref={containerRef} done={showModalSucces}>
        {randomNumbers.map((number, index) => (
          <Card key={index} handleClick={handleCardSelection}>
            {number.toString()}
          </Card>
        ))}
      </Container>
    </>
  );
};
