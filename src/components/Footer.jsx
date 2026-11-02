const QUICK = [["Home", "#top"], ["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"]];

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

export default function Footer({ profile: p }) {
  return (
    <footer className="foot">
      <div className="foot__in">
        <div className="foot__brand">
          <h3 className="foot__logo">{p.name.toUpperCase()}</h3>
          <p>{p.footerBlurb}</p>
        </div>

        <nav className="foot__col" aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul className="foot__links foot__links--wide">
            {QUICK.map(([l, h]) => (
              <li key={h}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </nav>

        <div className="foot__col">
          <h4>Services</h4>
          <ul className="foot__links">
            {p.services.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div className="foot__col">
          <h4>Connect</h4>
          <div className="foot__social">
            <a href={`https://wa.me/${p.phoneRaw}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Icon><path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.8c-.9-.4-1.6-1.1-2-2l.8-.8-1-2L9 9.5z" /></Icon>
            </a>
            <a href={`mailto:${p.email}`} aria-label="Email">
              <Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Icon>
            </a>
            <a href={`tel:+${p.phoneRaw}`} aria-label="Call">
              <Icon><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></Icon>
            </a>
          </div>
        </div>
      </div>

      <div className="foot__bar">© {new Date().getFullYear()} {p.name.toUpperCase()}. All Rights Reserved.</div>
    </footer>
  );
}
