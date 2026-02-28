import Link from "next/link";
import { Immobilie } from "@/data/immobilien";
import { formatCHF, formatFlaeche } from "@/lib/format";

export default function PropertyCard({ property }: { property: Immobilie }) {
  return (
    <Link
      href={`/immobilien/${property.id}`}
      className="group glass-card-hover overflow-hidden"
    >
      <div className="relative h-52 overflow-hidden bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.bilder[0]}
          alt={property.titel}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {property.typ}
        </span>
        <div className="absolute bottom-3 left-3 right-3">
          <span className="text-lg font-bold text-white">
            {formatCHF(property.preis)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mb-1 font-semibold text-white transition-colors group-hover:text-accent-light">
          {property.titel}
        </h3>
        <p className="mb-4 text-sm text-muted">
          {property.ort}, {property.kanton}
        </p>

        <div className="flex items-center gap-3">
          {property.zimmer > 0 && (
            <span className="rounded-lg bg-surface px-2.5 py-1 text-xs text-muted">
              {property.zimmer} Zimmer
            </span>
          )}
          <span className="rounded-lg bg-surface px-2.5 py-1 text-xs text-muted">
            {formatFlaeche(property.flaeche)}
          </span>
        </div>
      </div>
    </Link>
  );
}
