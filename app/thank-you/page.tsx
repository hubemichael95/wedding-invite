export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3] text-black flex items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-[0_14px_36px_rgba(0,0,0,0.10)]">
        <p className="text-xs uppercase tracking-[0.25em] opacity-70">
          RSVP Received
        </p>

        <h1 className="mt-3 text-3xl font-semibold">Thank you!</h1>

        <p className="mt-3 opacity-75">
          Your RSVP was submitted successfully.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-xl bg-black px-5 py-3 text-white hover:opacity-90"
        >
          Back to invitation
        </a>
      </div>
    </main>
  );
}
