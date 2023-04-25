import Image from "next/image";
import Link from "next/link";

export default function LeftSidebar(props: any) {
  return (
    <div className="profile_left_sidebar">
      <div className="header">
        {/* image */}
        <div className="avatar_container">
          <Image
            src="https://picsum.photos/500/550"
            alt="profile picture"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="title_container">
        {/* name */}
        <h1> José Puente </h1>
        {/* title */}
        <h2> Developer </h2>
      </div>
      <div className="profile-Nav">
        {/*  Nav Links */}
        <ul>
          <li>
            <Link href="/profile" className="active">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/profile/services">Services</Link>
          </li>
          <li>
            <Link href="/profile/reviews">Reviews</Link>
          </li>
          <li>
            <Link href="/profile/jobs">Jobs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
