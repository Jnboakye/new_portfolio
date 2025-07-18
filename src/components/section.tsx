interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="p-4 md:p-6 min-h-screen">
      {children}
    </section>
  );
}