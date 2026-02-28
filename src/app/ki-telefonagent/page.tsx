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
      detail: "Der Makler erhält sofort eine Zusammenfassung im Dashboard.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="container-wide relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-surface-border bg-surface-light px-4 py-1.5 text-sm text-muted">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-400" />
              Powered by AI
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Der KI-Telefonagent
              <br />
              <span className="gradient-text-accent">für Schweizer Makler</span>
            </h1>
            <p className="mt-5 text-lg text-muted">
              Eine einzige Telefonnummer für alle Ihre Objekte. Unser KI-Agent
              nimmt Anrufe entgegen, beantwortet Fragen und bringt Ihnen
              qualifizierte Leads — 24 Stunden am Tag, 7 Tage die Woche.
            </p>

            <div className="mx-auto mt-10 max-w-sm glass-card p-6 text-center">
              <p className="text-xs uppercase tracking-wider text-muted-dark">
                CASA Switzerland KI-Nummer
              </p>
              <p className="mt-2 text-3xl font-bold tracking-wider text-white">
                +41 800 272 200
              </p>
              <p className="mt-2 text-sm text-muted">
                Testen Sie unseren Agenten — rufen Sie jetzt an!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-4 text-center text-3xl font-bold text-white">
            Was kann der KI-Telefonagent?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted">
            Modernste Sprach-KI, trainiert auf den Schweizer Immobilienmarkt.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.titel} className="glass-card-hover p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {f.titel}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {f.beschreibung}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            So funktioniert ein Anruf
          </h2>

          <div className="mx-auto max-w-2xl">
            {ablauf.map((a, i) => (
              <div key={i} className="flex gap-4 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-surface-border bg-surface-light text-sm font-bold text-accent-light">
                    {i + 1}
                  </div>
                  {i < ablauf.length - 1 && (
                    <div className="mt-2 h-full w-px bg-surface-border" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold text-white">{a.schritt}</h3>
                  <p className="mt-1 text-sm text-muted">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-accent-light">98%</p>
              <p className="mt-1 text-sm text-muted">
                Anrufe erfolgreich bearbeitet
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-accent-light">&lt;3 Sek</p>
              <p className="mt-1 text-sm text-muted">
                Durchschnittliche Antwortzeit
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-accent-light">24/7</p>
              <p className="mt-1 text-sm text-muted">
                Erreichbarkeit garantiert
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-accent-light">94%</p>
              <p className="mt-1 text-sm text-muted">Kundenzufriedenheit</p>
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
                Lassen Sie die KI für sich arbeiten
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-muted">
                Registrieren Sie sich als Makler und aktivieren Sie den
                KI-Telefonagenten für Ihre Objekte. Keine zusätzlichen Kosten.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/fuer-makler/registrieren"
                  className="btn-primary"
                >
                  Jetzt als Makler registrieren
                </Link>
                <Link href="/fuer-makler" className="btn-secondary">
                  Alle Makler-Vorteile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
