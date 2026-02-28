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
          <h1 className="text-2xl font-bold text-white">
            Immobilie nicht gefunden
          </h1>
          <p className="mt-2 text-muted">
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
        <nav className="mb-6 text-sm text-muted-dark">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/immobilien"
            className="transition-colors hover:text-white"
          >
            Immobilien
          </Link>
          <span className="mx-2">/</span>
          <span className="text-muted">{property.titel}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="mb-4 overflow-hidden rounded-2xl border border-surface-border bg-surface">
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
                    className={`flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                      i === activeImage
                        ? "border-accent"
                        : "border-surface-border opacity-60 hover:opacity-100"
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
            <h1 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
              {property.titel}
            </h1>
            <p className="mb-6 text-muted">
              {property.adresse} — {property.ort}, {property.kanton}
            </p>

            {/* Key Stats */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="glass-card p-4 text-center">
                <p className="text-xs text-muted-dark">Preis</p>
                <p className="mt-1 text-lg font-bold text-accent-light">
                  {formatCHF(property.preis)}
                </p>
              </div>
              {property.zimmer > 0 && (
                <div className="glass-card p-4 text-center">
                  <p className="text-xs text-muted-dark">Zimmer</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {property.zimmer}
                  </p>
                </div>
              )}
              <div className="glass-card p-4 text-center">
                <p className="text-xs text-muted-dark">Fläche</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {formatFlaeche(property.flaeche)}
                </p>
              </div>
              {property.baujahr > 0 && (
                <div className="glass-card p-4 text-center">
                  <p className="text-xs text-muted-dark">Baujahr</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {property.baujahr}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <h2 className="mb-3 text-xl font-semibold text-white">
              Beschreibung
            </h2>
            <p className="mb-8 leading-relaxed text-muted">
              {property.beschreibung}
            </p>

            {/* Features */}
            <h2 className="mb-3 text-xl font-semibold text-white">Merkmale</h2>
            <div className="mb-8 flex flex-wrap gap-2">
              {property.merkmale.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-surface-border bg-surface-light px-4 py-1.5 text-sm text-muted"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Map Placeholder */}
            <h2 className="mb-3 text-xl font-semibold text-white">Lage</h2>
            <div className="glass-card mb-8 flex h-64 items-center justify-center text-muted-dark">
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
                <p className="mt-2 text-sm text-muted">{property.adresse}</p>
                <p className="text-xs text-muted-dark">
                  Karte wird mit Google Maps geladen
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Agent Card */}
              <div className="glass-card p-6">
                <h3 className="mb-1 font-semibold text-white">
                  {property.makler.name}
                </h3>
                <p className="mb-4 text-sm text-muted">
                  {property.makler.firma}
                </p>
                <a
                  href={`tel:${property.makler.telefon}`}
                  className="btn-primary mb-3 block w-full text-center"
                >
                  {property.makler.telefon}
                </a>
                <p className="text-center text-xs text-muted-dark">
                  Oder nutzen Sie unser Kontaktformular
                </p>
              </div>

              {/* Contact Form */}
              <div className="glass-card p-6">
                <h3 className="mb-4 font-semibold text-white">
                  Anfrage senden
                </h3>

                {formSent ? (
                  <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-center">
                    <p className="font-medium text-green-400">
                      Anfrage gesendet!
                    </p>
                    <p className="mt-1 text-sm text-green-400/70">
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
                      className="input-dark"
                    />
                    <input
                      type="email"
                      placeholder="Ihre E-Mail"
                      required
                      className="input-dark"
                    />
                    <input
                      type="tel"
                      placeholder="Telefon (optional)"
                      className="input-dark"
                    />
                    <textarea
                      rows={4}
                      placeholder="Ihre Nachricht..."
                      defaultValue={`Guten Tag,\n\nich interessiere mich für das Objekt "${property.titel}". Bitte kontaktieren Sie mich für weitere Informationen.\n\nFreundliche Grüsse`}
                      className="input-dark"
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
