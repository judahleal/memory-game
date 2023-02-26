import { useHistory } from "react-router-dom";
import { Button } from "src/components/Button";
import { useAppContext } from "src/context";
import { Container } from "./styles";

export const ModalSuccess: React.FunctionComponent = () => {
  const history = useHistory();
  const context = useAppContext();

  return (
    <Container>
      <div>
        <h4>Parabéns, {context?.username}!</h4>
        <div className="buttonContainer">
          <Button type="cancel" onClick={() => history.push("/")} text="Ir para início" />
        </div>
      </div>
    </Container>
  );
};
