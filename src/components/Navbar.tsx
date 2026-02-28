"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/immobilien", label: "Immobilien" },
    { href: "/fuer-makler", label: "Für Makler" },
    { href: "/ki-telefonagent", label: "KI Telefonagent" },
    { href: "/ueber-uns", label: "Über uns" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur-xl">
      <div className="container-wide mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
            <span className="text-sm font-black text-black">C</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            CASA
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-all duration-200 hover:bg-surface-lighter hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4 h-5 w-px bg-surface-border" />
          <Link href="/dashboard" className="ml-4 btn-primary text-sm">
            Dashboard
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border bg-surface-light md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-surface-border bg-surface px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-3 py-3 text-sm text-muted transition-colors hover:bg-surface-lighter hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="btn-primary mt-3 block w-full text-center text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
