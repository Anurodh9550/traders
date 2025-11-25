"use client";

import { Suspense } from "react";
import ChildWeddingSummaryInner from "./ChildWeddingSummaryInner";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ChildWeddingSummaryInner />
    </Suspense>
  );
}
