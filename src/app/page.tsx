import Link from "next/link";
import { immobilien } from "@/data/immobilien";
import { kantone } from "@/data/kantone";
import PropertyCard from "@/components/PropertyCard";

export default function HomePage() {
  const featured = immobilien.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="container-wide mx-auto px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ihr Traumobjekt in der Schweiz
            </h1>
            <p className="mt-5 text-lg text-brand-200">
              Die KI-gestützte Immobilienplattform — intelligent suchen,
              schneller finden. Für Käufer und Makler.
            </p>

            {/* Search Bar */}
            <form
              action="/immobilien"
              className="mt-10 flex flex-col gap-3 rounded-xl bg-white p-3 shadow-xl sm:flex-row"
            >
              <select
                name="kanton"
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                defaultValue=""
              >
                <option value="">Alle Kantone</option>
                {kantone.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>

              <select
                name="typ"
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                defaultValue=""
              >
                <option value="">Alle Typen</option>
                <option value="Wohnung">Wohnung</option>
                <option value="Haus">Haus</option>
                <option value="Gewerbe">Gewerbe</option>
                <option value="Grundstück">Grundstück</option>
              </select>

              <button type="submit" className="btn-primary whitespace-nowrap">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Suchen
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Aktuelle Immobilien
            </h2>
            <p className="mt-2 text-gray-500">
              Entdecken Sie unsere neuesten Objekte in der ganzen Schweiz
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/immobilien" className="btn-secondary">
              Alle Immobilien ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* AI Value Prop */}
      <section className="bg-gray-50 section-padding">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Warum CASA Switzerland?
            </h2>
            <p className="mt-2 text-gray-500">
              Künstliche Intelligenz trifft auf Schweizer Immobilienmarkt
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Intelligente Suche
              </h3>
              <p className="text-sm text-gray-500">
                Finden Sie genau das richtige Objekt — gefiltert nach Kanton,
                Preis, Zimmeranzahl, Fläche und Immobilientyp.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                KI-Telefonagent
              </h3>
              <p className="text-sm text-gray-500">
                Eine Telefonnummer für alle Makler. Unser KI-Agent nimmt Anrufe
                entgegen, beantwortet Fragen und leitet Anfragen weiter.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Einfach für Makler
              </h3>
              <p className="text-sm text-gray-500">
                Registrieren, Objekte hochladen, fertig. Die KI übernimmt
                Anrufe, Kundenanfragen und Terminplanung automatisch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Sind Sie Immobilienmakler?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Registrieren Sie sich kostenlos und profitieren Sie von unserem
            KI-gestützten Telefonagenten. Weniger Verwaltung, mehr Abschlüsse.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/fuer-makler/registrieren" className="btn-primary">
              Jetzt registrieren
            </Link>
            <Link href="/fuer-makler" className="btn-secondary">
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
