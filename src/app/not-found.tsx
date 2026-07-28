import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-alf-near-white px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

        <div className="relative flex h-64 w-64 mt-5 items-center justify-center lg:h-80 lg:w-80">
          <img
            src="/svg/home/how-we-work/shape-left.svg"
            alt=""
            aria-hidden="true"
            className="absolute animate-slow-spin inset-0 h-full w-full"
          />
          <img
            src="/svg/brand/character-illustration-work.svg"
            alt=""
            aria-hidden="true"
            className="relative w-32 lg:w-40"
          />
        </div>

        {/* "404" como acento tipográfico, no como protagonista */}
        <span className="mt-6 font-sans text-sm font-semibold tracking-widest text-alf-tangerine uppercase">
          Error 404
        </span>

        <h1 className="mt-2 font-heading text-3xl text-alf-eerie-black lg:text-4xl">
          Esta página se extravió entre las hojas
        </h1>

        <p className="mt-4 max-w-md text-balance font-sans text-base text-alf-eerie-black/70">
          No pudimos encontrar lo que buscas. Puede que el enlace esté roto o
          la página ya no exista.
        </p>

        <Link
          href="/"
          className="mt-8 mb-6 inline-flex items-center justify-center rounded-xl bg-alf-tangerine px-8 py-3 font-sans text-sm font-medium text-alf-near-white transition-colors hover:bg-transparent hover:text-alf-eerie-black hover:outline-2 hover:outline-alf-tangerine md:block xl:px-7 xl:py-1 xl:text-lg"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
