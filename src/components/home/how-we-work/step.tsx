export type Step = {
  number: number;
  title: React.ReactNode;
  paragraphs: string[];
};

type StepProps = {
  step: Step;
};

export default function Step({ step }: StepProps) {
  return (
    <div className="flex gap-3">
      <span className="font-heading text-2xl font-bold text-alf-tangerine xl:text-3xl">
        {step.number}.
      </span>

      <div className="flex flex-col gap-3">
        <h3 className="font-sans text-xl font-semibold text-alf-eerie-black xl:text-2xl">
          {step.title}
        </h3>
        {step.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed text-alf-eerie-black xl:text-base"
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}