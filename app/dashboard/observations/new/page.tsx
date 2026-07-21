"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { ObservationForm } from "@/components/app/screens"

function ObservationFormWithColony() {
  const searchParams = useSearchParams()
  return <ObservationForm defaultColony={searchParams.get("colony") ?? undefined} />
}

export default function NewObservationPage() {
  return (
    <Suspense fallback={<p className="text-muted-foreground py-12 text-center text-sm">Preparing observation form…</p>}>
      <ObservationFormWithColony />
    </Suspense>
  )
}
