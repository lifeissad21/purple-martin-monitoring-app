export type ColonyStatus = "Active" | "Needs attention" | "Inactive"
export type ObservationType = "Arrival" | "Routine check" | "Nest check" | "Fledging" | "Maintenance"

export interface Colony {
  id: string
  name: string
  location: string
  latitude: number
  longitude: number
  compartments: number
  occupied: number
  eggs: number
  nestlings: number
  status: ColonyStatus
  lastChecked: string
  notes: string
}

export interface Observation {
  id: string
  colonyId: string
  date: string
  time: string
  type: ObservationType
  adults: number
  eggs: number
  nestlings: number
  fledglings: number
  weather: string
  notes: string
}

export interface AppSettings {
  observerName: string
  email: string
  seasonStart: string
  units: "imperial" | "metric"
  weeklyReminder: boolean
  arrivalAlerts: boolean
}

export interface AppData {
  colonies: Colony[]
  observations: Observation[]
  settings: AppSettings
}
