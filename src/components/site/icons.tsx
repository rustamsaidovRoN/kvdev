import type { SVGProps } from "react";

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth={1} {...props}>
      <path d="M0 6h38M33 1l5 5-5 5" />
    </svg>
  );
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.2} {...props}>
      <path d="M4 12L12 4M5.5 4H12v6.5" />
    </svg>
  );
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 40" fill="none" stroke="currentColor" strokeWidth={1} {...props}>
      <path d="M6 0v38M1 33l5 5 5-5" />
    </svg>
  );
}

export function Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.2} {...props}>
      <path d="M8 1v14M1 8h14" />
    </svg>
  );
}
