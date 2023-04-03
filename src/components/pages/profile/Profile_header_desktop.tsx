import Image from "next/image";
import profile_pic from "../../../Images/profile_pic.png";
import { useLayoutEffect } from "react";
import { useRouter } from "next/router";

export default function Profile_header(props: any) {
  return (
    <section id="Desktop_Profile_header">
      <div className="container">
        <div className="hero_image">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="placeholder"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="user_details">
          <div className="row details_row">
            <div className="col-3 ">
              <div className="col-content">
                <h3> 80k</h3>
                <small>Jobs</small>
              </div>
            </div>
            <div className="col-6">
              <div className="profile_pic">
                <Image
                  src="https://picsum.photos/300/300"
                  alt="placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="col-content">
                <h3> 80k</h3>
                <small>Jobs</small>
              </div>
            </div>
          </div>
          <div className="title_row">
            <h1> Joe shmoe</h1>
            <small>Car Detailer</small>
          </div>
        </div>
      </div>
    </section>
  );
}
