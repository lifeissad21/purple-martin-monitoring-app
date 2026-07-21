import { ObservationForm } from "@/components/app/screens"

export default async function NewObservationPage({ searchParams }: { searchParams: Promise<{ colony?: string }> }) {
  const { colony } = await searchParams
  return <ObservationForm defaultColony={colony} />
}
