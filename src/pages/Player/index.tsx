import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../context";
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
          <Button type="confirm" onClick={canPlay} text="Avançar" />
        </div>
      </div>
    </Container>
  );
};