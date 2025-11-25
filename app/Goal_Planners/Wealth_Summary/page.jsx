"use client";

import { Suspense } from "react";
import WealthSummaryInner from "./WealthSummaryInner";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <WealthSummaryInner />
    </Suspense>
  );
}
