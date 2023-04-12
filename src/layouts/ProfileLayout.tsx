import Base from "@/layouts/Base";
import Profile_header from "@/components/pages/profile/Profile_header";
import Profile_header_desktop from "@/components/pages/profile/Profile_header_desktop";
import Profile_Bio from "@/components/pages/profile/Profile_Bio";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainNav from "@/components/header/Nav";

export default function ProfileLayout(props: any) {
  // get the current route
  const router = useRouter();

  // get viewport
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    // update the width on resize
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  // create header component
  function Header() {
    // if width is less than 768px then return the mobile header
    if (width < 768) {
      return (
        <>
          <Profile_header {...props} />
          <div className="container bio_container">
            <Profile_Bio {...props} />
          </div>
        </>
      );
    } else {
      // otherwise return the desktop header
      return <Profile_header_desktop />;
    }
  }

  return (
    <Base>
      <MainNav />
      <Header />

      <section id="Tabs_profile" className="sticky-top">
        <div className="container">
          <div className="tabs">
            <ul>
              <li className={router.pathname === "/profile" ? "active" : ""}>
                <Link href="/profile">Overview</Link>
              </li>
              <li
                className={
                  // if the current route is /profile/services or /profile/services/[id] then add the active class
                  router.pathname === "/profile/services" ||
                  router.pathname === "/profile/services/[serviceID]"
                    ? "active"
                    : ""
                }
              >
                <Link href="/profile/services">Services</Link>
              </li>
              <li>
                <Link href="/profile">Highlights</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div id="profile_content" className="">
        {props.children}
      </div>
    </Base>
  );
}
