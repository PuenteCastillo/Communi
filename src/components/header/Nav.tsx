import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import ServiceNav from "./serviceNav";
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
    // redirect to home
    // window.location.href = "/login";
  }
  if (session) {
    return <ServiceNav />;
  } else {
    return <GlobalNav />;
  }
}
