import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { GameContainer } from "../../components/GameContainer";
import { useAppContext } from "../../context";
import { Container } from "./styles";

export const Play: React.FunctionComponent = () => {
  const context = useAppContext();
  const history = useHistory();

  useLayoutEffect(() => {
    if (!context?.username) {
      history.push("/");
    }
  }, [context?.username, history]);

  return (
    <>
      <Container>
        <GameContainer />
      </Container>
    </>
  );
};
