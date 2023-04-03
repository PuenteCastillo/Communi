import Image from "next/image";

import Arrow from "../../../../Images/updated_arrow.png";
import Link from "next/link";

export default function Services_item(props: any) {
  return (
    <div id="Service_item" className="profile_module col-md-12">
      <Link href="/profile/services/serviceID?5555">
        <div className="item">
          <div className="img_container">
            <Image
              src={props.image}
              alt="Placeholder"
              width={800}
              height={800}
            />
          </div>
          <div className="title_row row">
            <div className="col-7">
              <h3>{props.title}</h3>
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
}
