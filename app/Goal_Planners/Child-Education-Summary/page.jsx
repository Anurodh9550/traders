"use client";

import { Suspense } from "react";
import ChildEducationSummaryInner from "./ChildEducationSummaryInner";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ChildEducationSummaryInner />
    </Suspense>
  );
}
