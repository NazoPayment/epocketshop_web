import { STEPS } from '../../data/content';

export default function Steps() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="steps-head">
          <h2>Set up in three steps</h2>
          <p>No technical skills needed. If you can use WhatsApp, you can run your shop on ePocketShop.</p>
        </div>
        <ol className="steps">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
