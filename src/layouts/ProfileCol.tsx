import { useEffect, useState } from "react";
import Base from "@/layouts/Base";
import Image from "next/image";
import Link from "next/link";
import LeftSidebar from "./mods/LeftSidebar";
import RightSidebar from "./mods/RightSidebar";
import Content from "./mods/Content";
import $ from "jquery";

import MainNav from "@/components/header/Nav";

export default function ProfileLayout(props: any) {
  // get viewport
  const [width, setWidth] = useState(0);

  // stick left side on scroll
  useEffect(() => {
    setWidth(window.innerWidth);

    // stick fixed-data on scroll once it reaches the top of the page
    const fixedData = $(".fixed-data");
    const fixedDataOffset = fixedData?.offset();
    const fixedDataTop: any = fixedDataOffset?.top;
    const fixedDataHeight = fixedData?.height();

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= fixedDataTop) {
        fixedData?.addClass("fixed");
        // fixedData?.removeClass("absolute");
      } else {
        fixedData?.removeClass("fixed");
        // fixedData?.addClass("absolute");
      }
    };

    // only run on desktop
    if (window.innerWidth > 768) {
      window.addEventListener("scroll", handleScroll);
    }

    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className="shell_parent">
    //   <div className="shell">
    <Base>
      <div id="profileLayout" className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 PR">
            <div className="fixed-data">
              <LeftSidebar />
            </div>
          </div>
          <div className="col-lg-7">
            <Content />
          </div>
          <div className="col-lg-3 PR">
            <div className="fixed-data">
              <RightSidebar />
              {/* <h1> msdjfklj skd</h1> */}
            </div>
          </div>
        </div>
      </div>
    </Base>
    //   </div>
    // </div>
  );
}
