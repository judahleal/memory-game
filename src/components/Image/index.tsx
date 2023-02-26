import LogoAtleticoMineiro from "../../assets/teamsLogo/atletico-mineiro.svg";
import LogoBahia from "../../assets/teamsLogo/bahia.svg";
import LogoCorinthians from "../../assets/teamsLogo/corinthians.svg";
import LogoGremio from "../../assets/teamsLogo/gremio.svg";
import LogoInternacional from "../../assets/teamsLogo/internacional.svg";
import LogoPalmeiras from "../../assets/teamsLogo/palmeiras.svg";
import LogoSantos from "../../assets/teamsLogo/santos.svg";
import LogoSaoPaulo from "../../assets/teamsLogo/sao-paulo.svg";

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
