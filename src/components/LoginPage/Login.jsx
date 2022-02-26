import React, { useState } from "react";
import { auth } from "../../config/Config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMsg("Zalogowano");
        setEmail("");
        setPassword("");
        setError("");
        setSuccessMsg("");
        history("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="login-container">
      {successMsg && (
        <>
          <div className="success-msg">{successMsg}</div>
          <br></br>
        </>
      )}
      <h2>Logowanie</h2>
      <br />
      <form autoComplete="=off" className="form-group" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor="password">Hasło</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">
          Zaloguj
        </button>
      </form>
      {error && <span className="error-msg">{error}</span>}
      <br />
      <span>
        Nie masz konta? Zarejestruj się
        <Link to="/login/register">Tutaj</Link>
      </span>
    </div>
  );
};

export default Login;
