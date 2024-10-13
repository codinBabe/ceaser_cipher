import React from "react";

const SignUp = ({ onClick }) => {
  const [isEmailFocused, setEmailFocused] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <section className="flex items-center justify-center min-h-screen p-4 sm:p-8">
      <div className="w-full max-w-xl p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
            Create your account
          </h1>
          <p className="text-sm sm:text-xl">
            Already have an account?{" "}
            <button
              onClick={onClick}
              className="text-purple-500 hover:underline"
            >
              Log in
            </button>
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full mt-6">
          <button className="w-full px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white rounded-md">
            Continue with Google
          </button>
        </div>
        <div className="flex items-center justify-center gap-3 mt-6">
          <hr className="w-1/2 border-gray-400" />
          <p className="text-gray-600">Or</p>
          <hr className="w-1/2 border-gray-400" />
        </div>
        <form
          className="flex flex-col gap-4 mt-6"
          onSubmit={handleSignUpSubmit}
        >
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            onFocus={() => setEmailFocused(true)}
          />
          {isEmailFocused && (
            <div
              className={`transition-all duration-500 ease-in-out flex flex-col gap-4 ${
                isEmailFocused
                  ? "opacity-100 max-h-screen"
                  : "opacity-0 max-h-0"
              } overflow-hidden`}
            >
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md"
              >
                Log in
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignUp;
