import React, { useState } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email address and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={(e) => setEmail(e.target.value)}
          label="email"
          name="email"
          value={email}
          type="email"
          required
        />
        <FormInput
          handleChange={(e) => setPassword(e.target.value)}
          label="password"
          name="password"
          value={password}
          type="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
