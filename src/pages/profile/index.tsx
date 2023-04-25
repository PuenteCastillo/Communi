import { useEffect, useState } from "react";
import ProfileLayout from "@/layouts/ProfileLayout";
import ProfileCol from "@/layouts/ProfileCol";

export default function ProfilePage(props: any) {
  return (
    <ProfileCol {...data}>
      <h1> hello world </h1>
    </ProfileCol>
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
