import { useHistory } from "react-router-dom";
import { Button } from "src/components/Button";
import { useAppContext } from "src/context";
import { Container } from "./styles";

export const Player: React.FunctionComponent = () => {
  const context = useAppContext();
  const history = useHistory();

  const canPlay = (): void => {
    if (!context?.username) {
      return;
    }
    history.push("/play");
  };

  return (
    <Container>
      <div>
        <input placeholder="Digite seu nome" type="text" value={context?.username} onChange={(event) => context?.setUsername(event.target.value)} />
        <div className="buttonContainer">
          <Button type="cancel" onClick={() => history.push("/")} text="Voltar" />
          <Button type="default" onClick={canPlay} text="Avançar" />
        </div>
      </div>
    </Container>
  );
};
