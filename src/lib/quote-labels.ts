import type { Option } from "@/components/quote/form/form-options";

export function getLabel<T extends string>(options: Option<T>[], value: T): string {
  return options.find((option) => option.value === value)?.label ?? value;
}