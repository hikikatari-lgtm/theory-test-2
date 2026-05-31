"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CHAPTERS, SECTIONS, getQuestionsBySection } from "@/data/questions";
import {
  getProgress,
  type ProgressStatus,
  type SectionProgress,
} from "./progress";

const BADGE: Record<ProgressStatus, { label: string; className: string }> = {
  "not-started": {
    label: "未着手",
    className: "border-ink-border text-neutral-400",
  },
  "in-progress": {
    label: "進行中",
    className: "border-gold/50 text-gold",
  },
  done: {
    label: "完了",
    className: "border-emerald-500/50 text-emerald-400",
  },
};

export default function HomePage() {
  // 進捗は localStorage 依存なのでマウント後に読み込む
  const [progress, setProgressState] = useState<Record<string, SectionProgress>>(
    {},
  );

  useEffect(() => {
    const next: Record<string, SectionProgress> = {};
    for (const s of SECTIONS) next[s.id] = getProgress(s.id);
    setProgressState(next);
  }, []);

  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-20 pt-14 sm:pt-20">
      <header className="mb-10 text-center sm:mb-14">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
          Directline Studio
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gold-gradient sm:text-5xl">
          Music Theory Test II
        </h1>
        <p className="mt-4 text-sm text-neutral-400 sm:text-base">
          理論を学び、理解を深める — 下巻
        </p>
      </header>

      {CHAPTERS.map((chapter) => {
        const sections = SECTIONS.filter((s) => s.chapter === chapter.id);
        return (
          <section key={chapter.id} className="mb-10">
            <div className="mb-4 flex items-baseline gap-3">
              <h2 className="text-lg font-semibold text-neutral-100">
                {chapter.title}
              </h2>
              <span className="text-xs text-neutral-500">
                {chapter.description}
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {sections.map((section) => {
                const count = getQuestionsBySection(section.id).length;
                const p =
                  progress[section.id] ??
                  ({
                    status: "not-started",
                    score: 0,
                    total: 0,
                  } as SectionProgress);
                const badge = BADGE[p.status];
                return (
                  <li key={section.id}>
                    <Link
                      href={`/section/${section.id}`}
                      className="group flex items-center justify-between rounded-2xl border border-ink-border bg-ink-card/80 p-5 transition-colors hover:border-gold/40 hover:bg-ink-card"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-semibold text-neutral-100 group-hover:text-gold-light">
                            {section.title}
                          </h3>
                          <span
                            className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${badge.className}`}
                          >
                            {badge.label}
                          </span>
                        </div>
                        <p className="mt-1 truncate text-xs text-neutral-400">
                          {section.description}
                        </p>
                        <p className="mt-2 text-[11px] text-neutral-500">
                          全 {count} 問
                          {p.status === "done" &&
                            ` ・ 前回 ${p.score}/${p.total}`}
                        </p>
                      </div>
                      <span className="ml-4 shrink-0 text-2xl text-neutral-600 transition-transform group-hover:translate-x-1 group-hover:text-gold">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <footer className="mt-12 text-center text-[11px] text-neutral-600">
        正解でも不正解でも解説が出る、学びながら進めるクイズです。
      </footer>
    </main>
  );
}
