import Link from "next/link";

export default function Monogram() {
  return (
    <Link href="/" className="group relative z-50 inline-flex items-center justify-center w-10 h-10 text-lg font-semibold border rounded-full border-muted hover:border-primary transition-colors">
      <span className="text-primary">JB</span>
    </Link>
  );
}
