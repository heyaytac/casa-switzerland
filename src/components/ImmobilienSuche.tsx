"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { immobilien, ImmobilienTyp } from "@/data/immobilien";
import { kantone } from "@/data/kantone";
import PropertyCard from "@/components/PropertyCard";

const typen: ImmobilienTyp[] = ["Wohnung", "Haus", "Gewerbe", "Grundstück"];

const preisOptionen = [
  { label: "Alle Preise", min: 0, max: Infinity },
  { label: "Bis CHF 500'000", min: 0, max: 500000 },
  { label: "CHF 500'000 – 1'000'000", min: 500000, max: 1000000 },
  { label: "CHF 1'000'000 – 2'000'000", min: 1000000, max: 2000000 },
  { label: "Über CHF 2'000'000", min: 2000000, max: Infinity },
];

export default function ImmobilienSuche() {
  const searchParams = useSearchParams();

  const [kanton, setKanton] = useState(searchParams.get("kanton") || "");
  const [typ, setTyp] = useState(searchParams.get("typ") || "");
  const [preisIndex, setPreisIndex] = useState(0);
  const [zimmerMin, setZimmerMin] = useState("");
  const [sortierung, setSortierung] = useState("neueste");

  const filtered = useMemo(() => {
    let result = [...immobilien];

    if (kanton) result = result.filter((i) => i.kanton === kanton);
    if (typ) result = result.filter((i) => i.typ === typ);

    const preis = preisOptionen[preisIndex];
    result = result.filter(
      (i) => i.preis >= preis.min && i.preis <= preis.max
    );

    if (zimmerMin) {
      const min = parseFloat(zimmerMin);
      result = result.filter((i) => i.zimmer >= min);
    }

    if (sortierung === "preis-aufsteigend")
      result.sort((a, b) => a.preis - b.preis);
    else if (sortierung === "preis-absteigend")
      result.sort((a, b) => b.preis - a.preis);
    else if (sortierung === "flaeche")
      result.sort((a, b) => b.flaeche - a.flaeche);

    return result;
  }, [kanton, typ, preisIndex, zimmerMin, sortierung]);

  return (
    <div className="section-padding">
      <div className="container-wide mx-auto">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Immobilien suchen
        </h1>
        <p className="mb-8 text-muted">
          {filtered.length} Objekt{filtered.length !== 1 ? "e" : ""} gefunden
        </p>

        {/* Filters */}
        <div className="mb-8 grid gap-3 rounded-2xl border border-surface-border bg-surface-light/80 p-4 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5">
          <select
            value={kanton}
            onChange={(e) => setKanton(e.target.value)}
            className="select-dark"
          >
            <option value="">Alle Kantone</option>
            {kantone.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>

          <select
            value={typ}
            onChange={(e) => setTyp(e.target.value)}
            className="select-dark"
          >
            <option value="">Alle Typen</option>
            {typen.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            value={preisIndex}
            onChange={(e) => setPreisIndex(Number(e.target.value))}
            className="select-dark"
          >
            {preisOptionen.map((p, i) => (
              <option key={i} value={i}>
                {p.label}
              </option>
            ))}
          </select>

          <select
            value={zimmerMin}
            onChange={(e) => setZimmerMin(e.target.value)}
            className="select-dark"
          >
            <option value="">Zimmer (alle)</option>
            <option value="1">1+ Zimmer</option>
            <option value="2">2+ Zimmer</option>
            <option value="3">3+ Zimmer</option>
            <option value="4">4+ Zimmer</option>
            <option value="5">5+ Zimmer</option>
          </select>

          <select
            value={sortierung}
            onChange={(e) => setSortierung(e.target.value)}
            className="select-dark"
          >
            <option value="neueste">Neueste zuerst</option>
            <option value="preis-aufsteigend">Preis aufsteigend</option>
            <option value="preis-absteigend">Preis absteigend</option>
            <option value="flaeche">Grösste Fläche</option>
          </select>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="glass-card py-20 text-center">
            <p className="text-lg font-medium text-white">
              Keine Objekte gefunden
            </p>
            <p className="mt-2 text-sm text-muted">
              Versuchen Sie, Ihre Filterkriterien anzupassen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
