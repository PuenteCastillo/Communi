import Image from "next/image";
import profile_pic from "../../../Images/profile_pic.png";
import { useLayoutEffect } from "react";
import { useRouter } from "next/router";

export default function Profile_header(props: any) {
  const router = useRouter();

  // convert 1000 to 1k
  const convert = (num: number) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "k"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "m"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };

  let jobsConverted = convert(props.jobs);
  let endorsementsConverted = convert(props.endorsements);

  // on scroll add class to profile header
  useLayoutEffect(() => {
    const avatar_section = document.querySelector(".avatar_section");
    // check sroll position
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      // if scrollY > 50 add class
      if (scrollY > 30) {
        avatar_section?.classList.add("avatar_animate");
        // add sticky top class to profile header
        // if mobile
        if (window.innerWidth < 768) {
          avatar_section?.classList.add("sticky-top");
        }
      }
      // if scrollY < 50 remove class
      if (scrollY < 1) {
        avatar_section?.classList.remove("avatar_animate");
      }
    });
  }, []);

  return (
    <section
      className={`avatar_section ${
        router.pathname === "/profile" ? "" : "avatar_animate"
      }`}
    >
      <div className="title_row container">
        {/* Name  */}
        <h1 className="name">{props.name}</h1>
        {/* Profession */}
        <small className="title">{props.title}</small>
      </div>
      <div className="details row">
        {/* Endorsements */}
        <div className="col hide_animate">
          <div className="col-content">
            <h3> {jobsConverted}</h3>
            <small>Jobs</small>
          </div>
        </div>
        <div className="col image-container">
          <Image src={profile_pic} alt="profile_pic" className="profile_pic" />
        </div>
        <div className="col hide_animate">
          <div className="col-content">
            <h3> {endorsementsConverted}</h3>
            <small> Edorsments </small>
          </div>
        </div>
      </div>
    </section>
  );
}
