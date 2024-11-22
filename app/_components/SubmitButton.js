"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
  pendingLabel = "Updating...",
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 hover:bg-accent-600 px-8 py-4 text-primary-800 font-semibold transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
