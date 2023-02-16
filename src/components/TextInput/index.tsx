import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className="py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 flex items-center gap-3"
    >{children}</div>
  )
}

// function TextInputIcon() {}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputBody(props: TextInputProps) {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputBody
}
