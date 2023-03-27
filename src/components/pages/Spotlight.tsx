import Placeholder from "../../Images/barber_placholder.jpg";
import Card from "./spotlight/Card";
import Sign_up from "./spotlight/Sign_up";

const Placeholder_img = {
  src: Placeholder,
  alt: "Random Image",
};
const cat = [
  {
    name: "Barber",
    link: "#",
  },
  {
    name: "Stylest",
    link: "#",
  },
];

export default function Spotlight(props) {
  return (
    <section id="spotlight" className="container">
      <div className="row">
        <small className="mb-3">Spotlight</small>
        <div className="col-md-12 col-lg-8">
          <Card
            title="The trick to getting more done is to have the freedom to roam around"
            description="Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus."
            image={Placeholder_img}
            categories={cat}
            size="large"
          />
        </div>
        <div className="col-md-12 col-lg-4">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-12">
              <Sign_up />
            </div>
            <div className="col-12 col-md-6 col-lg-12">
              <Card
                title="The trick to getting more done is to "
                //   description="Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus."
                image={Placeholder_img}
                categories={cat}
                size="small"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-12">
              <Card
                title="The trick to getting more done is to "
                //   description="Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus."
                image={Placeholder_img}
                categories={cat}
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
