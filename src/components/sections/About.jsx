import { ABOUT_ITEMS } from '../../data/content';
import SectionHeader from '../SectionHeader';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container split">
        <SectionHeader title="About">
          A Mobile app designed to provide support on some administration duties, help manage product and
          delivery management, and give insight on peformance based on growth.
        </SectionHeader>
        <ul className="rows">
          {ABOUT_ITEMS.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
