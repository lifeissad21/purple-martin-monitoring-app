"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bird } from "lucide-react"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/dashboard")
  }, [router])

  return (
    <main className="flex min-h-svh items-center justify-center bg-[#f5f6f1]">
      <div className="text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#17352d] text-white">
          <Bird className="size-6" />
        </div>
        <p className="mt-4 text-sm font-medium text-[#38614f]">Opening Purple Martin Watchers…</p>
      </div>
    </main>
  )
}
