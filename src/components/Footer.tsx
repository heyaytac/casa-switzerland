import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="container-wide mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white">
                <span className="text-xs font-black text-black">C</span>
              </div>
              <span className="text-base font-semibold text-white">CASA</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Die KI-gestützte Immobilienplattform der Schweiz. Intelligenter
              suchen, schneller finden.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-dark">
              Immobilien
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/immobilien"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Alle Immobilien
                </Link>
              </li>
              <li>
                <Link
                  href="/immobilien?typ=Wohnung"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Wohnungen
                </Link>
              </li>
              <li>
                <Link
                  href="/immobilien?typ=Haus"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Häuser
                </Link>
              </li>
              <li>
                <Link
                  href="/immobilien?typ=Gewerbe"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Gewerbe
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-dark">
              Für Makler
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/fuer-makler"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Vorteile
                </Link>
              </li>
              <li>
                <Link
                  href="/fuer-makler/registrieren"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Registrieren
                </Link>
              </li>
              <li>
                <Link
                  href="/ki-telefonagent"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  KI Telefonagent
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-dark">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted">
                  kontakt@casa-switzerland.ch
                </span>
              </li>
              <li>
                <span className="text-sm text-muted">+41 800 CASA CH</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-surface-border pt-6 text-center text-xs text-muted-dark">
          © {new Date().getFullYear()} CASA Switzerland. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
}
