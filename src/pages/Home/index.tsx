import { useHistory } from "react-router-dom";
import { Button } from "src/components/Button";
import { Container } from "./styles";

export const Home: React.FunctionComponent = () => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <Button type="default" onClick={() => history.push("/player")} text="Começar" />
      </div>
    </Container>
  );
};
