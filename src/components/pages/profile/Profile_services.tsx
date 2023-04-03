import Image from "next/image";
import Link from "next/link";
import Placeholder from "../../../Images/landscaping.jpg";
import Arrow from "../../../Images/updated_arrow.png";
import Services_item from "./services/Services_item";

export default function Profile_services(props: any) {
  // for each props.services, create a Services_item
  const myServices = props.services.map((item: any, index: number) => {
    console.log(item);
    return (
      <div className="col-md-12">
        <Link href="/profile/services/serviceID?5555">
          <div className="item">
            <div className="img_container">
              <Image
                src={item.image}
                alt="Placeholder"
                width={800}
                height={800}
              />
            </div>
            <div className="title_row row">
              <div className="col-7">
                <h3>{item.title}</h3>
              </div>
              <div className="col-5 ">
                <p className="link">
                  Explore
                  <Image src={Arrow} className="arrow" alt="arrow next " />
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <section id="profile_services" className="profile_module">
      <div className="row">{myServices}</div>
    </section>
  );
}
