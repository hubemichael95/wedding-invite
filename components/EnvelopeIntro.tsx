"use client";

import { useState } from "react";

export default function EnvelopeIntro({
  onOpen,
}: {
  onOpen: () => void;
}) {
  const [opening, setOpening] = useState(false);

  function handleClick() {
    if (opening) return;

    setOpening(true);

    // wait for animation to finish before showing invite
    setTimeout(() => {
      onOpen();
    }, 900);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f6f1ea]">
      <button
        type="button"
        aria-label="Open invitation"
        onClick={handleClick}
        className="relative h-[240px] w-[360px] max-w-[90vw] cursor-pointer bg-transparent"
      >
        {/* envelope body */}
        <div className="absolute inset-0 rounded-xl bg-[#e8dfd3] shadow-xl" />

        {/* letter */}
        <div
          className={`absolute left-[10%] bottom-[10%] h-[80%] w-[80%] rounded-xl bg-white shadow-lg flex items-center justify-center transition-all duration-700 ${
            opening
              ? "-translate-y-16 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center">
            <p className="text-sm opacity-60">
              {opening ? "Opening..." : "Tap to open invitation"}
            </p>
          </div>
        </div>

        {/* flap */}
        <div
          className="absolute inset-0 rounded-xl bg-[#efe7dd] transition-transform duration-700"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 60%)",
            transformOrigin: "top",
            transform: opening
              ? "rotateX(180deg)"
              : "rotateX(0deg)",
          }}
        />
      </button>
    </div>
  );
}
