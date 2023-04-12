import Base from "../../layouts/Base";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Nav from "../../components/header/Nav";
import Link from "next/link";

export default function Login() {
  // get session , loading and status
  const { data: session, status, data: loading } = useSession();

  //inputs
  const emailInputRef: any = useRef();
  const passwordInputRef: any = useRef();
  const [error, setError] = useState("");
  // loadign state
  const [isLoading, setLoading] = useState(false);
  // router
  const router = useRouter();

  // submit logic
  async function submitHandler(event: any) {
    event.preventDefault();
    // loading
    setLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // check if email is valid
    if (!enteredEmail.includes("@")) {
      setError("Please enter a valid email!");
      return;
    }

    const result: any = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });
    // error handling
    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    router.replace("/portfolio");
  }

  // loading
  if (status === "authenticated") {
    // redirect to portfolio
    router.replace("/portfolio");
  }

  return (
    <Base>
      <Nav />
      <div id="auth" className="body">
        <div className="login_card">
          <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <div className="input_field">
              <label>Email</label>
              <input
                type="text"
                placeholder="User Name / Email"
                required
                ref={emailInputRef}
              />
            </div>
            <div className="input_field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                ref={passwordInputRef}
              />
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
            <div className="divider"></div>

            <Link href="/register">
              <p>Don't have an account?</p>
            </Link>
            {/* error  */}
            {error && (
              <div className="error_container">
                {" "}
                <p>{error}</p>{" "}
              </div>
            )}
          </form>
        </div>
      </div>
    </Base>
  );
}
