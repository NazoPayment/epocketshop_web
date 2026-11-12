import { CHANNELS } from '../../data/content';

export default function Overview() {
  return (
    <section className="section statement" id="overview">
      <div className="container">
        <h2>One system, not eight apps.</h2>
        <p>
          Products, orders, payments, invoices and deliveries live in the same place, so you stop switching
          between tools to complete a single sale.
        </p>
        <div className="channels">
          <span className="channels-label">Everything it touches</span>
          <ul>
            {CHANNELS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
