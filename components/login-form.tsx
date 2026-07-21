"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { cn } from "@/lib/utils"
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const enterApp = (event: FormEvent) => {
    event.preventDefault()
    router.push("/dashboard")
  }

  const signInWithGoogle = async () => {
    const auth = getFirebaseAuth()
    if (!auth) {
      router.push("/dashboard")
      return
    }
    setLoading(true)
    setError("")
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
      router.push("/dashboard")
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Google sign-in failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={enterApp} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Sign in to continue monitoring your colonies
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="observer@example.com" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Continue to app</Button>
          <FieldDescription className="text-center">
            Local mode keeps monitoring data in this browser.
          </FieldDescription>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button variant="outline" type="button" disabled={loading} onClick={signInWithGoogle}>
            {loading ? "Connecting…" : "Google"}
          </Button>
          <FieldDescription className="text-center">
            {isFirebaseConfigured ? "Uses the project’s Firebase authentication." : "Firebase is not configured; this opens local mode."}
          </FieldDescription>
          {error && <p role="alert" className="text-destructive text-center text-sm">{error}</p>}
        </Field>
      </FieldGroup>
    </form>
  )
}
