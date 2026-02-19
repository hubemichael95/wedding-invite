import { wedding } from "../data/wedding";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-10">
      <h2 className="text-sm font-semibold uppercase tracking-[0.22em] opacity-70">
        {title}
      </h2>

      <div className="mt-4 rounded-2xl bg-white p-6 shadow-[0_14px_36px_rgba(0,0,0,0.10)]">
        {children}
      </div>
    </section>
  );
}

export default function InviteContent() {
  return (
    <main className="min-h-screen bg-[#fbf8f3] text-black">

      {/* HERO */}
      <header className="mx-auto max-w-3xl px-6 pt-16 pb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] opacity-70">
          Wedding Invitation
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          {wedding.couple}
        </h1>

        <p className="mt-4 text-lg opacity-80">
          {wedding.date} • {wedding.time}
        </p>

        <p className="mt-2 opacity-70">
          {wedding.venue}
        </p>
      </header>


      {/* DETAILS */}
      <Section title="Details">
        <p className="text-lg font-medium">
          {wedding.venue}
        </p>

        <p className="mt-1 opacity-75">
          {wedding.address}
        </p>

        <p className="mt-4 text-sm opacity-70">
          RSVP by {wedding.rsvpBy}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">

          <a
            href="#rsvp"
            className="rounded-xl bg-black px-5 py-3 text-center text-white hover:opacity-90"
          >
            RSVP
          </a>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              wedding.address
            )}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-black/15 bg-white px-5 py-3 text-center hover:bg-black/5"
          >
            Open in Maps
          </a>

        </div>
      </Section>


      {/* SCHEDULE */}
      <Section title="Schedule">

        <div className="space-y-4">

          {wedding.events.map((event) => (

            <div
              key={event.title}
              className="flex items-start justify-between gap-4 border-b border-black/10 pb-4 last:border-b-0 last:pb-0"
            >

              <div>

                <div className="text-lg font-medium">
                  {event.title}
                </div>

                <div className="mt-1 text-sm opacity-75">
                  {event.location} • {event.address}
                </div>

              </div>

              <div className="shrink-0 rounded-full bg-black/5 px-3 py-1 text-sm">
                {event.time}
              </div>

            </div>

          ))}

        </div>

      </Section>


      {/* RSVP */}
      <section
        id="rsvp"
        className="mx-auto w-full max-w-3xl px-6 py-10"
      >

        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] opacity-70">
          RSVP
        </h2>


        <form
  onSubmit={async (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const response = await fetch("https://formspree.io/f/mdallarw", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      window.location.href = "/thank-you"
    } else {
      alert("Something went wrong. Please try again.")
    }
  }}
  className="space-y-6"
>


          {/* Subject */}
          <input
            type="hidden"
            name="_subject"
            value={`New RSVP — ${wedding.couple}`}
          />


          {/* Spam trap */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
          />


          <div className="grid gap-4">

            {/* Name */}
            <label className="grid gap-2">

              <span className="text-sm opacity-70">
                Full name
              </span>

              <input
                name="name"
                required
                placeholder="Jane Doe"
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
              />

            </label>


            {/* Email */}
            <label className="grid gap-2">

              <span className="text-sm opacity-70">
                Email
              </span>

              <input
                name="email"
                type="email"
                required
                placeholder="jane@email.com"
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
              />

            </label>


            {/* Attending */}
            <label className="grid gap-2">

              <span className="text-sm opacity-70">
                Will you attend?
              </span>

              <select
                name="attending"
                required
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
              >

                <option value="Yes">
                  Yes, can’t wait!
                </option>

                <option value="No">
                  Sorry, can’t make it
                </option>

              </select>

            </label>


            {/* Message */}
            <label className="grid gap-2">

              <span className="text-sm opacity-70">
                Message (optional)
              </span>

              <textarea
                name="message"
                rows={3}
                placeholder="Leave a note for the couple…"
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
              />

            </label>


            {/* Submit */}
            <button
              type="submit"
              className="mt-2 rounded-xl bg-black px-5 py-3 text-white hover:opacity-90"
            >
              Submit RSVP
            </button>

          </div>

        </form>

      </section>


      {/* Footer */}
      <footer className="pb-16 text-center text-sm opacity-60">

        <a
          href={wedding.registryUrl}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          View Registry
        </a>

      </footer>


    </main>
  );
}
