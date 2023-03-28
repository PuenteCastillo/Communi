import Image from "next/image";
import Placeholder from "../../../Images/barber_placholder.jpg";
import Features_item from "./featured_posts/Features_item";
import PlaceHolder_One from "../../../Images/pool_cleaner.jpg";
import PlaceHolder_Two from "../../../Images/landscaping.jpg";
import PlaceHolder_Three from "../../../Images/house_cleaner.jpg";

// dumy data
const data = [
  {
    title: "Crystal clear pool paradise.",
    image: {
      src: PlaceHolder_One,
      alt: "Placeholder",
    },
    owner: "Joe Shmoe",
    link: "#",
  },
  {
    title: "Clean home, clear mind.",
    image: {
      src: PlaceHolder_Three,
      alt: "Placeholder",
    },
    owner: "Joe Shmoe",
    link: "#",
  },
  {
    title: "Transforming lawns, creating beauty.",
    image: {
      src: PlaceHolder_Two,
      alt: "Placeholder",
    },
    owner: "Joe Shmoe",
    link: "#",
  },
];

export default function Featured_Posts(props: any) {
  // map data to Features_item
  const features = data.map((item, index) => {
    return <Features_item key={index} {...item} />;
  });

  return (
    <section id="featured-posts" className="container">
      <small>Featured</small>
      <div className="content">
        <div className="title_row">
          <small> House Essentials </small>
          <h2>
            LA living <br /> made easy.
          </h2>
        </div>
        <div className="row featured_row justify-content-center">
          {features}
        </div>
      </div>
    </section>
  );
}
