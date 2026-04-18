import { Link } from "react-router";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="footer grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <aside className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold italic tracking-tighter"
            >
              <span className="bg-primary text-white p-1 rounded-lg">CH</span>
              <span>ContestHub</span>
            </Link>
            <p className="max-w-xs text-base-content/70">
              The ultimate platform to create, discover, and participate in
              creative contests worldwide. Join the community and showcase your
              talent.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-blue-600 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-blue-700 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-gray-800 dark:hover:text-white transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </aside>

          {/* Quick Links */}
          <nav>
            <header className="footer-title opacity-100 text-primary font-bold">
              Quick Links
            </header>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/all-contests" className="link link-hover">
              All Contests
            </Link>
            <Link to="/leaderboard" className="link link-hover">
              Leaderboard
            </Link>
            <Link to="/about" className="link link-hover">
              About Us
            </Link>
          </nav>

          {/* Contact Information */}
          <section>
            <header className="footer-title opacity-100 text-primary font-bold">
              Contact Us
            </header>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <span>123 Innovation Drive, Dhaka, BD</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" />
                <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-primary text-lg" />
                <span>support@contesthub.com</span>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="footer footer-center p-4 border-t border-base-300 mt-10 pt-8">
          <aside>
            <p className="text-sm text-base-content/60">
              Copyright © 2025 - All rights reserved by{" "}
              <span className="font-semibold text-primary">ContestHub</span>
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
