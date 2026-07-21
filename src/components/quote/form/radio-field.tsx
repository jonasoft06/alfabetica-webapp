// src/components/quote/form/radio-field.tsx
import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import {
  Field,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

import type { Option } from "./form-options";
import { TextField } from "./text-field";

type ConditionalTextFieldConfig<T extends FieldValues> = {
  triggerValue: string;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
};

type RadioFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  legend: React.ReactNode;
  options: readonly Option<string>[];
  conditionalText?: ConditionalTextFieldConfig<T>;
  illustrations?: Record<string, string>;
};

export function RadioField<T extends FieldValues>({
  control,
  name,
  legend,
  options,
  conditionalText,
  illustrations,
}: RadioFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldSet>
          <FieldLegend>{legend}</FieldLegend>
          <RadioGroup
            name={field.name}
            value={field.value ?? ""}
            onValueChange={field.onChange}
            className={cn(
              illustrations
                ? "grid grid-cols-1 gap-8 md:grid-cols-3"
                : "pl-4",
            )}
          >
            {options.map((opt) => {
              const showConditional =
                conditionalText?.triggerValue === opt.value &&
                field.value === opt.value;
              const illustrationSrc = illustrations?.[opt.value];

              return (
                <div
                  key={opt.value}
                  className={cn(
                    "flex items-center gap-3",
                    illustrations && "flex-col text-center",
                    showConditional && "flex-wrap sm:flex-nowrap",
                  )}
                >
                  <FieldLabel htmlFor={`${name}-${opt.value}`}>
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        value={opt.value}
                        id={`${name}-${opt.value}`}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldTitle className="font-normal">
                        {opt.label}
                      </FieldTitle>
                    </Field>
                  </FieldLabel>

                  {illustrationSrc && (
                    <img
                      src={illustrationSrc}
                      alt=""
                      className="h-28 w-auto"
                    />
                  )}

                  {showConditional && (
                    <div className="min-w-48 flex-1">
                      <TextField
                        control={control}
                        name={conditionalText.name}
                        label={conditionalText.label}
                        placeholder={conditionalText.placeholder}
                        hideLabel
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </RadioGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </FieldSet>
      )}
    />
  );
}