import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Für Makler – CASA Switzerland",
  description:
    "Registrieren Sie sich als Makler bei CASA Switzerland. Profitieren Sie von KI-gestützten Telefonanrufen, automatischer Anfragenbearbeitung und mehr.",
};

export default function FuerMaklerPage() {
  const vorteile = [
    {
      titel: "KI-Telefonagent",
      beschreibung:
        "Unser KI-Agent nimmt Anrufe über eine zentrale Nummer entgegen und leitet sie intelligent an Sie weiter. Kein Anruf geht mehr verloren.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
    },
    {
      titel: "Automatische Inserate",
      beschreibung:
        "Laden Sie Fotos und Daten hoch — die KI erstellt automatisch ansprechende Inserate mit optimierten Beschreibungen.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
    {
      titel: "Lead-Management",
      beschreibung:
        "Alle Kundenanfragen zentral im Dashboard. Sortiert, priorisiert und mit KI-generierten Zusammenfassungen.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      titel: "Marktanalysen",
      beschreibung:
        "Datenbasierte Preisvorschläge und Marktberichte für Ihre Region. Treffen Sie fundierte Entscheidungen.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      titel: "24/7 Erreichbarkeit",
      beschreibung:
        "Ihr KI-Assistent ist immer verfügbar. Auch nachts und am Wochenende werden Anfragen professionell bearbeitet.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      titel: "Einfache Bedienung",
      beschreibung:
        "Intuitives Dashboard, keine Schulung nötig. In 5 Minuten registriert, sofort einsatzbereit.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];

  const schritte = [
    {
      nr: "1",
      titel: "Registrieren",
      beschreibung:
        "Erstellen Sie Ihr Maklerprofil in wenigen Minuten. Kostenlos und unverbindlich.",
    },
    {
      nr: "2",
      titel: "Objekte hochladen",
      beschreibung:
        "Laden Sie Fotos und Eckdaten hoch. Die KI erstellt professionelle Inserate.",
    },
    {
      nr: "3",
      titel: "Anfragen erhalten",
      beschreibung:
        "Unser KI-Telefonagent und die Plattform bringen Ihnen qualifizierte Leads.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wide mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Mehr Abschlüsse.
              <br />
              Weniger Verwaltung.
            </h1>
            <p className="mt-5 text-lg text-brand-200">
              CASA Switzerland gibt Ihnen den KI-Vorteil. Automatisierte
              Telefonanrufe, intelligente Inserate und ein Dashboard, das für
              Sie arbeitet.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/fuer-makler/registrieren"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                Kostenlos registrieren
              </Link>
              <Link
                href="/ki-telefonagent"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                KI-Telefonagent entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Ihre Vorteile als Makler
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">
            Alles, was Sie brauchen, um Ihr Immobiliengeschäft auf das nächste
            Level zu bringen.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vorteile.map((v) => (
              <div
                key={v.titel}
                className="rounded-xl border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {v.icon}
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {v.titel}
                </h3>
                <p className="text-sm text-gray-500">{v.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schritte */}
      <section className="bg-gray-50 section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            In 3 Schritten starten
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {schritte.map((s) => (
              <div key={s.nr} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-2xl font-bold text-white">
                  {s.nr}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {s.titel}
                </h3>
                <p className="text-sm text-gray-500">{s.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto rounded-2xl bg-brand-600 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">Bereit durchzustarten?</h2>
          <p className="mx-auto mt-3 max-w-lg text-brand-100">
            Registrieren Sie sich jetzt und erleben Sie, wie KI Ihren Alltag als
            Makler revolutioniert.
          </p>
          <Link
            href="/fuer-makler/registrieren"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            Jetzt kostenlos starten
          </Link>
        </div>
      </section>
    </>
  );
}
