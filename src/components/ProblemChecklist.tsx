"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const problems = [
  {
    title: "Klienti chodí hlavně na doporučení",
    description:
      "Když doporučení zpomalí, poptávky téměř zmizí.",
  },
  {
    title: "Máte web, ale moc nepomáhá",
    description:
      "Existuje, ale klienty příliš nevede k akci.",
  },
  {
    title: "Lidé se ptají pořád na stejné věci",
    description:
      "Cena, proces, termíny nebo co vlastně děláte.",
  },
  {
    title: "Marketing už jste zkoušeli",
    description:
      "Reklama běžela, ale výsledek nebyl takový, jaký jste čekali.",
  },
  {
    title: "Poptávky chodí nepravidelně",
    description:
      "Jeden měsíc moc, další skoro nic.",
  },
  {
    title: "Máte pocit, že něco nefunguje",
    description:
      "Jen není jasné co přesně opravit jako první.",
  },
];

export default function ProblemChecklist() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (index: number) => {
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const showInsight = selected.length >= 3;

  return (
    <div className="mt-14 space-y-10">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {problems.map((problem, index) => {
          const active = selected.includes(index);

          return (
            <button
              key={problem.title}
              onClick={() => toggle(index)}
              className={`group relative rounded-2xl border p-6 text-left transition-all duration-300 ${
                active
                  ? "border-(--accent) bg-(--accent)/8 shadow-sm"
                  : "border-(--muted)/40 hover:border-(--accent)/40 hover:bg-(--background)/40"
              }`}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-lg font-medium leading-snug">
                    {problem.title}
                  </p>
                </div>

                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
                    active
                      ? "border-(--accent) bg-(--accent) text-(--background)"
                      : "border-(--muted)"
                  }`}
                >
                  {active && <Check className="h-4 w-4" />}
                </div>
              </div>

              <p className="text-(--text-secondary)">
                {problem.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Dynamic insight */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showInsight
            ? "max-h-125 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-4xl border border-(--accent)/40 bg-(--accent)/5 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent)">
            Pravděpodobně problém není jen marketing
          </p>

          <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
            Vypadá to, že klienti odpadávají mezi první návštěvou a rozhodnutím.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-(--text-secondary)">
            Dobrá zpráva:
            často není potřeba dělat všechno znovu.
            Stačí najít nejslabší místa a opravit to,
            co má největší dopad.
          </p>

          <div className="mt-8">
            <a
              href="#offer"
              className="tracking-cta inline-flex rounded-full bg-(--accent) px-8 py-4 font-medium text-(--background) transition hover:bg-(--accent-hover)"
            >
              Ukázat mi, kde je problém
            </a>
          </div>
        </div>
      </div>

      {/* Bottom insight */}
      {!showInsight && (
        <div className="rounded-3xl border border-(--muted) p-8 text-center">
          <p className="text-xl font-medium leading-relaxed">
            Ve většině případů problém není reklama.
          </p>

          <p className="mt-3 text-(--text-secondary)">
            Problém je, že web a komunikace nevedou klienta k rozhodnutí.
          </p>
        </div>
      )}
    </div>
  );
}