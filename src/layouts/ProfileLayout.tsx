import Base from "@/layouts/Base";
import Profile_header from "@/components/pages/profile/Profile_header";
import Profile_Bio from "@/components/pages/profile/Profile_Bio";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProfileLayout(props: any) {
  // get the current route
  const router = useRouter();

  return (
    <Base>
      <Profile_header {...props} />
      <Profile_Bio {...props} />
      <section id="Tabs_profile" className="sticky-top">
        <div className="container">
          <div className="tabs">
            <ul>
              <li className={router.pathname === "/profile" ? "active" : ""}>
                <Link href="/profile">Overview</Link>
              </li>
              <li
                className={
                  router.pathname === "/profile/services" ? "active" : ""
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
      <div id="profile_content" className="container ">
        {props.children}
      </div>
    </Base>
  );
}
