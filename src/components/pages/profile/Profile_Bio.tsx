export default function Profile_Bio(props: any) {
  return (
    <section id="Bio_profile" className="">
      <div className="container">
        <h2> Bio</h2>
        <p>{props.bio}</p>
      </div>
    </section>
  );
}
