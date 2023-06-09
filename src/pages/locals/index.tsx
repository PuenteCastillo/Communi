import Base from "../../layouts/Base";
import HomeHeader from "../../components/header/HomeHeader";
import Spotlight from "../../components/pages/home/Spotlight";
import Featured_Posts from "@/components/pages/home/Features_Posts";
import Recent from "../../components/pages/home/Recent";
import Nav from "../../components/header/Nav";

export default function Home() {
  return (
    <Base>
      <Nav />
      <HomeHeader />
      <Spotlight />
      <Featured_Posts />
      <Recent />
    </Base>
  );
}
