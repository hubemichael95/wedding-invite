"use client"

import { useState } from "react"
import EnvelopeIntro from "../components/EnvelopeIntro"
import InviteContent from "../components/InviteContent"

export default function Page() {
  const [opened, setOpened] = useState(false)

  return (
    <main>
      {!opened && (
        <EnvelopeIntro onOpen={() => setOpened(true)} />
      )}

      {opened && (
        <InviteContent />
      )}
    </main>
  )
}
