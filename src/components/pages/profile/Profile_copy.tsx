import { useRouter } from "next/router";

export default function Profile_copy(props: any) {
  const router = useRouter();

  return (
    <section id="Profile_copy" className="profile_module">
      <h2> {props.title}</h2>
      <p>{props.copy}</p>
    </section>
  );
}
