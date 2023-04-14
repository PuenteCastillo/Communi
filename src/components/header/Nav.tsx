import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
// import ServiceNav from "./ServiceNav";
import GlobalNav from "./GlobalNav";

export default function MainNav(props: any) {
  // get session
  const { data: session, status } = useSession();

  // logout handler
  function LogoutHandler(event: any) {
    event.preventDefault();
    signOut({
      callbackUrl: "/login",
    });
  }

  // if (session) {
  //   return <GlobalNav />;
  // } else {
  //   return <GlobalNav />;
  // }
  return (
    <>
      <GlobalNav />
    </>
  );
}
