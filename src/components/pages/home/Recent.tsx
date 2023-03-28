import Image from "next/image";
import Placeholder from "../../../Images/barber_placholder.jpg";
import Item from "./recent/item";

export default function Recent(props: any) {
  return (
    <section id="Recent" className="container">
      <small>Previous Posts</small>
      <div className="row content_row">
        {/* // add items */}
        {data.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </div>
    </section>
  );
}

// ------------------------------------------------------

//? dumy data add 6 objects
const data = [
  {
    title:
      "The trick to getting more done is to have the freedom to roam around",
    owner: "John Doe",
    description:
      "Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus.",
    image: {
      src: Placeholder,
      alt: "Random Image",
    },
    categories: [
      {
        name: "Barber",
        link: "#",
      },
      {
        name: "Stylest",
        link: "#",
      },
    ],
    link: "#",
  },
  {
    title:
      "The trick to getting more done is to have the freedom to roam around",
    owner: "John Doe",
    description:
      "Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus.",
    image: {
      src: Placeholder,
      alt: "Random Image",
    },
    categories: [
      {
        name: "Barber",
        link: "#",
      },
      {
        name: "Stylest",
        link: "#",
      },
    ],
    link: "#",
  },
  {
    title:
      "The trick to getting more done is to have the freedom to roam around",
    owner: "John Doe",
    description:
      "Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus.",
    image: {
      src: Placeholder,
      alt: "Random Image",
    },
    categories: [
      {
        name: "Barber",
        link: "#",
      },
      {
        name: "Stylest",
        link: "#",
      },
    ],
    link: "#",
  },
  {
    title:
      "The trick to getting more done is to have the freedom to roam around",
    owner: "John Doe",
    description:
      "Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus.",
    image: {
      src: Placeholder,
      alt: "Random Image",
    },
    categories: [
      {
        name: "Barber",
        link: "#",
      },
      {
        name: "Stylest",
        link: "#",
      },
    ],
    link: "#",
  },
  {
    title:
      "The trick to getting more done is to have the freedom to roam around",
    owner: "John Doe",
    description:
      "Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus.",
    image: {
      src: Placeholder,
      alt: "Random Image",
    },
    categories: [
      {
        name: "Barber",
        link: "#",
      },
      {
        name: "Stylest",
        link: "#",
      },
    ],
    link: "#",
  },
  {
    title:
      "The trick to getting more done is to have the freedom to roam around",
    owner: "John Doe",
    description:
      "Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus.",
    image: {
      src: Placeholder,
      alt: "Random Image",
    },
    categories: [
      {
        name: "Barber",
        link: "#",
      },
      {
        name: "Stylest",
        link: "#",
      },
    ],
    link: "#",
  },
];
