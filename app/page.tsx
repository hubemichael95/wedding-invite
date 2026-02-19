"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f6f1ea]">
          <div
            onClick={() => setOpened(true)}
            className="relative w-[360px] h-[240px] cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#e8dfd3] rounded-xl shadow-xl"></div>

            <div className="absolute inset-0 bg-[#efe7dd] rounded-xl"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 60%)",
                transformOrigin: "top",
                transform: opened ? "rotateX(180deg)" : "rotateX(0deg)",
                transition: "transform 0.8s ease",
              }}
            ></div>

            <div
              className={`absolute left-[10%] bottom-[10%] w-[80%] h-[80%] bg-white rounded-xl shadow-lg flex items-center justify-center transition-all duration-700 ${
                opened
                  ? "translate-y-[-20%] opacity-100"
                  : "translate-y-[30%] opacity-0"
              }`}
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold">Jordan & Taylor</h2>
                <p className="text-sm opacity-60">Tap to open invitation</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {opened && (
        <main className="min-h-screen flex flex-col items-center justify-center bg-[#fbf8f3] text-center">
          <h1 className="text-4xl mb-4 font-semibold">Jordan & Taylor</h1>
          <p className="mb-2">Saturday, June 14, 2026</p>
          <p className="mb-6">The Garden House, Chicago</p>

          <button className="bg-black text-white px-6 py-3 rounded-lg">
            RSVP
          </button>
        </main>
      )}
    </>
  );
}
