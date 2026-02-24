"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { immobilien } from "@/data/immobilien";
import { formatCHF, formatFlaeche } from "@/lib/format";

export default function ImmobilieDetailPage() {
  const { id } = useParams();
  const property = immobilien.find((i) => i.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [formSent, setFormSent] = useState(false);

  if (!property) {
    return (
      <div className="section-padding text-center">
        <div className="container-wide mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">
            Immobilie nicht gefunden
          </h1>
          <p className="mt-2 text-gray-500">
            Das gesuchte Objekt existiert leider nicht.
          </p>
          <Link href="/immobilien" className="btn-primary mt-6 inline-block">
            Zurück zur Suche
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-wide mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-brand-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/immobilien" className="hover:text-brand-600">
            Immobilien
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{property.titel}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="mb-6 overflow-hidden rounded-xl bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={property.bilder[activeImage]}
                alt={property.titel}
                className="h-80 w-full object-cover sm:h-96 lg:h-[28rem]"
              />
            </div>
            {property.bilder.length > 1 && (
              <div className="mb-8 flex gap-2 overflow-x-auto">
                {property.bilder.map((bild, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 overflow-hidden rounded-lg border-2 ${
                      i === activeImage
                        ? "border-brand-500"
                        : "border-transparent"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={bild}
                      alt={`Bild ${i + 1}`}
                      className="h-20 w-28 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Details */}
            <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              {property.titel}
            </h1>
            <p className="mb-6 text-gray-500">
              {property.adresse} — {property.ort}, {property.kanton}
            </p>

            {/* Key Stats */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <p className="text-xs text-gray-400">Preis</p>
                <p className="mt-1 text-lg font-bold text-brand-600">
                  {formatCHF(property.preis)}
                </p>
              </div>
              {property.zimmer > 0 && (
                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="text-xs text-gray-400">Zimmer</p>
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {property.zimmer}
                  </p>
                </div>
              )}
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <p className="text-xs text-gray-400">Fläche</p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {formatFlaeche(property.flaeche)}
                </p>
              </div>
              {property.baujahr > 0 && (
                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="text-xs text-gray-400">Baujahr</p>
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {property.baujahr}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Beschreibung
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              {property.beschreibung}
            </p>

            {/* Features */}
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Merkmale
            </h2>
            <div className="mb-8 flex flex-wrap gap-2">
              {property.merkmale.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Map Placeholder */}
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Lage</h2>
            <div className="mb-8 flex h-64 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              <div className="text-center">
                <svg
                  className="mx-auto h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-2 text-sm">{property.adresse}</p>
                <p className="text-xs text-gray-300">
                  Karte wird mit Google Maps geladen
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Agent Card */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-1 font-semibold text-gray-900">
                  {property.makler.name}
                </h3>
                <p className="mb-4 text-sm text-gray-500">
                  {property.makler.firma}
                </p>
                <a
                  href={`tel:${property.makler.telefon}`}
                  className="btn-primary mb-3 block w-full text-center"
                >
                  {property.makler.telefon}
                </a>
                <p className="text-center text-xs text-gray-400">
                  Oder nutzen Sie unser Kontaktformular
                </p>
              </div>

              {/* Contact Form */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-gray-900">
                  Anfrage senden
                </h3>

                {formSent ? (
                  <div className="rounded-lg bg-green-50 p-4 text-center">
                    <p className="font-medium text-green-800">
                      Anfrage gesendet!
                    </p>
                    <p className="mt-1 text-sm text-green-600">
                      Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSent(true);
                    }}
                    className="space-y-3"
                  >
                    <input
                      type="text"
                      placeholder="Ihr Name"
                      required
                      className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                    <input
                      type="email"
                      placeholder="Ihre E-Mail"
                      required
                      className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                    <input
                      type="tel"
                      placeholder="Telefon (optional)"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                    <textarea
                      rows={4}
                      placeholder="Ihre Nachricht..."
                      defaultValue={`Guten Tag,\n\nich interessiere mich für das Objekt "${property.titel}". Bitte kontaktieren Sie mich für weitere Informationen.\n\nFreundliche Grüsse`}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                    <button type="submit" className="btn-primary w-full">
                      Anfrage senden
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
