import { useEffect, useState } from "react";
import ProfileLayout from "@/layouts/ProfileLayout";
import Profile_Bio from "@/components/pages/profile/Profile_Bio";
import Profile_gallery from "@/components/pages/profile/Profile_gallery";
import Service_item from "@/components/pages/profile/services/Services_item";
import Profile_all_Services from "@/components/pages/profile/Profile_all_Services";
import Profile_copy from "@/components/pages/profile/Profile_copy";

// import { getSession } from "next-auth/react";

// // get server side props
// export async function getServerSideProps(context: any) {
//   // get session
//   const session = await getSession(context);

//   // if no session
//   if (!session) {
//     // redirect to login
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   // return session
//   return {
//     props: {
//       session,
//     },
//   };
// }

export default function ProfilePage(props: any) {
  // get viewport
  const [width, setWidth] = useState(0);

  // stick left side on scroll
  useEffect(() => {
    setWidth(window.innerWidth);

    // stick fixed-data on scroll once it reaches the top of the page
    const fixedData = document.querySelector(".fixed-data");
    const fixedDataTop: any = fixedData?.getBoundingClientRect().top;
    const fixedDataHeight = fixedData?.getBoundingClientRect().height;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= fixedDataTop) {
        fixedData?.classList.add("fixed");
        fixedData?.classList.remove("absolute");
      } else {
        fixedData?.classList.remove("fixed");
        fixedData?.classList.add("absolute");
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

  function DesktopRenderBio(): any {
    // if width is less than 768px then return the mobile header
    if (width > 768) {
      return <Profile_Bio {...data} />;
    }
  }
  function DektoprenderService(): any {
    if (width > 992) {
      return <Profile_all_Services {...data} />;
    }
  }
  function MobileRenderService(): any {
    if (width < 992) {
      return <Profile_all_Services {...data} />;
    }
  }

  return (
    <ProfileLayout {...data}>
      <div id="portfolio" className="container">
        <div className="row">
          <div className="col-lg-6 PR">
            {/* fixed Modules */}
            <div className="fixed-data">
              <DesktopRenderBio />
              <MobileRenderService />
              <Profile_gallery />
            </div>
          </div>
          <div className="col-lg-6">
            {/* flexable modules */}
            <DektoprenderService />
            <h2>Men's styling </h2>
            <Service_item {...data.services[0]} />
            <Profile_copy
              title="Womans Styling"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
            <Service_item {...data.services[1]} />
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
      image: "https://picsum.photos/800/820",
    },
    {
      title: "Deep Cleaning",
      image: "https://picsum.photos/800/830",
    },
    {
      title: "Exterior Cleaning",
      image: "https://picsum.photos/800/830",
    },
  ],
};
