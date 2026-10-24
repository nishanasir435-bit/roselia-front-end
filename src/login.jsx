function Login({ setPage }) {
  return (
    <div className="login-box">
      <h1>Login</h1>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>

      <p>
        Don't have an account?{" "}
        <span onClick={() => setPage("signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Login;