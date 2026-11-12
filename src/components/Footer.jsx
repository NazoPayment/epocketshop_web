import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} ePocketShop. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/policy">Privacy policy</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
