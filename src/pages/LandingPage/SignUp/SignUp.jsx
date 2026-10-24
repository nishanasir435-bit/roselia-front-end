import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { Button, Input, Form, message } from "antd";

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (values) => {
    
    localStorage.setItem("118-user-data", JSON.stringify(values))
    message.success("Sign Up Successfully")
    navigate("/sign-in")
  }

  return (
    <div className="roselia-signup-page">
      <div className="roselia-signup-card">
        <div className="roselia-signup-left">
          <p className="roselia-signup-decoration">ROSELIA</p>

          <h1>Discover The Scent That Defines You</h1>

          <p className="roselia-signup-text">
            Create an account and explore a world
            of beautiful fragrances.
          </p>
        </div>

        <div className="roselia-signup-right">
          <h2>Create Account</h2>

          <p className="roselia-signup-subtitle">
            Join ROSELIA and find your fragrance.
          </p>

          <Form layout="vertical" onFinish={handleSignUp}>
            <Form.Item
              name="full-name"
              label="Full Name"
              rules={[{ required: true, message: "Please Enter Your Name" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: "Please Enter Your Email" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please Enter Your Password" }
              ]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              name="confirm-password"
              label="Confirm Password"
              rules={[
                {
                  required: true,
                  message: "Please Confirm Your Password"
                }
              ]}
            >
              <Input/>
            </Form.Item>

            <Button
              htmlType="submit"
              className="roselia-signup-btn"
              block
            >
              Sign Up
            </Button>
          </Form>

          <p className="roselia-signup-login">
            Already have an account?{" "}
            <Link to="/sign-in">Sign In</Link>
          </p>

          <Link to="/sign-in" className="roselia-signup-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;