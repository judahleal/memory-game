import { Container } from "./styles";

type ITypesButtonEnum = "default" | "cancel" | "confirm";

type IButtonProps = {
  type: ITypesButtonEnum;
  text: string;
  onClick: () => void;
};

export const Button: React.FunctionComponent<IButtonProps> = ({ type, text, onClick }) => {
  return (
    <Container type="button" className={type} onClick={onClick}>
      {text}
    </Container>
  );
};
