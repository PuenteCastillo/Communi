import Base from "../layouts/Base";
import Image from "next/image";
import Logo from "../Images/logo.png";
import Nav from "../components/header/Nav";
import Carousel from "../components/global/Carousel";
import Modal from "../components/global/Modal";
import SaasHeader from "../components/header/SassHeader";
import HowItWorks from "../components/global/HowItWorks";
import MoreInfo from "../components/global/MoreInfo";
import Goals from "../components/global/Goals";

export default function Home() {
  return (
    <Base>
      <Nav />
      <div className="page_content">
        <SaasHeader />
        <HowItWorks />
        <MoreInfo />
        <Goals />
        <div className="hello"></div>
      </div>
    </Base>
  );
}
