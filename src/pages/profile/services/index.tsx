import Base from "@/layouts/Base";
import ProfileLayout from "@/layouts/ProfileLayout";
import Profile_header from "@/components/pages/profile/Profile_header";
import Profile_Bio from "@/components/pages/profile/Profile_Bio";
import Profile_services from "@/components/pages/profile/Profile_services";
import PlaceholderImage from "../../../Images/landscaping.jpg";
import PlaceholderImage_Two from "../../../Images/pool_cleaner.jpg";
import PlaceholderImage_Three from "../../../Images/barber_placholder.jpg";
import Link from "next/link";

export default function ProfilePage(props: any) {
  return (
    <ProfileLayout {...data}>
      <Profile_services {...data} />
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
