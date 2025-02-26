import LogoHistorica from "../images/historicalogo.svg";
import LogoYungas from "../images/yungaslogo.svg";
import LogoSur from "../images/surlogo.svg";
import LogoChoromoro from "../images/choromorologo.svg";
import LogoCalchaqui from "../images/calchaquilogo.svg";
import Image from "next/image";

export default function MenuDestinos
() {
  return (
    <div className="z-40 flex flex-row gap-4">
        <button>
        <Image src={LogoHistorica} alt="Historica" height={100} />
        </button>
    </div>
  )
}
