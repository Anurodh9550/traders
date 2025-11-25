"use client";

import { Suspense } from "react";
import EmergencySummaryInner from "./EmergencySummaryInner";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <EmergencySummaryInner />
    </Suspense>
  );
}
