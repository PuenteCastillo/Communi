import Image from "next/image";
import Logo from "../../images/logo.png";

export default function Footer(props: any) {
  return (
    <section id="footer" className="container">
      <div className="title_row row">
        <div className="col-md-6">
          <Image className="logo" src={Logo} alt="Communi Logo" />
          <br />
          <small>
            Created for small buisnesses, <br />
            funded by the community.
          </small>
        </div>
        <div className=" col-md-6">
          <div className="content">
            <a href="#" className="theme-btn">
              Join the community
            </a>
            <br />
            <p> Support local Services </p>
          </div>
        </div>
      </div>
      <div className="footer_links row">
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5>Socials</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5> About </h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5> Features </h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5>Memberships</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5>Resources</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copywrite">
        <p>
          &copy; 2023 Communi. All rights reserved.
          <br />{" "}
          <span className="memory ">
            {" "}
            In loving memory of Octaviano Jacobo.
          </span>
        </p>
      </div>
    </section>
  );
}
