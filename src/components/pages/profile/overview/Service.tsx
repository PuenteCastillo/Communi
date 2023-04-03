import Image from "next/image";

export default function Service(props: any) {
  return (
    <div className="service">
      <Image src={props.img.url} alt={props.img.alt} width={116} height={116} />
      <p>{props.title}</p>
    </div>
  );
}
