import phone from '../../assets/images/iphone-screen-with-shadow.png';
import { FEATURES_LEFT, FEATURES_RIGHT } from '../../data/content';

const GROUPS = [
  { label: 'Sell', items: FEATURES_LEFT },
  { label: 'Run the business', items: FEATURES_RIGHT },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container split">
        <div className="split-head has-phone">
          <h2>Features</h2>
          <p>
            Features and functionality we believe will enable the app to assist the business owner in the best
            ways possible.
          </p>
          <div className="feature-phone">
            <img src={phone} alt="ePocketShop app preview" width="250" height="496" />
          </div>
        </div>
        <div>
          {GROUPS.map((group) => (
            <div className="group" key={group.label}>
              <h3 className="group-label">{group.label}</h3>
              <ul className="rows">
                {group.items.map((f) => (
                  <li key={f.title}>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
