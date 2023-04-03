import Service from "./overview/Service";

export default function Profile_overview(props: any) {
  // loop through data and create a service component for each
  let services = dummy_data.map((service: any) => {
    return <Service {...service} />;
  });

  return (
    <>
      <section id="profile_overview" className="container">
        {/* Services */}
        <h2>Services </h2>
        <div id="overview_Services" className="row">
          {services}
        </div>
      </section>
    </>
  );
}

// img object
let dummy_data = [
  {
    img: {
      url: "https://picsum.photos/300/300",
      alt: "placeholder",
    },
    title: "Car Detail & Cleaning",
    link: "/services/car-detail",
  },
  {
    img: {
      url: "https://picsum.photos/300/310",
      alt: "placeholder",
    },
    title: "Deep Clean & Cleaning",
    link: "/services/car-detail",
  },
  {
    img: {
      url: "https://picsum.photos/300/320",
      alt: "placeholder",
    },
    title: "Car Detail & Cleaning",
    link: "/services/car-detail",
  },
  {
    img: {
      url: "https://picsum.photos/300/330",
      alt: "placeholder",
    },
    title: "Car Detail & Cleaning",
    link: "/services/car-detail",
  },
  {
    img: {
      url: "https://picsum.photos/300/300",
      alt: "placeholder",
    },
    title: "Car Detail & Cleaning",
    link: "/services/car-detail",
  },
  {
    img: {
      url: "https://picsum.photos/300/310",
      alt: "placeholder",
    },
    title: "Deep Clean & Cleaning",
    link: "/services/car-detail",
  },
  {
    img: {
      url: "https://picsum.photos/300/320",
      alt: "placeholder",
    },
    title: "Car Detail & Cleaning",
    link: "/services/car-detail",
  },
  {
    img: {
      url: "https://picsum.photos/300/330",
      alt: "placeholder",
    },
    title: "Car Detail & Cleaning",
    link: "/services/car-detail",
  },
];
