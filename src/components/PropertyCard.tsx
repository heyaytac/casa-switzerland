import Link from "next/link";
import { Immobilie } from "@/data/immobilien";
import { formatCHF, formatFlaeche } from "@/lib/format";

export default function PropertyCard({ property }: { property: Immobilie }) {
  return (
    <Link
      href={`/immobilien/${property.id}`}
      className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-52 overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.bilder[0]}
          alt={property.titel}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-medium text-white">
          {property.typ}
        </span>
      </div>

      <div className="p-5">
        <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-brand-600">
          {property.titel}
        </h3>
        <p className="mb-3 text-sm text-gray-500">
          {property.ort}, {property.kanton}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-brand-600">
            {formatCHF(property.preis)}
          </span>
          <div className="flex gap-3 text-xs text-gray-500">
            {property.zimmer > 0 && <span>{property.zimmer} Zi.</span>}
            <span>{formatFlaeche(property.flaeche)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
