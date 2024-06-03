import React, { useCallback, useState } from "react";
import "./index.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email || !password) {
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
      
        .catch((e) => {
          console.log(e);
        });
    },
    [email, password]
  );

  return (
    <div className="signUp">
      <h1>Create new Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="submit" value={"sign up"} />
      </form>
      <Link to="/signIn">already have an account</Link>
    </div>
  );
}

export default SignUp;
