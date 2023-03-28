import Image from "next/image";
// import Placeholder from "../../../../Images/barber_placholder.jpg";

//? props
// title: string
// image: Object
// - src: string
// - alt: string
// owner: sting
// link: string

export default function Features_item(props) {
  // reduce props.title to 20 characters
  const title =
    props.title.length > 35 ? props.title.slice(0, 35) + "..." : props.title;

  return (
    <div className="col-md-6 col-lg-4">
      <a className="link_hover" href={props.link}>
        <div className="item">
          {/* if Image exist  */}
          {props.image && <Image src={props.image.src} alt={props.image.alt} />}
          {/*  if title exist  */}
          {props.title && <h4>{title}</h4>}
          {/*  if owner exist  */}
          {props.owner && <small>{props.owner}</small>}
        </div>
      </a>
    </div>
  );
}
