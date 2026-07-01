import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="KV DEV — на головну"
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <span className="relative h-[8px] w-[8px] shrink-0 rotate-45 border border-gold transition-all duration-500 group-hover:rotate-[135deg] group-hover:bg-gold" />
      <span className="text-[15px] font-semibold leading-none tracking-[0.34em] text-bone">
        KV&nbsp;DEV
      </span>
    </Link>
  );
}
