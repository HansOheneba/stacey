"use client";

export default function EmailSignup() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3 max-w-md"
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 text-sm focus:outline-none focus:border-golden-earth-500 transition-colors duration-200"
      />
      <button
        type="submit"
        className="btn-primary whitespace-nowrap text-sm py-3 px-6"
      >
        Join the Interest List
      </button>
    </form>
  );
}
