import Base from "@/layouts/Base";
import Image from "next/image";
import profile_pic from "../../Images/profile_pic.png";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function ProfilePage() {
  useLayoutEffect(() => {
    // get width of cal_animate
    const cal_animate = document.querySelector(".cal_animate");
    const cal_animate_width: any = cal_animate?.clientWidth;
    // move name to the right of cal_animate using gspa
    const name = document.querySelector(".name");
    const title = document.querySelector(".title");
    const profile_pic = document.querySelector(".profile_pic");
    // get width of name
    const name_width: any = name?.clientWidth;
    const title_width: any = title?.clientWidth;
    let profile_pic_width: any = profile_pic?.clientWidth;
    profile_pic_width = profile_pic_width / 2;
    // subtract name_width from cal_animate_width
    const cal_animate_width_minus_name_width = cal_animate_width - name_width;
    const cal_animate_width_minus_title_width = cal_animate_width - title_width;
    const cal_animate_width_minus_profile_pic_width =
      cal_animate_width - profile_pic_width;

    // start the timeline
    const tl = gsap.timeline();
    tl.add("start")
      .to(name, { x: -cal_animate_width_minus_name_width / 2 }, "start")
      .to(title, { x: -cal_animate_width_minus_title_width / 2 }, "start")
      .to(
        profile_pic,
        {
          x: cal_animate_width_minus_profile_pic_width / 2,
          y: -105,
          transform: "scale(0.5)",
        },
        "start"
      )
      .to(
        ".hide_animate",
        {
          duration: 0.3,
          opacity: 0,
          // stagger: 0.3,
        },
        "start"
      )
      .to(".bio", { duration: 0.5, opacity: 0, y: -50 }, "start")
      .to(
        ".cal_animate, #Profile_header",
        { duration: 0.5, height: 80 },
        "start"
      )
      // speed up the timeline
      .timeScale(1.5);
    // set animating to false when timeline is complete

    // pause the timeline on load
    tl.pause();
    // when scrolls down trigger the timeline

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      // run only on mobile
      if (window.innerWidth < 768) {
        // add sticky top class to profile header
        const profile_header = document.querySelector("#Profile_header");
        // add class
        profile_header?.classList.add("sticky-top");

        // when scrolling down and sroll is > 50 animate
        if (scrollY > 30) {
          tl.play();
        }
        // when scrolling up and scroll is < 50 reverse
        if (scrollY < 1) {
          // wait for 0.5 seconds before reversing
          setTimeout(() => {
            tl.reverse();
          }, 800);
        }
      }
    });
  }, []);

  return (
    <Base>
      <section id="Profile_header" className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-xl-4 cal_animate">
            <div className="title_row">
              {/* Name  */}
              <h1 className="name">Richard Foley</h1>
              {/* Profession */}
              <small className="title">Software Engineer</small>
            </div>
            <div className="details row">
              {/* Endorsements */}
              <div className="col hide_animate">
                <div className="col-content">
                  <h3> 8k </h3>
                  <small>Jobs</small>
                </div>
              </div>
              <div className="col">
                <Image
                  src={profile_pic}
                  alt="profile_pic"
                  className="profile_pic"
                />
              </div>
              <div className="col hide_animate">
                <div className="col-content">
                  <h3> 100 </h3>
                  <small> Edorsments </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="bio">
              <h2> Bio</h2>
              <p>
                I'm a 24 years old Embedded Systems Engineer currently working
                as a Freelance designer. I love to travel and share the great
                things I visit with you guys.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="spacer">
        <h1>asdfk d</h1>
        <h1>asdfk d</h1>
        <h1>asdfk d</h1>
      </div>
    </Base>
  );
}
