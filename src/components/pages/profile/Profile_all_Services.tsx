import Image from "next/image";

export default function Profile_overview(props: any) {
  // loop through data and create a service component for each
  let services = dummy_data.map((service: any) => {
    return (
      <div className="service profile_module">
        <Image
          src={service.img.url}
          alt={service.img.alt}
          width={116}
          height={116}
        />
        <p>{service.title}</p>
      </div>
    );
  });

  return (
    <>
      <section id="profile_overview" className="profile_module">
        {/* Services */}
        <h2>All Services </h2>
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
