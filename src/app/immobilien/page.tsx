import { Suspense } from "react";
import ImmobilienSuche from "@/components/ImmobilienSuche";

export default function ImmobilienPage() {
  return (
    <Suspense
      fallback={
        <div className="section-padding">
          <div className="container-wide mx-auto">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Immobilien suchen
            </h1>
            <p className="mb-8 text-gray-500">Laden...</p>
          </div>
        </div>
      }
    >
      <ImmobilienSuche />
    </Suspense>
  );
}
