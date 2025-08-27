import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  eyebrow?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export default function Section({ title, eyebrow, actions, children }: SectionProps) {
  return (
    <section className="mt-10">
      {(title || eyebrow || actions) && (
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            {eyebrow && (
              <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                {eyebrow}
              </div>
            )}
            {title && <h2 className="text-xl font-semibold">{title}</h2>}
          </div>
          {actions}
        </div>
      )}
      {children}
    </section>
  );
}

