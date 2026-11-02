"use client";
import { useState } from "react";

const LINKS = [["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"]];

export default function Nav({ name }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav__in">
        <a href="#top" className="nav__logo">{name}</a>
        <button className="nav__btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`nav__links${open ? " open" : ""}`}>
          {LINKS.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
