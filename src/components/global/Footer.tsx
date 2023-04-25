import Image from "next/image";
import Logo from "../../Images/logo.png";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Footer(props: any) {
  // const { data: session, status } = useSession();

  // check if on login page or register page
  const router = useRouter();
  const loginPage = router.pathname === "/login";
  const registerPage = router.pathname === "/register";

  // // top section
  // const topSection = () => {
  //   if (session || loginPage || registerPage) {
  //     return (
  //       <div className="title_row row">
  //         <div className="col-md-12 align-center">
  //           <Image className="logo" src={Logo} alt="Communi Logo" />
  //           <br />
  //           <small>
  //             Created for small buisnesses, <br />
  //             funded by the community.
  //           </small>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="title_row row">
  //         <div className="col-md-6">
  //           <Image className="logo" src={Logo} alt="Communi Logo" />
  //           <br />
  //           <small>
  //             Created for small buisnesses, <br />
  //             funded by the community.
  //           </small>
  //         </div>
  //         <div className=" col-md-6 prostion-relative">
  //           <div className="content">
  //             {props.logedIn ? (
  //               ""
  //             ) : (
  //               <>
  //                 <a href="/register" className="theme-btn">
  //                   Join the community
  //                 </a>
  //                 <br />
  //                 <p> Support local Services </p>
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // };

  return (
    <section id="footer" className="container">
      {/* {topSection()} */}
      <div className="footer_links row">
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5>Socials</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5> About </h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5> Features </h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5>Memberships</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5>Resources</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-2 link-col">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copywrite">
        <p>
          &copy; 2023 Communi. All rights reserved.
          <br />{" "}
          <span className="memory ">
            {" "}
            In loving memory of Octaviano Jacobo.
          </span>
        </p>
      </div>
    </section>
  );
}
