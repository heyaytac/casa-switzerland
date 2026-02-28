import type { Metadata } from "next";
import Link from "next/link";
import { immobilien } from "@/data/immobilien";
import { formatCHF } from "@/lib/format";

export const metadata: Metadata = {
  title: "Makler Dashboard – CASA Switzerland",
  description:
    "Verwalten Sie Ihre Immobilien, Leads und KI-Anrufstatistiken.",
};

export default function DashboardPage() {
  const meineObjekte = immobilien.slice(0, 3);

  const stats = [
    { label: "Aktive Inserate", value: "12", trend: "+2 diese Woche" },
    { label: "Neue Leads", value: "28", trend: "+8 diese Woche" },
    { label: "KI-Anrufe", value: "156", trend: "Dieser Monat" },
    { label: "Besichtigungen", value: "9", trend: "Geplant" },
  ];

  const recentLeads = [
    {
      name: "Maria Frei",
      objekt: "Moderne 4.5-Zimmer-Wohnung",
      zeit: "Vor 2 Stunden",
      typ: "Telefon",
    },
    {
      name: "Hans Gerber",
      objekt: "Charmantes Einfamilienhaus",
      zeit: "Vor 5 Stunden",
      typ: "Formular",
    },
    {
      name: "Lisa König",
      objekt: "Luxus-Penthouse",
      zeit: "Gestern",
      typ: "Telefon",
    },
    {
      name: "Peter Steiner",
      objekt: "Stilvolle 3.5-Zimmer-Wohnung",
      zeit: "Gestern",
      typ: "E-Mail",
    },
    {
      name: "Andrea Moser",
      objekt: "Bergchalet in Graubünden",
      zeit: "Vor 2 Tagen",
      typ: "Telefon",
    },
  ];

  return (
    <div className="section-padding">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Willkommen, Thomas
            </h1>
            <p className="text-sm text-muted">
              Zürich Immobilien AG — Dashboard-Übersicht
            </p>
          </div>
          <Link href="/immobilien" className="btn-primary text-sm">
            + Neues Inserat
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6">
              <p className="text-sm text-muted">{stat.label}</p>
              <p className="mt-1 text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-accent-light">{stat.trend}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Recent Leads */}
          <div className="lg:col-span-2">
            <div className="glass-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-surface-border px-6 py-4">
                <h2 className="font-semibold text-white">Neue Leads</h2>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-light">
                  {recentLeads.length} neu
                </span>
              </div>
              <div className="divide-y divide-surface-border">
                {recentLeads.map((lead, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-surface-lighter/50"
                  >
                    <div>
                      <p className="font-medium text-white">{lead.name}</p>
                      <p className="text-sm text-muted">{lead.objekt}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          lead.typ === "Telefon"
                            ? "bg-accent/10 text-accent-light"
                            : lead.typ === "Formular"
                              ? "bg-green-500/10 text-green-400"
                              : "bg-surface-lighter text-muted"
                        }`}
                      >
                        {lead.typ}
                      </span>
                      <p className="mt-1 text-xs text-muted-dark">
                        {lead.zeit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* KI Stats */}
            <div className="glass-card p-6">
              <h2 className="mb-4 font-semibold text-white">
                KI-Telefonagent
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted">Anrufe heute</span>
                  <span className="font-medium text-white">7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted">
                    Durchschnittliche Dauer
                  </span>
                  <span className="font-medium text-white">2:34 Min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted">Weitergeleitet</span>
                  <span className="font-medium text-white">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted">Zufriedenheit</span>
                  <span className="font-medium text-green-400">94%</span>
                </div>
              </div>
              <Link
                href="/ki-telefonagent"
                className="mt-4 block text-center text-sm font-medium text-accent-light transition-colors hover:text-accent"
              >
                Details ansehen →
              </Link>
            </div>

            {/* My Properties */}
            <div className="glass-card p-6">
              <h2 className="mb-4 font-semibold text-white">Meine Objekte</h2>
              <div className="space-y-3">
                {meineObjekte.map((obj) => (
                  <Link
                    key={obj.id}
                    href={`/immobilien/${obj.id}`}
                    className="block rounded-xl border border-surface-border p-3 transition-all hover:border-muted-dark hover:bg-surface-lighter"
                  >
                    <p className="truncate text-sm font-medium text-white">
                      {obj.titel}
                    </p>
                    <div className="mt-1 flex justify-between text-xs text-muted">
                      <span>{obj.ort}</span>
                      <span className="font-medium text-accent-light">
                        {formatCHF(obj.preis)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
