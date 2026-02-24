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
          <div className="rounded-xl border border-green-200 bg-green-50 p-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
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
            <h1 className="text-2xl font-bold text-green-800">
              Registrierung erfolgreich!
            </h1>
            <p className="mt-3 text-green-600">
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
          <h1 className="text-3xl font-bold text-gray-900">
            Makler Registrierung
          </h1>
          <p className="mt-2 text-gray-500">
            Erstellen Sie Ihr kostenloses Maklerprofil und starten Sie mit CASA
            Switzerland.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
        >
          {/* Personal */}
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Persönliche Angaben
          </h2>
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Vorname *
              </label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nachname *
              </label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                E-Mail *
              </label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Telefon *
              </label>
              <input
                type="tel"
                required
                placeholder="+41 ..."
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Company */}
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Firma
          </h2>
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Firmenname *
              </label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Kanton *
              </label>
              <select
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                defaultValue=""
              >
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
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Ort *
              </label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Webseite
              </label>
              <input
                type="url"
                placeholder="https://..."
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Interests */}
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Interessen
          </h2>
          <div className="mb-6 space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-sm text-gray-700">
                KI-Telefonagent nutzen
              </span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-sm text-gray-700">
                Automatische Inserat-Erstellung
              </span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-sm text-gray-700">
                Marktanalysen und Preisvorschläge
              </span>
            </label>
          </div>

          {/* Terms */}
          <label className="mb-6 flex items-start gap-3">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
            />
            <span className="text-sm text-gray-600">
              Ich akzeptiere die Nutzungsbedingungen und Datenschutzrichtlinien
              von CASA Switzerland. *
            </span>
          </label>

          <button type="submit" className="btn-primary w-full">
            Kostenlos registrieren
          </button>

          <p className="mt-4 text-center text-xs text-gray-400">
            Bereits registriert?{" "}
            <Link
              href="/dashboard"
              className="text-brand-600 hover:text-brand-700"
            >
              Zum Dashboard
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
