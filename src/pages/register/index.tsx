import Base from "../../layouts/Base";

import Link from "next/link";

export default function Redister() {
  return (
    <Base>
      <div id="auth" className="body">
        <div className="login_card">
          <h1>Login</h1>
          <div className="input_field">
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input_field">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="input_field">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </div>
          <button>Log In</button>
          <div className="divider"></div>

          <Link href="/login">
            <p>Already have an Account?</p>
          </Link>
        </div>
      </div>
    </Base>
  );
}
