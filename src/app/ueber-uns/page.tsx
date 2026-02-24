import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns – CASA Switzerland",
  description:
    "Erfahren Sie mehr über CASA Switzerland, die KI-gestützte Immobilienplattform der Schweiz.",
};

export default function UeberUnsPage() {
  const stats = [
    { value: "500+", label: "Immobilien" },
    { value: "120+", label: "Makler" },
    { value: "26", label: "Kantone" },
    { value: "24/7", label: "KI-Verfügbarkeit" },
  ];

  const team = [
    {
      name: "Lena Fischer",
      rolle: "CEO & Gründerin",
      beschreibung:
        "15 Jahre Erfahrung in der Schweizer Immobilienbranche. Visionärin hinter der KI-Integration.",
    },
    {
      name: "David Hofmann",
      rolle: "CTO",
      beschreibung:
        "Experte für KI und maschinelles Lernen. Zuvor bei einem führenden Schweizer Tech-Unternehmen.",
    },
    {
      name: "Sarah Berger",
      rolle: "Head of Sales",
      beschreibung:
        "Verbindet Makler mit Technologie. Spezialistin für den Schweizer Immobilienmarkt.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wide mx-auto px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Über CASA Switzerland
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-200">
            Wir revolutionieren den Schweizer Immobilienmarkt mit künstlicher
            Intelligenz — für Käufer und Makler gleichermassen.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-8 px-4 sm:px-6 lg:px-8">
        <div className="container-wide mx-auto grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white p-6 text-center shadow-md"
            >
              <p className="text-3xl font-bold text-brand-600">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-wide mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Unsere Geschichte
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              CASA Switzerland wurde 2025 in Zürich gegründet, mit dem Ziel, den
              Schweizer Immobilienmarkt grundlegend zu verändern. Wir sahen, wie
              Makler täglich Stunden mit Telefonaten, Anfragenbearbeitung und
              Verwaltungsaufgaben verbrachten — Zeit, die besser in die
              persönliche Betreuung ihrer Kunden investiert werden könnte.
            </p>
            <p>
              Unsere Lösung: Ein KI-gestützter Telefonagent, der über eine
              einzige Telefonnummer erreichbar ist und Kundenanfragen
              intelligent an den richtigen Makler weiterleitet. Gleichzeitig
              bieten wir Käufern eine moderne, intuitive Suchplattform mit
              Filtern nach Kanton, Preis, Grösse und Typ.
            </p>
            <p>
              Heute arbeiten bereits über 120 Makler in der ganzen Schweiz mit
              CASA Switzerland. Unser KI-Agent bearbeitet täglich Hunderte von
              Anfragen — rund um die Uhr, in allen Landessprachen.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Unsere Werte
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Innovation
              </h3>
              <p className="text-sm text-gray-500">
                Wir nutzen neueste KI-Technologien, um den Immobilienmarkt
                effizienter und zugänglicher zu machen.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Vertrauen
              </h3>
              <p className="text-sm text-gray-500">
                Transparenz und Datenschutz nach Schweizer Standard stehen im
                Zentrum unserer Plattform.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Effizienz
              </h3>
              <p className="text-sm text-gray-500">
                Weniger Verwaltung, mehr Zeit für das Wesentliche — sowohl für
                Makler als auch für Käufer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Unser Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((person) => (
              <div
                key={person.name}
                className="rounded-xl border border-gray-100 p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-2xl font-bold text-brand-600">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm text-brand-600">{person.rolle}</p>
                <p className="mt-3 text-sm text-gray-500">
                  {person.beschreibung}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
