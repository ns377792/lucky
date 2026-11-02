import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { profile as p } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Nav name={p.name} />
      <main id="top">
        <section className="hero wrap">
          <div className="hero__text">
            <span className="chip">Open to opportunities</span>
            <h1>Hi, I&apos;m <em>{p.name}</em></h1>
            <p className="hero__role">{p.role}</p>
            <p className="lead">{p.summary}</p>
            <div className="hero__cta">
              <a className="btn" href={`https://wa.me/${p.phoneRaw}`} target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
              <a className="btn btn--ghost" href={`mailto:${p.email}`}>Send Email</a>
            </div>
            <ul className="stats">
              {p.stats.map(([v, l]) => (
                <li key={l}><b>{v}</b><span>{l}</span></li>
              ))}
            </ul>
          </div>
          <div className="hero__img">
            <Image src="/assets/ajruddin.jpg" alt={`${p.name} - ${p.role}`} width={420} height={540} priority />
          </div>
        </section>

        <section id="about" className="sec wrap">
          <h2>About</h2>
          <p className="lead">
            From packing floors to running a travel business, I&apos;ve grown through every level of operations: supervising dispatch,
            managing inventory, leading a 15+ member warehouse team and now directing a visa and travel firm. I care about accuracy,
            clear communication and clients who feel looked after.
          </p>
        </section>

        <section id="experience" className="sec wrap">
          <h2>Experience</h2>
          <div className="tl">
            {p.experience.map((e) => (
              <article className="tl__item" key={e.role + e.period}>
                <span className="tl__dot" />
                <div className="tl__head">
                  <h3>{e.role}</h3>
                  <span className="tl__period">{e.period}</span>
                </div>
                <p className="tl__co">{e.company}</p>
                <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="sec wrap">
          <h2>Skills</h2>
          <div className="grid3">
            {Object.entries(p.skills).map(([group, items]) => (
              <div className="card" key={group}>
                <h3>{group}</h3>
                <p>{items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="sec wrap">
          <h2>Education</h2>
          <div className="grid3">
            {p.education.map(([a, b]) => (
              <div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>
            ))}
          </div>
          <p className="meta">Languages: {p.languages.join(", ")} · Interests: {p.interests.join(", ")}</p>
        </section>

        <section id="contact" className="sec wrap contact">
          <div className="contact__grid">
            <div className="contact__info">
              <h2>Let&apos;s Connect</h2>
              <p className="lead">Visa assistance, travel documentation or operations support, reach out anytime.</p>
              <ul className="contact__list">
                <li><span>Phone</span><a href={`tel:+${p.phoneRaw}`}>{p.phone}</a></li>
                <li><span>Email</span><a href={`mailto:${p.email}`}>{p.email}</a></li>
                <li><span>Location</span>{p.location}</li>
              </ul>
            </div>
            <div className="contact__form">
              <h2>Contact For Any Query</h2>
              <p className="contact__sub">Fill out the form below and we&apos;ll get back to you soon.</p>
              <ContactForm email={p.email} />
            </div>
          </div>
        </section>
      </main>
      <Footer profile={p} />
    </>
  );
}
