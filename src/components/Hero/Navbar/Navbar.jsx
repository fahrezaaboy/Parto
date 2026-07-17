import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Furniture', hasDropdown: true },
  { label: 'Shop', hasDropdown: false },
  { label: 'About Us', hasDropdown: false },
  { label: 'Contact', hasDropdown: false },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          Panto
        </a>

        <nav className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="navbar__link-item">
                <a href="#" className="navbar__link">
                  {link.label}
                  {link.hasDropdown && <FiChevronDown className="navbar__chevron" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__right">
          <button className="navbar__cart" aria-label="Shopping cart">
            <FiShoppingCart size={22} />
            <span className="navbar__badge">0</span>
          </button>
          <button
            className="navbar__toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
