import Base from "@/layouts/Base";
import HomeHeader from "@/components/header/homeHeader";
import Spotlight from "@/components/pages/Spotlight";

export default function Home() {
  return (
    <Base>
      <HomeHeader />
      <Spotlight />
    </Base>
  );
}
