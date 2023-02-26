import LogoAtleticoMineiro from "src/assets/teamsLogo/atletico-mineiro.svg";
import LogoBahia from "src/assets/teamsLogo/bahia.svg";
import LogoCorinthians from "src/assets/teamsLogo/corinthians.svg";
import LogoGremio from "src/assets/teamsLogo/gremio.svg";
import LogoInternacional from "src/assets/teamsLogo/internacional.svg";
import LogoPalmeiras from "src/assets/teamsLogo/palmeiras.svg";
import LogoSantos from "src/assets/teamsLogo/santos.svg";
import LogoSaoPaulo from "src/assets/teamsLogo/sao-paulo.svg";

type ITeamsLogoProps = {
  number?: string;
};

type ITeamsProps = {
  [key: string]: string;
};

const teams: ITeamsProps = {
  "1": LogoAtleticoMineiro,
  "2": LogoBahia,
  "3": LogoCorinthians,
  "4": LogoGremio,
  "5": LogoInternacional,
  "6": LogoPalmeiras,
  "7": LogoSantos,
  "8": LogoSaoPaulo,
};

export const Image: React.FunctionComponent<ITeamsLogoProps> = ({ number }) => <>{number && <img src={teams[number]} alt="" />}</>;
