import { useState, useRef, PropsWithChildren } from "react";
import { Image } from "../Image";
import { CardContainer } from "./styles";

type ICardProps = {
  card: HTMLButtonElement;
  number: string;
  setIsSelected: (value: boolean) => void;
};

type IHandleClickProps = {
  card: ICardProps;
  clear?: boolean;
};

type ICardsProps = {
  handleClick: ({ card, clear }: IHandleClickProps) => boolean;
};

export const Card: React.FunctionComponent<PropsWithChildren<ICardsProps>> = ({ children, handleClick }) => {
  const [isSelected, setIsSelected] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);

  const selectCard = (event: React.MouseEvent<HTMLButtonElement>, number: string) => {
    if (cardRef?.current?.disabled) {
      return;
    }
    const card = {
      card: event.currentTarget,
      number,
      setIsSelected,
    };
    setIsSelected(!isSelected);
    if (isSelected) {
      handleClick({ card, clear: true });
      return;
    }
    handleClick({ card });
  };

  return (
    <CardContainer type="button" ref={cardRef} onClick={(event) => selectCard(event, `${children}`)} isSelected={isSelected}>
      {isSelected && <Image number={children?.toString()} />}
    </CardContainer>
  );
};
