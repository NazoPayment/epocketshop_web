import { FAQS } from '../../data/content';
import SectionHeader from '../SectionHeader';

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container split">
        <SectionHeader title="Frequently asked questions">
          Below are answer to question that most users are curious to know about the app, this could be one of
          your curiosities.
        </SectionHeader>
        <div className="faq-list">
          {FAQS.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
