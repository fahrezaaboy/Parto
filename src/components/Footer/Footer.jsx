import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Footer() {
  return (
    <motion.footer className="footer" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="footer__container">
        <div className="footer__brand">
          <h2 className="footer__logo">Panto</h2>
          <p className="footer__description">
            The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
          </p>
        </div>

        <div className="footer__column">
          <p className="footer__title">Services</p>
          <nav aria-label="Footer services">
            <ul className="footer__links">
              <li><a href="#">Email Marketing</a></li>
              <li><a href="#">Campaigns</a></li>
              <li><a href="#">Branding</a></li>
              <li><a href="#">Display</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer__column">
          <p className="footer__title">Furniture</p>
          <nav aria-label="Footer furniture">
            <ul className="footer__links">
              <li><a href="#">Beds</a></li>
              <li><a href="#">Chair</a></li>
              <li><a href="#">All</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer__column">
          <p className="footer__title">Follow Us</p>
          <div className="footer__social-links">
            <a href="#" className="footer__social-link">
              <FaFacebookF size={18} />
              <span>Facebook</span>
            </a>
            <a href="#" className="footer__social-link">
              <FaTwitter size={18} />
              <span>Twitter</span>
            </a>
            <a href="#" className="footer__social-link">
              <FaInstagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">Copyright © 2021</p>
        <div className="footer__policy-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </motion.footer>
  );
}
