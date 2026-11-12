import playstore from '../assets/images/playstore.png';
import { PLAY_STORE_URL } from '../data/content';

export default function StoreBadges() {
  return (
    <ul className="store-badges">
      <li>
        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
          <img src={playstore} alt="Get it on Google Play" />
        </a>
      </li>
      <li>
        <span className="store-soon" role="img" aria-label="App Store, coming soon">
          <i className="fab fa-apple" aria-hidden="true" />
          <span>
            <small>Coming soon</small>
            App Store
          </span>
        </span>
      </li>
    </ul>
  );
}
