"use client";

import { useState } from "react";
import Link from "next/link";
import { kantone } from "@/data/kantone";

export default function RegistrierenPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="section-padding">
        <div className="container-wide mx-auto max-w-lg text-center">
          <div className="glass-card p-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
              <svg
                className="h-8 w-8 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Registrierung erfolgreich!
            </h1>
            <p className="mt-3 text-muted">
              Vielen Dank für Ihre Anmeldung. Wir werden uns innerhalb von 24
              Stunden bei Ihnen melden, um Ihr Konto zu aktivieren.
            </p>
            <Link href="/" className="btn-primary mt-6 inline-block">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-wide mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Makler Registrierung
          </h1>
          <p className="mt-2 text-muted">
            Erstellen Sie Ihr kostenloses Maklerprofil und starten Sie mit CASA
            Switzerland.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="glass-card p-8"
        >
          {/* Personal */}
          <h2 className="mb-4 text-lg font-semibold text-white">
            Persönliche Angaben
          </h2>
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label-dark">Vorname *</label>
              <input type="text" required className="input-dark" />
            </div>
            <div>
              <label className="label-dark">Nachname *</label>
              <input type="text" required className="input-dark" />
            </div>
            <div>
              <label className="label-dark">E-Mail *</label>
              <input type="email" required className="input-dark" />
            </div>
            <div>
              <label className="label-dark">Telefon *</label>
              <input
                type="tel"
                required
                placeholder="+41 ..."
                className="input-dark"
              />
            </div>
          </div>

          {/* Company */}
          <h2 className="mb-4 text-lg font-semibold text-white">Firma</h2>
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="label-dark">Firmenname *</label>
              <input type="text" required className="input-dark" />
            </div>
            <div>
              <label className="label-dark">Kanton *</label>
              <select required className="select-dark" defaultValue="">
                <option value="" disabled>
                  Kanton wählen
                </option>
                {kantone.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-dark">Ort *</label>
              <input type="text" required className="input-dark" />
            </div>
            <div className="sm:col-span-2">
              <label className="label-dark">Webseite</label>
              <input
                type="url"
                placeholder="https://..."
                className="input-dark"
              />
            </div>
          </div>

          {/* Interests */}
          <h2 className="mb-4 text-lg font-semibold text-white">Interessen</h2>
          <div className="mb-8 space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-surface-border bg-surface text-accent focus:ring-accent"
              />
              <span className="text-sm text-gray-300">
                KI-Telefonagent nutzen
              </span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-surface-border bg-surface text-accent focus:ring-accent"
              />
              <span className="text-sm text-gray-300">
                Automatische Inserat-Erstellung
              </span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-surface-border bg-surface text-accent focus:ring-accent"
              />
              <span className="text-sm text-gray-300">
                Marktanalysen und Preisvorschläge
              </span>
            </label>
          </div>

          {/* Terms */}
          <label className="mb-6 flex items-start gap-3">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-surface-border bg-surface text-accent focus:ring-accent"
            />
            <span className="text-sm text-muted">
              Ich akzeptiere die Nutzungsbedingungen und
              Datenschutzrichtlinien von CASA Switzerland. *
            </span>
          </label>

          <button type="submit" className="btn-primary w-full">
            Kostenlos registrieren
          </button>

          <p className="mt-4 text-center text-xs text-muted-dark">
            Bereits registriert?{" "}
            <Link
              href="/dashboard"
              className="text-accent-light hover:text-accent"
            >
              Zum Dashboard
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
