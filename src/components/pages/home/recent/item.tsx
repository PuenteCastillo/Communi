import Image from "next/image";

export default function Recent(props) {
  // map data to jsx

  return (
    <div className="col-md-6 col-lg-4">
      <a className="link_hover" href={props.link}>
        <div className="item">
          <Image src={props.image.src} alt={props.image.alt} />
          <div className="categories">
            {props.categories.map((category, index) => {
              return (
                <p className="cat" href={category.link}>
                  {category.name}
                </p>
              );
            })}
          </div>
          {/*  add title */}
          <h4> {props.title} </h4>
          {/*  add description */}
          <p> {props.description} </p>
          {/* // add owner */}
          <small> {props.owner} </small>
        </div>
      </a>
    </div>
  );
}
