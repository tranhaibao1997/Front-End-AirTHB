import React from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { StoreContext } from "../../ThemeContext";
import { Redirect } from "react-router-dom";

export default function Login() {
  let [formData, setFormData] = React.useState(null);
  let [email, setEmail] = React.useState(null);
  let [password, setPassword] = React.useState(null);
 

  async function login(e) {
    e.preventDefault();
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let body = JSON.stringify({ email: email, password: password });
    let res = await Axios.post(
      "https://airthb-group6.herokuapp.com/auth/login",
      body,
      config
    );
    console.log(res.data.data.token);
    localStorage.setItem("token", res.data.data.token);
  }
 

  if (localStorage.getItem("token")) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form
            className="login100-form validate-form"
            onSubmit={(e) => login(e)}
          >
            <span className="login100-form-title p-b-43">
              Login to continue
            </span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input100" />
              <span className="label-input100">Email</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input100" />
              <span className="label-input100">Password</span>
            </div>
            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="txt1">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Login
              </button>
            </div>
            <div className="text-center p-t-46 p-b-20">
              <span className="txt2">or sign up using</span>
            </div>
            <div className="login100-form-social flex-c-m">
              <a
                href="#"
                className="login100-form-social-item flex-c-m bg1 m-r-5"
              >
                <i className="fa fa-facebook-f" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="login100-form-social-item flex-c-m bg2 m-r-5"
              >
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </div>
          </form>
          <div
            className="login100-more"
            style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
