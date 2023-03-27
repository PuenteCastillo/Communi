import Image from "next/image";

//? props
// image: object
// categories: array
// title: string
// description: string

export default function Card(props) {
  // for each props.categories return a link
  const categories = props.categories.map((category) => {
    return <a href={category.link}>{category.name}</a>;
  });
  const object_classes = `item service_card size_${props.size}`;
  return (
    <div className={object_classes}>
      {/* // img */}
      {props.image ? (
        <Image
          className="service_card_img"
          src={props.image.src}
          alt={props.image.alt}
        />
      ) : (
        ""
      )}
      {/* // category */}
      <div className="categories">{categories}</div>
      {/* // title */}
      {/* if props.title exist */}
      {props.title ? <h2> {props.title} </h2> : ""}
      {/* // description */}
      {props.description ? <p>{props.description}</p> : ""}
      {/* // ednorsments */}
    </div>
  );
}
