import Image from "next/image";
import { FC } from "react";

import Barber from "../../Images/Geometric/Barber.png";
import Cleaners from "../../Images/Geometric/Cleaners.png";
import Mechamic from "../../Images/Geometric/Mechanic.png";

interface GoalsProps {}

const Goals: FC<GoalsProps> = (props: any) => {
  return (
    <section id="Goals" className="">
      <div className="container">
        <div className="title_row">{/* <h2>Our Goals</h2> */}</div>
        <div className="row">
          <div className="col-lg-8 ">
            {/* create a Cycling image carousel  */}

            <div
              id="goal_carousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active " data-bs-interval="3000">
                  {/* <h3>Barbers</h3> */}
                  <Image src={Barber} alt="Barber" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  {/* <h3>Cleaners</h3> */}
                  <Image src={Cleaners} alt="Cleaners" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  {/* <h3>Mechanics</h3> */}
                  <Image src={Mechamic} alt="Mechanic" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content">
              <div className="child">
                <h2>Who's this for?</h2>
                <p>
                  Cummuni is built for the everyday worker. Whether you're a
                  barber, cleaner, mechanic, or any other service provider,
                  Cummuni is here to help you organize your schedule and connect
                  with your customers.
                </p>
                <a className="theme-btn " href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
