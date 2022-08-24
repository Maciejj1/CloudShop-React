import React, { useState } from "react";
import { auth } from "../../config/Config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import logo from "../Assets/logo2.png";
const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMsg("Zalogowano");
        setEmail("");
        setPassword("");
        setError("");
        history("/CloudShop");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        {successMsg && (
          <>
            <div className="succes-msg">{successMsg}</div>
            <br />
          </>
        )}
        <div className="login-container-logo">
          <img src={logo} alt="Logo" className="login-container-logo-logo" />
          <h1 className="login-container-logo-text">CLOUDSHOP</h1>
        </div>
        <div className="login-container-items">
          <div className="login-container-items-inputs">
            <form
              autoComplete="off"
              onSubmit={handleLogin}
              className="login-container-items-inputs-form"
            >
              <label htmlFor="email" />
              <input
                className="login-container-items-inputs-form-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" />
              <input
                className="login-container-items-inputs-form-input"
                type="password"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="login-container-items-inputs-form-button"
                type="submit"
              >
                <h2>Zaloguj się</h2>
              </button>
              <h3 className="login-container-items-inputs-form-account">
                Nie masz konta?
              </h3>

              <Link
                to="/register"
                className="login-container-items-inputs-form-button"
              >
                <h2>Rejestracja</h2>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
