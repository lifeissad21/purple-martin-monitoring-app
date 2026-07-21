"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { seedData } from "@/lib/seed-data"
import type { AppData, AppSettings, Colony, Observation } from "@/lib/types"

const STORAGE_KEY = "purple-martin-watchers-data-v1"

interface AppContextValue extends AppData {
  hydrated: boolean
  addColony: (colony: Omit<Colony, "id">) => void
  updateColony: (id: string, updates: Partial<Colony>) => void
  removeColony: (id: string) => void
  addObservation: (observation: Omit<Observation, "id">) => void
  removeObservation: (id: string) => void
  updateSettings: (settings: AppSettings) => void
  resetDemo: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(seedData)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        try { setData(JSON.parse(stored) as AppData) } catch { window.localStorage.removeItem(STORAGE_KEY) }
      }
      setHydrated(true)
    }, 0)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data, hydrated])

  const addColony = (colony: Omit<Colony, "id">) => setData((current) => ({ ...current, colonies: [...current.colonies, { ...colony, id: crypto.randomUUID() }] }))
  const updateColony = (id: string, updates: Partial<Colony>) => setData((current) => ({ ...current, colonies: current.colonies.map((colony) => colony.id === id ? { ...colony, ...updates } : colony) }))
  const removeColony = (id: string) => setData((current) => ({ ...current, colonies: current.colonies.filter((colony) => colony.id !== id), observations: current.observations.filter((observation) => observation.colonyId !== id) }))
  const addObservation = (observation: Omit<Observation, "id">) => setData((current) => ({ ...current, observations: [{ ...observation, id: crypto.randomUUID() }, ...current.observations], colonies: current.colonies.map((colony) => colony.id === observation.colonyId ? { ...colony, eggs: observation.eggs, nestlings: observation.nestlings, lastChecked: observation.date } : colony) }))
  const removeObservation = (id: string) => setData((current) => ({ ...current, observations: current.observations.filter((observation) => observation.id !== id) }))
  const updateSettings = (settings: AppSettings) => setData((current) => ({ ...current, settings }))
  const resetDemo = () => setData(seedData)

  return <AppContext.Provider value={{ ...data, hydrated, addColony, updateColony, removeColony, addObservation, removeObservation, updateSettings, resetDemo }}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error("useApp must be used within AppProvider")
  return context
}
