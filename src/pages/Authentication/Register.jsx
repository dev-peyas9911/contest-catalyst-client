import { useState } from "react";
import { Link } from "react-router";
import {
  FaRegEye,
  FaRegEyeSlash,
  FaGoogle,
  FaUser,
  FaImage,
  FaCloudUploadAlt,
} from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    // Your Firebase Registration & Image Upload logic here
    console.log({ name, email, password, image });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-gray-950 
    transition-colors duration-300"
    >
      <div
        className="max-w-md w-full space-y-8 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border
       border-gray-100 dark:border-gray-800"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join the ContestHub community today
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleRegister}>
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <FaUser size={16} />
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Image Upload Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Profile Picture
              </label>
              <div className="relative">
                <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                  <div className="flex flex-col items-center justify-center pt-2 pb-2">
                    <FaCloudUploadAlt
                      className="text-blue-500 mb-1"
                      size={24}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate px-4">
                      {fileName}
                    </p>
                  </div>
                  <input
                    name="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="name@example.com"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400
                   hover:text-blue-600 transition-colors"
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={20} />
                  ) : (
                    <FaRegEye size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all transform active:scale-95"
          >
            Create Account
          </button>

          <div className="relative flex items-center justify-center my-4">
            <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
            <span className="shrink mx-4 text-gray-400 text-xs uppercase">
              Or register with
            </span>
            <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg
             hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border-b-4 active:border-b-0 active:mt-1"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
