import { ORDER_FLOW } from '../../data/content';
import SectionHeader from '../SectionHeader';

export default function OrderFlow() {
  return (
    <section className="section" id="order-flow">
      <div className="container split">
        <SectionHeader title="Every order, start to finish">
          From the first message to the final invoice, one order stays in one place.
        </SectionHeader>
        <ol className="flow">
          {ORDER_FLOW.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
