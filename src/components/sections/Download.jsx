import StoreBadges from '../StoreBadges';
import { WEB_APP_URL } from '../../data/content';

export default function Download() {
  return (
    <section className="download" id="download">
      <div className="container download-inner">
        <div>
          <h2>Ready to grow your business?</h2>
          <p>
            Sign up and try it on the web, or download ePocketShop from Google Play. The App Store version is
            coming soon.
          </p>
        </div>
        <div className="download-actions">
          <a className="btn btn-primary" href={WEB_APP_URL} target="_blank" rel="noopener noreferrer">
            Sign up and try it
          </a>
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
