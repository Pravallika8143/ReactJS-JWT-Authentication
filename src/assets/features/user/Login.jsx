import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  var [user, setUser] = React.useState({
    username: "emilys",
    password: "emilyspass",
  });
  var navigate = useNavigate();

  function loginFn() {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...user,
      }),
      credentials: "include", // Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "FAILURE") {
          alert("Invalid credentials");
        } else {
          for (var k in data) {
            window.localStorage.setItem(k, data[k]);
          }
          navigate("/");
        }
      });
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      />
      <br />
      <input
        type="password"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <br />
      <button
        onClick={() => {
          loginFn();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;