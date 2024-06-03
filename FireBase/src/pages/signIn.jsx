import React, { useCallback, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./index.css";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email || !password) {
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .catch(() => {
          console.log(e);
        });
    },
    [email, password]
  );

  return (
    <div className="signin">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="submitin" value={"signIn"} />
      </form>
      <Link to="/signUp">create account</Link>
    </div>
  );
}

export default SignIn;
