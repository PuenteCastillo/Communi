import Image from "next/image";
import { FC } from "react";

import Networking from "../../Images/icons/networking.png";
import Workflow from "../../Images/icons/workflow.png";
import Deadline from "../../Images/icons/deadline.png";
import Project from "../../Images/icons/project.png";

import Image_Placeholder from "../../Images/phone_placeholder.png";
import Image_Placeholder2 from "../../Images/phone_paceholder_two.png";
import Image_Placeholder3 from "../../Images/iphone_placeholder_three.png";

interface MoreInfoProps {}

const MoreInfo: FC<MoreInfoProps> = (props: any) => {
  return (
    <div id="MoreInfo" className="">
      <div className="content">
        <div className="container">
          <div className="title_row">
            <h2>Powerful features</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 order-1">
              <div className="content_boxes">
                <div className="nav nav-tabs">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <div className="left_container">
                      <Image src={Deadline} alt="Calender of events" />
                    </div>
                    <div className="right_container">
                      <h4> Build your profile</h4>
                      <p>
                        who you are, what you do, whats your availability all in
                        one place
                      </p>
                    </div>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <div className="left_container">
                      <Image src={Deadline} alt="Calender of events" />
                    </div>
                    <div className="right_container">
                      <h4> Build your profile</h4>
                      <p>
                        who you are, what you do, whats your availability all in
                        one place
                      </p>
                    </div>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    <div className="left_container">
                      <Image src={Deadline} alt="Calender of events" />
                    </div>
                    <div className="right_container">
                      <h4> Build your profile</h4>
                      <p>
                        who you are, what you do, whats your availability all in
                        one place
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-2">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <Image
                    className="FeaturedImage"
                    src={Image_Placeholder}
                    alt="Calender of events"
                    width={650}
                    height={650}
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <Image
                    className="FeaturedImage"
                    src={Image_Placeholder2}
                    alt="Calender of events"
                    width={650}
                    height={650}
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <Image
                    className="FeaturedImage"
                    src={Image_Placeholder3}
                    alt="Calender of events"
                    width={650}
                    height={650}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
