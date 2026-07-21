import type { AppData } from "@/lib/types"

export const seedData: AppData = {
  colonies: [
    { id: "riverside", name: "Riverside Gourd Rack", location: "Riverside Park, Richmond, VA", latitude: 37.5407, longitude: -77.436, compartments: 24, occupied: 18, eggs: 34, nestlings: 21, status: "Active", lastChecked: "2026-07-18", notes: "Strong colony with several late broods. Check gourds 19–24 next visit." },
    { id: "meadow", name: "North Meadow House", location: "North Meadow Preserve, Ashland, VA", latitude: 37.759, longitude: -77.479, compartments: 12, occupied: 8, eggs: 6, nestlings: 17, status: "Needs attention", lastChecked: "2026-07-14", notes: "Compartment 7 latch is loose. Bring replacement hardware." },
    { id: "school", name: "Oak Hill School", location: "Oak Hill Elementary, Glen Allen, VA", latitude: 37.665, longitude: -77.506, compartments: 16, occupied: 11, eggs: 12, nestlings: 9, status: "Active", lastChecked: "2026-07-17", notes: "Student monitoring site. Coordinate weekday visits with front office." },
  ],
  observations: [
    { id: "obs-1", colonyId: "riverside", date: "2026-07-18", time: "07:30", type: "Nest check", adults: 26, eggs: 34, nestlings: 21, fledglings: 8, weather: "Clear, 74°F", notes: "All active gourds dry and clean. Banded two nestlings." },
    { id: "obs-2", colonyId: "school", date: "2026-07-17", time: "09:15", type: "Routine check", adults: 18, eggs: 12, nestlings: 9, fledglings: 4, weather: "Partly cloudy, 79°F", notes: "Heavy feeding activity. No signs of predators." },
    { id: "obs-3", colonyId: "meadow", date: "2026-07-14", time: "18:10", type: "Maintenance", adults: 12, eggs: 6, nestlings: 17, fledglings: 6, weather: "Humid, 83°F", notes: "Tightened pole winch. Compartment 7 latch still needs replacement." },
    { id: "obs-4", colonyId: "riverside", date: "2026-07-10", time: "07:45", type: "Routine check", adults: 29, eggs: 40, nestlings: 16, fledglings: 2, weather: "Clear, 71°F", notes: "First fledglings from gourds 3 and 4." },
    { id: "obs-5", colonyId: "school", date: "2026-07-03", time: "08:30", type: "Nest check", adults: 16, eggs: 18, nestlings: 5, fledglings: 0, weather: "Cloudy, 72°F", notes: "Healthy broods; replaced wet nesting material in compartment 12." },
  ],
  settings: { observerName: "Alex Morgan", email: "alex@example.com", seasonStart: "2026-03-01", units: "imperial", weeklyReminder: true, arrivalAlerts: true },
}
