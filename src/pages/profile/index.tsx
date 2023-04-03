import Image from "next/image";
import Base from "@/layouts/Base";
import PlaceholderImage from "../../Images/landscaping.jpg";
import PlaceholderImage_Two from "../../Images/pool_cleaner.jpg";
import PlaceholderImage_Three from "../../Images/barber_placholder.jpg";
import Profile_bio from "../../components/pages/profile/Profile_Bio";
import Service_item from "../../components/pages/profile/services/Services_item";

import ProfileLayout from "../../layouts/ProfileLayout";
import Profile_overview from "../../components/pages/profile/Profile_overview";

export default function ProfilePage() {
  return (
    <ProfileLayout {...data}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Profile_bio {...data} />
            <Profile_overview />
          </div>
          <div className="col-lg-6 ">
            <div className="row">
              <h2>Other Services </h2>
              <Service_item {...data.services[0]} />
              <div className="note">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit
                </p>
              </div>
              <section id="overview_gallery" className="container">
                <h2>Gallery</h2>
                <div className="row">
                  <div className="col-6 PR">
                    <Image
                      src="https://picsum.photos/800/800"
                      alt="placeholder"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="col-6 PR">
                    <div className="row">
                      <div className="col-12 PR top_row">
                        <Image
                          src="https://picsum.photos/800/820"
                          alt="placeholder"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 PR">
                        <Image
                          src="https://picsum.photos/800/830"
                          alt="placeholder"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="col-6 PR">
                        <div className="overlay">
                          <p>More..</p>
                        </div>
                        <Image
                          src="https://picsum.photos/800/840"
                          alt="placeholder"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Service_item {...data.services[1]} />
              <Service_item {...data.services[2]} />
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

const data = {
  name: "Richard Foley",
  title: "Software Engineer",
  bio: "I'm a 24 years old Embedded Systems Engineer currently working as a Freelance designer. I love to travel and share the great things I visit with you guys.",
  endorsements: 100,
  jobs: 8000,
  profile_pic:
    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1626851003/Portfolio/profile_pic.png",
  services: [
    {
      title: "Car Detail & Cleaning",
      image: PlaceholderImage,
    },
    {
      title: "Deep Cleaning",
      image: PlaceholderImage_Two,
    },
    {
      title: "Exterior Cleaning",
      image: PlaceholderImage_Three,
    },
  ],
};
