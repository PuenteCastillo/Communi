import Image from "next/image";

import Arrow from "../../../../Images/updated_arrow.png";

export default function Services_item(props: any) {
  return (
    <div className="col-md-4">
      <div className="item">
        <div className="img_container">
          <Image src={props.image} alt="Placeholder" />
        </div>
        <div className="title_row row">
          <div className="col-7">
            <h3>{props.title}</h3>
          </div>
          <div className="col-5 ">
            <a>
              Explore <Image src={Arrow} className="arrow" alt="arrow next " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
