"use client";

import { useState } from "react";
import EnvelopeIntro from "../components/EnvelopeIntro";
import InviteContent from "../components/InviteContent";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}
      {opened && <InviteContent />}
    </>
  );
}
