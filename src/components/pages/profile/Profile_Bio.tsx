import { useRouter } from "next/router";

export default function Profile_Bio(props: any) {
  const router = useRouter();

  return (
    <section id="Bio_profile" className="profile_module">
      <h2> Bio</h2>
      <p>{props.bio}</p>
    </section>
  );
}
