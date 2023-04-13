import Image from "next/image";
import { FC } from "react";

import Networking from "../../Images/icons/networking.png";
import Workflow from "../../Images/icons/workflow.png";
import Deadline from "../../Images/icons/deadline.png";
import Project from "../../Images/icons/project.png";

interface howItWorksProps {}

const howItWorks: FC<howItWorksProps> = (props: any) => {
  const content_items = content.items.map((item: any, index: number) => {
    return (
      <div className=" col-12 col-md-6  col-lg-3">
        <div className="content_item">
          <div className="content_item_image">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={500}
              height={500}
            />
          </div>
          <div className="content_item_text">
            <h4>{item.title} </h4>
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="HowItWorks" className="">
      <div className="container">
        <div className="title_row">
          <h2>How It Works</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className="content row">{content_items}</div>
      </div>
    </div>
  );
};

export default howItWorks;

const content = {
  title: "How It Works",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quas minima architecto necessitatibus saepe explicabo.",
  items: [
    {
      image: {
        src: Deadline,
        alt: "Calender of events",
      },
      title: "Organize Your Calendar",
      text: "Build your schedule with ease and keep track of your appointments.",
    },
    {
      image: {
        src: Project,
        alt: "Project management",
      },
      title: "Create Services",
      text: "Services are the heart of your business. Create them in minutes.",
    },
    {
      image: {
        src: Networking,
        alt: "Networking",
      },
      title: "Promote Your Business",
      text: "Get more customers and grow your business with our marketing tools. ",
    },
    {
      image: {
        src: Workflow,
        alt: "Workflow",
      },
      title: "Automate your schedule",
      text: "Allow your customers to book appointments online.",
    },
  ],
};
