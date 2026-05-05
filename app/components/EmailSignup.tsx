"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage" }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to subscribe. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-sm text-golden-earth-400 font-semibold">
        ✓ You&apos;re on the list — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2 max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          name="email"
          type="email"
          required
          placeholder="Your email address"
          className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 text-sm focus:outline-none focus:border-golden-earth-500 transition-colors duration-200"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary whitespace-nowrap text-sm py-3 px-6 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Joining..." : "Join the Interest List"}
        </button>
      </form>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
