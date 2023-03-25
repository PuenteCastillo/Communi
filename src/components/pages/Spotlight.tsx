import Image from "next/image";
import Placeholder from "../../Images/barber_placholder.jpg";
export default function Spotlight(props) {
  return (
    <section id="spotlight" className="container">
      <div className="row">
        <small>Spotlight</small>
        <div className="col-md-8">
          <div className="item service_card">
            {/* // img */}
            <Image
              className="service_card_img"
              src={Placeholder}
              alt="Random Image"
            />
            {/* // category */}
            <div className="categories">
              <a href="#"> Barber </a>
              <a href="#"> Stylest </a>
            </div>
            {/* // title */}
            <h2>
              The trick to getting more done is to have the freedom to roam
              around
            </h2>
            {/* // description */}
            <p>
              Vel lectus vel velit pellentesque dignissim nec id magna. Cras
              molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu
              venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam
              felis libero, congue quis ipsum et, lacinia maximus eros.
              Vestibulum ante ipsum primis in faucibus.
            </p>
            {/* // ednorsments */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="signUpCard">sdf</div>
        </div>
      </div>
    </section>
  );
}
