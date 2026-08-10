import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested route does not exist in Ngwendu Gambu's portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center" id="main-content">
      <section className="page-shell w-full py-20 sm:py-28">
        <div className="max-w-4xl border-y border-white/10 py-10 sm:py-14">
          <p className="eyebrow">404 / route void</p>
          <h1 className="font-display mt-5 text-6xl leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            This coordinate is empty.
          </h1>
          <p className="body-copy mt-7 max-w-xl">
            The page may have moved, or the address may be incomplete. Return
            to the portfolio to continue through the selected work.
          </p>
          <Link className="hero-action hero-action--primary mt-9" href="/">
            Return home
          </Link>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.22em] text-white/42">
          Ngwendu Gambu / Johannesburg
        </p>
      </section>
    </main>
  );
}
