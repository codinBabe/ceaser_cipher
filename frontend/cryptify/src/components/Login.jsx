import React from "react";

const Login = ({ switchToSignup }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <section className="flex items-center justify-center min-h-screen p-4 sm:p-8">
      <div className="w-full max-w-xl p-6 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
            Log in to Cryptify
          </h1>
          <p className="text-sm sm:text-xl">
            Don’t have an account?{" "}
            <button
              onClick={switchToSignup}
              className="text-purple-500 hover:underline"
            >
              Create account
            </button>
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full mt-6">
          <button className="px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white rounded-md">
            Continue with Google
          </button>
          <button className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-md">
            Continue with Facebook
          </button>
        </div>
        <div className="flex items-center justify-center gap-3 mt-6">
          <hr className="w-1/2 border-gray-400" />
          <p className="text-gray-600">Or</p>
          <hr className="w-1/2 border-gray-400" />
        </div>
        <form className="flex flex-col gap-4 mt-6" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-pink-700 hover:bg-pink-800 text-white rounded-md"
          >
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
