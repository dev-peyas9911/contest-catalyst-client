import { Link } from "react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <span className="font-black text-lg">CH</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                Contest<span className="text-blue-600">Hub</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Empowering creators and competitors worldwide. Join our platform
              to showcase your skills, win prizes, and grow your professional
              portfolio.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaFacebookF />,
                  link: "#",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "#",
                  color: "hover:bg-blue-700",
                },
                {
                  icon: <FaGithub />,
                  link: "#",
                  color: "hover:bg-gray-800 dark:hover:bg-blue-500",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700 transition-all ${social.color} hover:text-white`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Platform
            </h3>
            <ul className="space-y-4">
              {["Home", "All Contests", "Leaderboard", "Extra Section"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaChevronRight className="text-[10px] mr-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-600" />
                <span>
                  123 Innovation St, Tech Plaza
                  <br />
                  Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <span>support@contesthub.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Subscribe to get notifications about new contests.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear}{" "}
            <span className="font-semibold text-blue-600">ContestHub</span>. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
