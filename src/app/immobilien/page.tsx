import { Suspense } from "react";
import ImmobilienSuche from "@/components/ImmobilienSuche";

export default function ImmobilienPage() {
  return (
    <Suspense
      fallback={
        <div className="section-padding">
          <div className="container-wide mx-auto">
            <h1 className="mb-2 text-3xl font-bold text-white">
              Immobilien suchen
            </h1>
            <p className="mb-8 text-muted">Laden...</p>
          </div>
        </div>
      }
    >
      <ImmobilienSuche />
    </Suspense>
  );
}
