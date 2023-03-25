import Image from "next/image";
import SearchIcon from "../../Images/icons/search_icon.png";

export default function HomeHeader() {
  return (
    <section className="home_header">
      {/* <Image className="background_img" src={HeroImage} alt="LA Sky Line" /> */}
      <div className="parent">
        <div className="child">
          <h1>
            Local services, <br /> at your fingertips.
          </h1>
          <div className="inputcontainer">
            <div className="search_child">
              <input type="text" placeholder="Search for a service" />
              <button>
                <Image src={SearchIcon} alt="Search Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
