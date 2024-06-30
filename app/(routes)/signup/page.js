import Link from "next/link";

const SignupPage = () => {
  return (
    <body class="bg-gray-900 text-gray-300 flex items-center justify-center min-h-screen">
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        <form>
          <div class="mb-4">
            <label class="block text-gray-400 mb-2" for="username">
              Username
            </label>
            <input
              class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-400 mb-2" for="email">
              Email
            </label>
            <input
              class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-400 mb-2" for="password">
              Password
            </label>
            <input
              class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-400 mb-2" for="confirm_password">
              Confirm Password
            </label>
            <input
              class="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="confirm_password"
              name="confirm_password"
              required
            />
          </div>
          <button
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p class="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/login" class="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </body>
  );
};
export default SignupPage;
