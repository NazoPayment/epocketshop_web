import { useState } from 'react';
import { CONTACT_EMAIL } from '../../data/content';
import SectionHeader from '../SectionHeader';

const EMPTY = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // The original site has no backend for this form, so submitting opens the visitor's mail client.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject.trim() || `Enquiry from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setForm(EMPTY);
  };

  return (
    <section className="section" id="contact">
      <div className="container split">
        <div className="split-head">
          <h2>Contact us</h2>
          <p>For more information on the app or inquiries please use the email form to contact us.</p>
          <dl className="contact-info">
            <div>
              <dt>Address</dt>
              <dd>Gauteng, South Africa</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+15173977100">009900990099</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>Working hours</dt>
              <dd>Mon-Fri 9.00 AM to 5.00PM.</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-row">
            <label className="field">
              <span>Full Name</span>
              <input type="text" name="name" value={form.name} onChange={onChange} required />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" value={form.email} onChange={onChange} required />
            </label>
          </div>
          <label className="field">
            <span>Subject</span>
            <input type="text" name="subject" value={form.subject} onChange={onChange} />
          </label>
          <label className="field">
            <span>Message</span>
            <textarea name="message" value={form.message} onChange={onChange} />
          </label>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
