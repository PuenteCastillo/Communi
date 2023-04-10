import Base from "../../layouts/Base";

import Link from "next/link";

export default function Login() {
  return (
    <Base>
      <div id="auth" className="body">
        <div className="login_card">
          <h1>Login</h1>
          <div className="input_field">
            <label>Email</label>
            <input type="text" placeholder="User Name / Email" />
          </div>
          <div className="input_field">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button>Log In</button>
          <div className="divider"></div>

          <Link href="/register">
            <p>Don't have an account?</p>
          </Link>
        </div>
      </div>
    </Base>
  );
}
