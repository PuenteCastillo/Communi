import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function ServiceNav(props: any) {
  // get session
  const { data: session, status } = useSession();

  function logoutHandler(event: any) {
    event.preventDefault();
    signOut({
      callbackUrl: "/login",
    });
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Communi
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Local Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn" onClick={logoutHandler}>
              Log Out
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
