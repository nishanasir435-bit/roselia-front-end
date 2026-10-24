
function Signup({ setPage }) {
  return (
    <div className="login-box">
      <h1>Create Account</h1>

      <input
        type="text"
        placeholder="Enter your name"
      />

      <input
        type="email"
        placeholder="Enter your email"
      />

      <input
        type="password"
        placeholder="Create a password"
      />

      <button>Sign Up</button>

      <p>
        Already have an account?{" "}
        <span onClick={() => setPage("login")}>
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;