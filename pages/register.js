import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold">Register</h2>
      <Link href="/login">
        <a className="mb-8 text-sm text-green-500 hover:underline">
          Already have an account?
        </a>
      </Link>
      <form className="w-full px-10 md:w-1/2">
        <fieldset>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input-text"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-text"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-text"
          />
          <input
            type="password"
            name="cfPassword"
            placeholder="Confirm password"
            className="input-text"
          />
          <button
            type="submit"
            className="float-right px-6 py-3 rounded text-lg bg-green-500 hover:bg-green-600 focus:bg-green-700 text-white focus:outline-none"
          >
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
}