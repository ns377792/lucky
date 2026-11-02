"use client";
import { useState } from "react";

export default function ContactForm({ email }) {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nEmail: ${f.email}\n\n${f.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="cf" onSubmit={submit}>
      <div className="cf__row">
        <input type="text" placeholder="Your Name" value={f.name} onChange={on("name")} required />
        <input type="email" placeholder="Your Email" value={f.email} onChange={on("email")} required />
      </div>
      <input type="text" placeholder="Subject" value={f.subject} onChange={on("subject")} required />
      <textarea placeholder="Message" rows={6} value={f.message} onChange={on("message")} required />
      <button type="submit" className="cf__btn">Send Message</button>
    </form>
  );
}
