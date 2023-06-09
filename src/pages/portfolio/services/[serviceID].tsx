import ProfileLayout from "@/layouts/ProfileLayout";
import PlaceholderImage from "../../../Images/landscaping.jpg";
import PlaceholderImage_Two from "../../../Images/pool_cleaner.jpg";
import PlaceholderImage_Three from "../../../Images/barber_placholder.jpg";
import Single_service from "@/components/pages/profile/services/Single_service";

export default function Service(props: any) {
  return (
    <ProfileLayout {...data}>
      <Single_service {...data} />
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
