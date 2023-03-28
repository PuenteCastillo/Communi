import Image from "next/image";

//? props
// image: object
// categories: array
// title: string
// description: string

//todo make whole card clickable

export default function Card(props) {
  // for each props.categories return a link
  const categories = props.categories.map((category) => {
    return (
      <p className="cat" href={category.link}>
        {category.name}
      </p>
    );
  });
  const object_classes = `item service_card size_${props.size}`;
  return (
    <a className="Item_link" href={props.link}>
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
    </a>
  );
}
