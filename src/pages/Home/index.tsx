import { useHistory } from "react-router-dom";
import { Button } from "src/components/Button";
import { Container } from "./styles";
import logo from "src/assets/images/logo.png";

export const Home: React.FunctionComponent = () => {
  const history = useHistory();

  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="buttonContainer">
        <Button type="default" onClick={() => history.push("/player")} text="Iniciar" />
      </div>
    </Container>
  );
};
