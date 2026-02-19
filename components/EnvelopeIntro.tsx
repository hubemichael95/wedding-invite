"use client"

type Props = {
  onOpen: () => void
}

export default function EnvelopeIntro({ onOpen }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--ivory)] z-50">

      <button
        onClick={onOpen}
        className="relative w-[340px] h-[220px] cursor-pointer group"
      >

        {/* Envelope body */}
        <div className="absolute inset-0 bg-[var(--coral)] rounded-sm shadow-xl" />

        {/* Envelope flap */}
        <div className="
          absolute top-0 left-0 right-0 h-[50%]
          origin-top
          bg-[var(--orange)]
          transition-transform duration-700
          group-hover:rotate-x-180
        " />

        {/* Inner paper */}
        <div className="
          absolute inset-3
          bg-[var(--ivory)]
          flex items-center justify-center
          text-[var(--plum)]
          font-serif text-lg
          tracking-wide
        ">
          Tap to open invitation
        </div>

      </button>

    </div>
  )
}
