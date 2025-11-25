"use client";

import { Suspense } from "react";
import DreamHomeSummaryInner from "./DreamHomeSummaryInner";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <DreamHomeSummaryInner />
    </Suspense>
  );
}
