import React, { useRef, useState } from "react";

import Base from "../../layouts/Base";
import Link from "next/link";

// create a new user
async function createUser(email: string, password: string) {
  // send a POST request to /api/auth/signup
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // get data from response
  const data = await response.json();

  if (!response.ok) {
    // if error, show error message
    throw new Error(data.message || "Something went wrong!");
  }

  // if success, return data
  return data;
}

export default function Redister() {
  //inputs
  const emailInputRef: any = useRef();
  const passwordInputRef: any = useRef();
  const confirmPasswordInputRef: any = useRef();
  const [error, setError] = useState("");

  async function submitHandler(event: any) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    //? validation
    // check if passwords match
    if (enteredPassword !== enteredConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // check if email is valid
    if (!enteredEmail.includes("@")) {
      alert("Please enter a valid email!");
      return;
    }
    // check if password is valid
    if (enteredPassword.length < 7) {
      alert("Password must be at least 7 characters!");
      return;
    }
    console.log("email : ", enteredEmail);
    // create user
    try {
      const result = await createUser(enteredEmail, enteredPassword);
      console.log("results : ", result);
      console.log("email asd : ", enteredEmail);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  }

  return (
    <Base>
      <div id="auth" className="body">
        <div className="login_card">
          <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <div className="input_field">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
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
            <div className="input_field">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                required
                ref={confirmPasswordInputRef}
              />
            </div>
            {/*  submit btn  */}
            <button type="submit">Join Community </button>
            <div className="divider"></div>

            <Link href="/login">
              <p>Already have an Account?</p>
            </Link>
          </form>
          {/* log errors  */}
          {error && (
            <div className="error_container">
              {" "}
              <p>{error}</p>{" "}
            </div>
          )}
        </div>
      </div>
    </Base>
  );
}
