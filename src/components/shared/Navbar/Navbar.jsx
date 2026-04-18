import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router";
import {
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaThLarge,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Profile dropdown state
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );
  const dropdownRef = useRef(null);

  // Mock User - Replace with your AuthContext logic
  // const user = {
  //   displayName: "Peyas Barmon",
  //   photoURL: "https://i.ibb.co/mS7ST9X/user.png",
  // };

  const user = false;

  // Theme Toggle Logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Contests", path: "/all-contests" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  const activeClass =
    "text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600";
  const inactiveClass =
    "text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <span className="font-black text-lg">CH</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                Contest<span className="text-blue-600">Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Section */}
          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400
               hover:ring-2 ring-blue-500 transition-all"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {user ? (
              /* User Profile Dropdown */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex text-sm border-2 border-blue-600 rounded-full focus:outline-none transition-all hover:opacity-80"
                >
                  <img
                    className="h-9 w-9 rounded-full object-cover"
                    src={user.photoURL}
                    alt="User profile"
                  />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white dark:bg-gray-800 py-2 shadow-2xl ring-1 ring-black ring-opacity-5 border border-gray-100 dark:border-gray-700 animate-in fade-in zoom-in duration-150">
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Signed in as
                      </p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {user.displayName}
                      </p>
                    </div>

                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaThLarge className="text-blue-500" /> Dashboard
                    </Link>

                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 dark:text-gray-300 focus:outline-none"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white dark:bg-gray-900 border-t dark:border-gray-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
