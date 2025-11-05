import * as React from "react";
import { cn } from "@/lib/utils";

export interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ className, label, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value !== "");
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value !== "");
      props.onChange?.(e);
    };

    const isActive = isFocused || hasValue || props.value;

    return (
      <div className="relative">
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg rounded-xl bg-white/95 text-gray-900 placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-white shadow-xl backdrop-blur-sm border border-white/20 transition-all",
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-5 sm:left-6 transition-all duration-200 pointer-events-none text-gray-500",
            isActive
              ? "top-2 text-xs font-medium text-gray-600"
              : "top-1/2 -translate-y-1/2 text-base sm:text-lg"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
