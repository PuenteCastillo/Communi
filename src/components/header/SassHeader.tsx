import Image from "next/image";
import Hero_Image from "../../Images/hero_shot.png";
export default function SaasHeader() {
  return (
    <section id="SaasHeader">
      <div className="background-container">
        <div className="bg-shape"></div>
      </div>
      <div className="container titleHeader">
        <div className="row title-row">
          <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-md-1 order-lg-1">
            <div className="header-content">
              <div className="child">
                <h1>Your Ultimate Business Management Solution</h1>
                <p>
                  The ultimate business buddy. Simplify your schedule and
                  connect with customers hassle-free. Get organized with us
                  today!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 order-0  order-md-0 order-lg-2">
            <Image
              className="Featured_img"
              src={Hero_Image}
              alt="Logo"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
