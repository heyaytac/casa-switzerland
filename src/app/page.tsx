import Link from "next/link";
import { immobilien } from "@/data/immobilien";
import { kantone } from "@/data/kantone";
import PropertyCard from "@/components/PropertyCard";

export default function HomePage() {
  const featured = immobilien.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="container-wide relative mx-auto px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pb-36 lg:pt-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-surface-border bg-surface-light px-4 py-1.5 text-sm text-muted">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
              KI-gestützte Immobiliensuche
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="gradient-text">Ihr Traumobjekt</span>
              <br />
              <span className="text-white">in der Schweiz</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Die moderne Immobilienplattform mit KI-Telefonagent.
              Intelligent suchen, schneller finden — für Käufer und Makler.
            </p>

            {/* Search Bar */}
            <form
              action="/immobilien"
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-surface-border bg-surface-light/80 p-3 backdrop-blur-xl sm:flex-row"
            >
              <select
                name="kanton"
                className="select-dark flex-1"
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
                className="select-dark flex-1"
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white">
              Aktuelle Immobilien
            </h2>
            <p className="mt-2 text-muted">
              Entdecken Sie unsere neuesten Objekte in der ganzen Schweiz
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/immobilien" className="btn-secondary">
              Alle Immobilien ansehen
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Value Prop */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Warum CASA Switzerland?
            </h2>
            <p className="mt-2 text-muted">
              Künstliche Intelligenz trifft auf Schweizer Immobilienmarkt
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Intelligente Suche
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Finden Sie genau das richtige Objekt — gefiltert nach Kanton,
                Preis, Zimmeranzahl, Fläche und Immobilientyp.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                KI-Telefonagent
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Eine Telefonnummer für alle Makler. Unser KI-Agent nimmt Anrufe
                entgegen, beantwortet Fragen und leitet Anfragen weiter.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Einfach für Makler
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Registrieren, Objekte hochladen, fertig. Die KI übernimmt
                Anrufe, Kundenanfragen und Terminplanung automatisch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-surface-light p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white">
                Sind Sie Immobilienmakler?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Registrieren Sie sich kostenlos und profitieren Sie von unserem
                KI-gestützten Telefonagenten. Weniger Verwaltung, mehr
                Abschlüsse.
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
          </div>
        </div>
      </section>
    </>
  );
}
