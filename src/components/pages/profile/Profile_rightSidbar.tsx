import Image from "next/image";

import Link from "next/link";
import MapPaceholder from "../../../Images/MapPaceholder.png";

export default function RightSidebar(props: any) {
  return (
    <div className="rightSidebar ">
      <section>
        <h3> Biography </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quos obcaecati necessitatibus provident. Autem, consequatur? Eos
          asperiores, numquam nisi sit excepturi obcaecati earum placeat, sed
          nobis temporibus nulla error reiciendis?
        </p>
      </section>

      <section>
        <h3>Location</h3>
        <p>Los Angeles, CA</p>
      </section>

      <section className="categories">
        <h3>Catagories</h3>
        <ul>
          <li>
            <Link href="#">Web Development</Link>
          </li>
          <li>
            <Link href="#">Graphic Design</Link>
          </li>
          <li>
            <Link href="#">Photography</Link>
          </li>
        </ul>
      </section>
      <section className="Social">
        <h3>Socials</h3>
        <div className="icon_container">
          <Link href="#">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </div>
      </section>
      <div className="map_container">
        <div className="overlay"></div>
        <Image className="map" src={MapPaceholder} alt="Map" />
      </div>
    </div>
  );
}
