// src/components/quote/form/quote-success.tsx
export function QuoteSuccess() {
  return (
    <div className="flex justify-center py-18">
      <div className="relative flex flex-col items-center gap-6 text-center lg:w-fit lg:gap-0">
        {/* Estrella pequeña, pegada a la esquina superior-izquierda del blob */}
        <img
          src="/svg/quote/form/shape-send-left.svg"
          alt=""
          className="h-18 w-auto sm:absolute sm:top-0 sm:left-0 lg:h-28 sm:-translate-x-[80%] sm:-translate-y-1/4"
        />

        {/* Blob grande con el texto superpuesto */}
        <div className="relative flex items-center justify-center">
          <img
            src="/svg/quote/form/shape-send-center.svg"
            alt=""
            className="h-auto w-full max-w-xs lg:w-[420px] lg:max-w-none"
          />
          <div className="absolute flex max-w-64 flex-col items-center gap-2 px-6 text-center">
            <h3 className="font-heading font-semibold text-2xl lg:text-4xl text-alf-eerie-black italic">
              ¡Listo!
            </h3>
            <p className="font-heading py-2 text-2xl lg:text-4xl text-alf-tangerine">
              Formulario enviado
            </p>
            <p className="text-sm text-alf-eerie-black">
              Nuestro equipo revisará la información y te contactará para
              llegar a la mejor solución posible.
            </p>
          </div>
        </div>

        <img
          src="/svg/quote/form/illustration-send.svg"
          alt=""
          className="h-28 w-auto sm:absolute sm:right-0 sm:bottom-0 sm:h-32 lg:h-40 sm:translate-x-[100%] "
        />
      </div>
    </div>
  );
}