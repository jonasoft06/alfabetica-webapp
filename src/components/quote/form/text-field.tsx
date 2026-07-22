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

const fieldStyles = "border-alf-tangerine placeholder:text-alf-tangerine placeholder:italic " + "focus-visible:border-alf-tangerine focus-visible:ring-alf-tangerine/70";
const inputSize = "h-10 px-3 rounded-xl text-base md:text-base";
const textareaSize = "px-3 text-base md:text-base";

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
        <Field
          data-invalid={fieldState.invalid}
          className={cn(
            as === "input" && "md:flex-row md:items-center md:gap-3 md:*:w-auto",
          )}
        >
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
              className={cn("min-h-32", fieldStyles, textareaSize)}
            />
          ) : (
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
              className={cn(fieldStyles, inputSize, "md:flex-1")}
            />
          )}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}