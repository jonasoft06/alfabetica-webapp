// src/components/quote/form/text-field.tsx
import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type TextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  as?: "input" | "textarea";
  type?: string;
  hideLabel?: boolean;
};

export function TextField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  as = "input",
  type = "text",
  hideLabel = false,
}: TextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel
            htmlFor={name}
            className={cn(
              "text-base font-bold text-alf-eerie-black",
              hideLabel && "sr-only",
            )}
          >
            {label}
          </FieldLabel>
          {as === "textarea" ? (
            <Textarea
              {...field}
              id={name}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
              className="min-h-32"
            />
          ) : (
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
            />
          )}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}