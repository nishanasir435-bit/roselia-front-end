import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { Button, Input, Form, message } from "antd";

function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = (values) => {
    const savedData = localStorage.getItem("118-user-data");

    if (!savedData) {
      message.error("Please sign up first!");
      return;
    }

    const userData = JSON.parse(savedData);

    if (
      userData.email === values.email &&
      userData.password === values.password
    ) {
      localStorage.setItem("userToken", "asdfghjkl");

      message.success("Login Successfully!");

      navigate("/");
    } else {
      message.error("Invalid Email or Password");
    }
  };

  return (
    <div className="roselia-signin-page">
      <div className="roselia-signin-card">

        {/* Left Panel */}
        <div className="roselia-signin-left">
          <p className="roselia-signin-brand">ROSELIA</p>

          <div className="roselia-signin-decoration">
            <span>✦</span>
            <div></div>
            <span>✦</span>
          </div>

          <h1>
            A Scent
            <br />
            Of Elegance
          </h1>

          <p className="roselia-signin-message">
            Discover the art of fragrance.
            Welcome back to your world of luxury.
          </p>

          <p className="roselia-signin-bottom">
            LUXURY IN EVERY DROP
          </p>
        </div>

        {/* Right Panel */}
        <div className="roselia-signin-right">
          <p className="roselia-signin-small">
            WELCOME BACK
          </p>

          <h2>Login</h2>

          <p className="roselia-signin-description">
            Enter your details to continue.
          </p>

          <Form onFinish={handleSignIn} layout="vertical">

            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                {
                  required: true,
                  message: "Please Enter Your Email"
                },
              ]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please Enter Your Password"
                }
              ]}
            >
              <Input/>
            </Form.Item>

            <Button
              htmlType="submit"
              className="roselia-signin-button"
              block
            >
              Submit
            </Button>

          </Form>

          <div className="roselia-signin-options">
            <label className="roselia-remember">
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          {/* Sign Up Link */}
          <p className="roselia-signin-register">
            Don't have an account?{" "}
            <Link to="/sign-up">Sign Up</Link>
          </p>

          <p className="roselia-signin-footer">
            © ROSELIA — THE ART OF FRAGRANCE
          </p>
        </div>

      </div>
    </div>
  );
}

export default SignIn;