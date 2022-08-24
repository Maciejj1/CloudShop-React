import React, { useState } from "react";
import "./Register.scss";
import { auth, db } from "../../config/Config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/logo2.png";
const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();
  const RegisterForm = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("UsersData")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            history("/login");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError);
    console.log("its works");
  };
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-container-logo">
          <img src={Logo} alt="Logo" className="register-container-logo-logo" />
          <h1 className="register-container-logo-text">CLOUDSHOP</h1>
        </div>

        <div className="register-container-items">
          <div className="register-container-items-inputs">
            <form
              autoComplete="off"
              onSubmit={RegisterForm}
              className="register-container-items-inputs-form"
            >
              <label htmlFor="name" />
              <input
                className="register-container-items-inputs-form-input"
                type="text"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email" />
              <input
                className="register-container-items-inputs-form-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" />
              <input
                className="register-container-items-inputs-form-input"
                type="password"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="register-container-items-inputs-form-button"
                type="submit"
              >
                <h2>Rejestruj</h2>
              </button>
              <h3 className="register-container-items-inputs-form-account">
                Masz konto?
              </h3>
              <Link
                to="/login"
                className="register-container-items-inputs-form-button"
              >
                <h2>Zaloguj się</h2>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
