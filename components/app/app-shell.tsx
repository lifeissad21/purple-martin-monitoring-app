"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Bird, Binoculars, CalendarDays, LayoutDashboard, MapPin, Menu, Plus, Settings, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AppProvider } from "@/components/app/app-provider"

const navigation = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/colonies", label: "Colonies", icon: MapPin },
  { href: "/dashboard/observations", label: "Observations", icon: Binoculars },
  { href: "/dashboard/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/dashboard/reports", label: "Reports", icon: BarChart3 },
]

function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const title = navigation.find((item) => item.href === pathname)?.label ?? (pathname.includes("/new") ? "Add record" : "Purple Martin Watchers")

  const sidebar = (
    <div className="flex h-full flex-col bg-[#17352d] text-white">
      <div className="flex h-20 items-center gap-3 px-5">
        <div className="flex size-10 items-center justify-center rounded-xl bg-[#d9f06d] text-[#17352d]"><Bird className="size-6" /></div>
        <div><p className="font-semibold leading-tight">Purple Martin</p><p className="text-sm text-white/60">Watchers</p></div>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Main navigation">
        {navigation.map(({ href, label, icon: Icon }) => {
          const active = href === "/dashboard" ? pathname === href : pathname.startsWith(href)
          return <Link key={href} href={href} onClick={() => setOpen(false)} className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", active ? "bg-white/12 text-white" : "text-white/65 hover:bg-white/8 hover:text-white")}><Icon className="size-4.5" />{label}</Link>
        })}
      </nav>
      <div className="border-t border-white/10 p-3">
        <Link href="/dashboard/settings" onClick={() => setOpen(false)} className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium", pathname.startsWith("/dashboard/settings") ? "bg-white/12" : "text-white/65 hover:text-white")}><Settings className="size-4.5" />Settings</Link>
        <div className="mt-3 flex items-center gap-3 rounded-xl bg-white/7 p-3"><div className="flex size-9 items-center justify-center rounded-full bg-[#d9f06d] text-sm font-bold text-[#17352d]">AM</div><div className="min-w-0"><p className="truncate text-sm font-medium">Alex Morgan</p><p className="truncate text-xs text-white/50">Volunteer observer</p></div></div>
      </div>
    </div>
  )

  return (
    <div className="min-h-svh bg-[#f5f6f1] lg:grid lg:grid-cols-[248px_1fr]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[248px] lg:block">{sidebar}</aside>
      {open && <div className="fixed inset-0 z-40 lg:hidden"><button aria-label="Close menu" className="absolute inset-0 bg-black/45" onClick={() => setOpen(false)} /><aside className="relative h-full w-[280px] shadow-xl">{sidebar}<Button variant="ghost" size="icon" className="absolute right-2 top-2 text-white" onClick={() => setOpen(false)}><X /></Button></aside></div>}
      <div className="lg:col-start-2">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white/90 px-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(true)}><Menu /></Button><h1 className="text-lg font-semibold">{title}</h1></div>
          <Button asChild className="bg-[#17352d] hover:bg-[#234b40]"><Link href="/dashboard/observations/new"><Plus /> <span className="hidden sm:inline">Log observation</span></Link></Button>
        </header>
        <div className="mx-auto max-w-7xl p-4 md:p-8">{children}</div>
      </div>
    </div>
  )
}

export function AppShell({ children }: { children: ReactNode }) {
  return <AppProvider><Shell>{children}</Shell></AppProvider>
}
