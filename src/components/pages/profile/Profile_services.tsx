import Image from "next/image";
import Placeholder from "../../../Images/landscaping.jpg";
import Arrow from "../../../Images/updated_arrow.png";
import Services_item from "./services/Services_item";

export default function Profile_services(props: any) {
  // for each props.services, create a Services_item
  const myServices = props.services.map((item: any, index: number) => {
    console.log(item);
    return <Services_item key={index} {...item} />;
  });

  return (
    <section id="profile_services" className="">
      <div className="container">
        <div className="row">{myServices}</div>
      </div>
    </section>
  );
}
