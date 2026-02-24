import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KI Telefonagent – CASA Switzerland",
  description:
    "Eine Nummer für alle Makler. Unser KI-Telefonagent nimmt Anrufe entgegen, beantwortet Fragen und leitet Anfragen weiter.",
};

export default function KiTelefonagentPage() {
  const features = [
    {
      titel: "Eine Nummer für alle",
      beschreibung:
        "Kunden rufen eine einzige Nummer an. Der KI-Agent erkennt automatisch, zu welchem Makler und Objekt die Anfrage gehört und leitet entsprechend weiter.",
    },
    {
      titel: "Natürliche Gespräche",
      beschreibung:
        "Unser Agent spricht fliessend Deutsch und versteht auch Schweizer Dialekt. Kunden merken kaum, dass sie mit einer KI sprechen.",
    },
    {
      titel: "Sofortige Antworten",
      beschreibung:
        "Preis, Verfügbarkeit, Fläche, Lage — der Agent hat alle Objektdaten sofort parat und beantwortet Fragen kompetent und professionell.",
    },
    {
      titel: "Terminvereinbarung",
      beschreibung:
        "Der KI-Agent kann direkt Besichtigungstermine vorschlagen und in Ihren Kalender eintragen. Sie erhalten nur noch bestätigte Termine.",
    },
    {
      titel: "Lead-Qualifizierung",
      beschreibung:
        "Nicht jeder Anruf ist ein heisser Lead. Der Agent stellt die richtigen Fragen und priorisiert die vielversprechendsten Anfragen für Sie.",
    },
    {
      titel: "Lückenlose Dokumentation",
      beschreibung:
        "Jedes Gespräch wird zusammengefasst und in Ihrem Dashboard gespeichert. Kein Detail geht verloren, auch wenn Sie nicht persönlich gesprochen haben.",
    },
  ];

  const ablauf = [
    {
      schritt: "Anruf eingehend",
      detail:
        "Kunde ruft die CASA-Nummer an und wird vom KI-Agenten begrüsst.",
    },
    {
      schritt: "Bedarf erkennen",
      detail:
        "Der Agent identifiziert das Objekt und die Fragen des Kunden automatisch.",
    },
    {
      schritt: "Fragen beantworten",
      detail:
        "Alle relevanten Informationen werden kompetent und freundlich mitgeteilt.",
    },
    {
      schritt: "Aktion auslösen",
      detail:
        "Termin vereinbaren, Unterlagen senden oder an den Makler weiterleiten.",
    },
    {
      schritt: "Zusammenfassung",
      detail:
        "Der Makler erhält sofort eine Zusammenfassung im Dashboard.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wide mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm text-brand-200">
              Powered by AI
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Der KI-Telefonagent
              <br />
              für Schweizer Makler
            </h1>
            <p className="mt-5 text-lg text-brand-200">
              Eine einzige Telefonnummer für alle Ihre Objekte. Unser
              KI-Agent nimmt Anrufe entgegen, beantwortet Fragen und bringt
              Ihnen qualifizierte Leads — 24 Stunden am Tag, 7 Tage die
              Woche.
            </p>

            <div className="mt-10 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm text-brand-200">
                CASA Switzerland KI-Nummer
              </p>
              <p className="mt-1 text-3xl font-bold tracking-wider">
                +41 800 272 200
              </p>
              <p className="mt-2 text-sm text-brand-300">
                Testen Sie unseren Agenten — rufen Sie jetzt an!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Was kann der KI-Telefonagent?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">
            Modernste Sprach-KI, trainiert auf den Schweizer Immobilienmarkt.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.titel}
                className="rounded-xl border border-gray-100 p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {f.titel}
                </h3>
                <p className="text-sm text-gray-500">{f.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            So funktioniert ein Anruf
          </h2>

          <div className="mx-auto max-w-2xl">
            {ablauf.map((a, i) => (
              <div key={i} className="flex gap-4 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < ablauf.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-brand-200" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold text-gray-900">{a.schritt}</h3>
                  <p className="mt-1 text-sm text-gray-500">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-brand-50 p-6 text-center">
              <p className="text-3xl font-bold text-brand-600">98%</p>
              <p className="mt-1 text-sm text-gray-600">
                Anrufe erfolgreich bearbeitet
              </p>
            </div>
            <div className="rounded-xl bg-brand-50 p-6 text-center">
              <p className="text-3xl font-bold text-brand-600">&lt;3 Sek</p>
              <p className="mt-1 text-sm text-gray-600">
                Durchschnittliche Antwortzeit
              </p>
            </div>
            <div className="rounded-xl bg-brand-50 p-6 text-center">
              <p className="text-3xl font-bold text-brand-600">24/7</p>
              <p className="mt-1 text-sm text-gray-600">
                Erreichbarkeit garantiert
              </p>
            </div>
            <div className="rounded-xl bg-brand-50 p-6 text-center">
              <p className="text-3xl font-bold text-brand-600">94%</p>
              <p className="mt-1 text-sm text-gray-600">
                Kundenzufriedenheit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto rounded-2xl bg-brand-600 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">
            Lassen Sie die KI für sich arbeiten
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-brand-100">
            Registrieren Sie sich als Makler und aktivieren Sie den
            KI-Telefonagenten für Ihre Objekte. Keine zusätzlichen Kosten.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/fuer-makler/registrieren"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Jetzt als Makler registrieren
            </Link>
            <Link
              href="/fuer-makler"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Alle Makler-Vorteile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
