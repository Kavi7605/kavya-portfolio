import React, { useRef, useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);

  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    _honeypot: '',
  });

  const [status, setStatus] = useState('idle');
  // idle | loading | success | error

  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const { name, email, message, _honeypot } = form;

    if (_honeypot) return 'Spam detected.';
    if (!name.trim()) return 'Name is required.';
    if (!email.trim()) return 'Email is required.';

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return 'Please enter a valid email address.';
    }

    if (!message.trim() || message.trim().length < 10) {
      return 'Message must be at least 10 characters long.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("STEP 1 - Submit Triggered");

    const validationError = validate();

    if (validationError) {
      setErrorMsg(validationError);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("STEP 2 - ENV VARIABLES");
      console.log("SERVICE ID:", serviceId);
      console.log("TEMPLATE ID:", templateId);
      console.log("PUBLIC KEY:", publicKey);

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS environment variables.");
      }

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      };

      console.log("STEP 3 - TEMPLATE PARAMS");
      console.log(templateParams);

      console.log("STEP 4 - SENDING EMAIL");

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("STEP 5 - EMAIL SENT SUCCESSFULLY");
      console.log(response);

      setStatus('success');

      setForm({
        name: '',
        email: '',
        message: '',
        _honeypot: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {

      console.error("FULL EMAILJS ERROR:", error);

      if (error?.text) {
        console.error("EMAILJS TEXT:", error.text);
      }

      if (error?.message) {
        console.error("EMAILJS MESSAGE:", error.message);
      }

      setErrorMsg(
        error?.text ||
        error?.message ||
        "Failed to send message. Please try again later."
      );

      setStatus('error');

    } finally {

      console.log("STEP 6 - FINISHED REQUEST");
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    color: 'var(--text)',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s, opacity 0.2s',
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'start',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(40px)',
            transition: 'all 0.8s ease',
          }}
        >

          {/* LEFT SIDE */}
          <div>

            <div className="section-label">Contact</div>

            <h2 className="section-title">
              Let's work
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, var(--accent), var(--accent2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                together
              </span>
            </h2>

            <p
              style={{
                color: 'var(--text2)',
                lineHeight: 1.8,
                marginBottom: '40px',
                fontSize: '0.95rem',
              }}
            >
              I'm open to internships, freelance projects, and collaborations.
              Whether you have a project idea or just want to connect — feel free to reach out!
            </p>

            {[
              {
                icon: '📧',
                label: 'Email',
                val: 'chavdakavya765@gmail.com',
                href: 'mailto:chavdakavya765@gmail.com',
              },
              {
                icon: '📍',
                label: 'Location',
                val: 'Gujarat, India',
                href: null,
              },
              {
                icon: '📱',
                label: 'Phone',
                val: '+91 94274 56773',
                href: 'tel:+919427456773',
              },
            ].map((info) => (
              <div
                key={info.label}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(124,106,247,0.08)',
                    border: '1px solid rgba(124,106,247,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}
                >
                  {info.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text3)',
                      marginBottom: '2px',
                    }}
                  >
                    {info.label}
                  </div>

                  {info.href ? (
                    <a
                      href={info.href}
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text)',
                        transition: 'color 0.2s',
                        textDecoration: 'none',
                      }}
                    >
                      {info.val}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text)',
                      }}
                    >
                      {info.val}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '36px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
            }}
          >

            {/* Honeypot */}
            <input
              type="text"
              name="_honeypot"
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
              value={form._honeypot}
              onChange={handleChange}
            />

            {/* NAME */}
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--text2)',
                  marginBottom: '8px',
                  letterSpacing: '0.05em',
                }}
              >
                YOUR NAME
              </label>

              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Kavya Chavda"
                style={inputStyle}
                disabled={status === 'loading'}
              />
            </div>

            {/* EMAIL */}
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--text2)',
                  marginBottom: '8px',
                  letterSpacing: '0.05em',
                }}
              >
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={inputStyle}
                disabled={status === 'loading'}
              />
            </div>

            {/* MESSAGE */}
            <div style={{ marginBottom: '24px' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--text2)',
                  marginBottom: '8px',
                  letterSpacing: '0.05em',
                }}
              >
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '120px',
                }}
                disabled={status === 'loading'}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                width: '100%',
                padding: '14px',
                background:
                  status === 'success'
                    ? 'linear-gradient(135deg, #4ade80, #22c55e)'
                    : 'linear-gradient(135deg, var(--accent), var(--accent2))',
                border: 'none',
                borderRadius: 'var(--radius)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: status === 'loading' ? 'wait' : 'pointer',
                opacity: status === 'loading' ? 0.7 : 1,
              }}
            >
              {status === 'loading'
                ? 'Sending...'
                : status === 'success'
                ? '✓ Message Sent Successfully!'
                : 'Send Message'}
            </button>

            {/* SUCCESS */}
            {status === 'success' && (
              <p
                style={{
                  marginTop: '16px',
                  fontSize: '0.85rem',
                  color: '#4ade80',
                  textAlign: 'center',
                }}
              >
                Message sent successfully. I'll get back to you soon.
              </p>
            )}

            {/* ERROR */}
            {status === 'error' && (
              <p
                style={{
                  marginTop: '16px',
                  fontSize: '0.85rem',
                  color: '#f87171',
                  textAlign: 'center',
                }}
              >
                {errorMsg}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}