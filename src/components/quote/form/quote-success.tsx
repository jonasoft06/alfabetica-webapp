// src/components/quote/form/quote-success.tsx
export function QuoteSuccess() {
  return (
    <div className="flex justify-center py-18">
      <div className="relative flex flex-col items-center gap-6 text-center lg:w-fit lg:gap-0">
        {/* Estrella pequeña, pegada a la esquina superior-izquierda del blob */}
        <img
          src="/svg/quote/form/shape-send-left.svg"
          alt=""
          className="h-16 w-auto lg:absolute lg:top-0 lg:left-0 lg:h-20 lg:-translate-x-1/3 lg:-translate-y-1/3"
        />

        {/* Blob grande con el texto superpuesto */}
        <div className="relative flex items-center justify-center">
          <img
            src="/svg/quote/form/shape-send-center.svg"
            alt=""
            className="h-auto max-w-none lg:w-[420px]"
          />
          <div className="absolute flex max-w-56 flex-col items-center gap-2 px-6 text-center">
            <h3 className="font-heading text-2xl text-alf-eerie-black">
              ¡Listo!
            </h3>
            <p className="font-heading text-xl text-alf-tangerine">
              Formulario enviado
            </p>
            <p className="text-sm text-alf-eerie-black/80">
              Nuestro equipo revisará la información y te contactará para
              llegar a la mejor solución posible.
            </p>
          </div>
        </div>

        {/* Persona, pegada a la esquina inferior-derecha del blob */}
        <img
          src="/svg/quote/form/illustration-send.svg"
          alt=""
          className="h-24 w-auto lg:absolute lg:right-0 lg:bottom-0 lg:h-28 lg:translate-x-1/4 lg:translate-y-1/4"
        />
      </div>
    </div>
  );
}