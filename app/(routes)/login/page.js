import Link from "next/link";

const LoginPage = () => {
  return (
    <div class="bg-gray-900 text-gray-300 flex items-center justify-center min-h-screen">
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form>
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
          <div class="mb-6">
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
          <div class="flex items-center justify-between mb-4">
            <div>
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                id="remember_me"
              />
              <label class="text-sm text-gray-400" for="remember_me">
                Remember me
              </label>
            </div>
            <a href="#" class="text-sm text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Login
          </button>
        </form>
        <p class="mt-6 text-center text-gray-400">
          Dont have an account?{" "}
          <Link href="/signup" class="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
