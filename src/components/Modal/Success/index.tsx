import { useHistory } from "react-router-dom";
import { Button } from "src/components/Button";
import { useAppContext } from "src/context";
import { Container } from "./styles";
import logo from "src/assets/images/logo.png";

export const ModalSuccess: React.FunctionComponent = () => {
  const history = useHistory();
  const context = useAppContext();

  return (
    <Container>
      <div className="content">
        <h4>Parabéns, {context?.username}!</h4>
        <img src={logo} alt="logo" />
        <div className="buttonContainer">
          <Button type="default" onClick={() => history.push("/")} text="Ir para início" />
        </div>
      </div>
    </Container>
  );
};
