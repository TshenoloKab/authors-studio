import { Link } from "react-router-dom";
import "./Footer.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/books", label: "Books" },
  { to: "/journal", label: "Journal" },
  { to: "/speaking", label: "Speaking" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__wordmark">The Author's Studio</div>
          <p className="footer__text">Stories That Inspire. Ideas That Last. A home for thoughtful writing, meaningful conversations and stories that endure.</p>
        </div>
        <div className="footer__nav">
          <div className="footer__title">Navigate</div>
          <ul className="footer__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__cta">
          <div className="footer__title">Connect</div>
          <p className="footer__text">Interested in bringing Lindie to your event?</p>
          <Link to="/speaking" className="btn btn--primary">Invite Me to Speak</Link>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>(c) {new Date().getFullYear()} The Author's Studio. All rights reserved.</span>
      </div>
    </footer>
  );
}