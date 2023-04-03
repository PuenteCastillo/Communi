import Image from "next/image";
import { useRouter } from "next/router";

export default function Profile_gallery(props: any) {
  const router = useRouter();

  return (
    <section id="overview_gallery" className="profile_module">
      <h2>Gallery</h2>
      <div className="row">
        <div className="col-6 PR">
          <Image
            src="https://picsum.photos/800/800"
            alt="placeholder"
            width={300}
            height={300}
          />
        </div>
        <div className="col-6 PR">
          <div className="row">
            <div className="col-12 PR top_row">
              <Image
                src="https://picsum.photos/800/820"
                alt="placeholder"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 PR">
              <Image
                src="https://picsum.photos/800/830"
                alt="placeholder"
                width={300}
                height={300}
              />
            </div>
            <div className="col-6 PR">
              <div className="overlay">
                <p>More..</p>
              </div>
              <Image
                src="https://picsum.photos/800/840"
                alt="placeholder"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
