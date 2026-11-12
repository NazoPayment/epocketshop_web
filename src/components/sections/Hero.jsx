import { Link } from 'react-router-dom';
import phone from '../../assets/images/iphone-screen.png';
import StoreBadges from '../StoreBadges';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <h1>A whole business in your pocket</h1>
          <p className="hero-lead">A Mobile app designed to help you get your business to the next level.</p>
          <p className="hero-copy">
            With features that assist in running a business all round from product management, order
            processing, delivery options, invoicing, payments, analytics, and AI insights, you’ll have
            everything you need to streamline your operations.
          </p>
          <div className="hero-actions">
            <StoreBadges />
            <Link className="text-link" to={{ pathname: '/', hash: '#video' }}>
              Watch the demo &rarr;
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img src={phone} alt="ePocketShop app screen" width="250" height="496" />
        </div>
      </div>
    </section>
  );
}
