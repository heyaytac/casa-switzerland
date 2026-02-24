import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container-wide mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <span className="text-xl font-bold text-brand-600">CASA</span>
            <span className="ml-1 text-sm text-gray-500">Switzerland</span>
            <p className="mt-3 text-sm text-gray-500">
              Die KI-gestützte Immobilienplattform der Schweiz. Intelligenter
              suchen, schneller finden.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Immobilien
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/immobilien"
                  className="text-sm text-gray-500 hover:text-brand-600"
                >
                  Alle Immobilien
                </Link>
              </li>
              <li>
                <Link
                  href="/immobilien?typ=Wohnung"
                  className="text-sm text-gray-500 hover:text-brand-600"
                >
                  Wohnungen
                </Link>
              </li>
              <li>
                <Link
                  href="/immobilien?typ=Haus"
                  className="text-sm text-gray-500 hover:text-brand-600"
                >
                  Häuser
                </Link>
              </li>
              <li>
                <Link
                  href="/immobilien?typ=Gewerbe"
                  className="text-sm text-gray-500 hover:text-brand-600"
                >
                  Gewerbe
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Für Makler
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/fuer-makler"
                  className="text-sm text-gray-500 hover:text-brand-600"
                >
                  Vorteile
                </Link>
              </li>
              <li>
                <Link
                  href="/fuer-makler/registrieren"
                  className="text-sm text-gray-500 hover:text-brand-600"
                >
                  Registrieren
                </Link>
              </li>
              <li>
                <Link
                  href="/ki-telefonagent"
                  className="text-sm text-gray-500 hover:text-brand-600"
                >
                  KI Telefonagent
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-500 hover:text-brand-600"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Unternehmen
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-sm text-gray-500 hover:text-brand-600"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-500">
                  kontakt@casa-switzerland.ch
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-500">
                  +41 800 CASA CH
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CASA Switzerland. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
}
