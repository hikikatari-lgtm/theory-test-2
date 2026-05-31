"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  getQuestionsBySection,
  getSection,
  type Question,
} from "@/data/questions";
import { setProgress } from "../../progress";

/** Fisher–Yates シャッフル（元配列は変更しない） */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface AnswerRecord {
  question: Question;
  selected: number;
  correct: boolean;
}

export default function SectionPage() {
  const params = useParams<{ id: string }>();
  const sectionId = params.id;

  const section = getSection(sectionId);
  const [deck, setDeck] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [finished, setFinished] = useState(false);

  // マウント時に問題をシャッフルして出題順を決める
  useEffect(() => {
    setDeck(shuffle(getQuestionsBySection(sectionId)));
  }, [sectionId]);

  const total = deck.length;
  const current = deck[index];
  const score = answers.filter((a) => a.correct).length;

  // 進捗の保存
  useEffect(() => {
    if (total === 0) return;
    if (finished) {
      setProgress(sectionId, { status: "done", score, total });
    } else if (answers.length > 0) {
      setProgress(sectionId, { status: "in-progress", score, total });
    }
  }, [finished, answers.length, score, total, sectionId]);

  function handleSelect(choiceIndex: number) {
    if (selected !== null || !current) return;
    setSelected(choiceIndex);
    setAnswers((prev) => [
      ...prev,
      {
        question: current,
        selected: choiceIndex,
        correct: choiceIndex === current.correctIndex,
      },
    ]);
  }

  function handleNext() {
    if (index + 1 >= total) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setDeck(shuffle(getQuestionsBySection(sectionId)));
    setIndex(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  }

  if (!section) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-20 text-center">
        <p className="text-neutral-400">セクションが見つかりません。</p>
        <Link href="/" className="mt-4 inline-block text-gold underline">
          トップへ戻る
        </Link>
      </main>
    );
  }

  if (total === 0) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-20 text-center text-neutral-400">
        読み込み中…
      </main>
    );
  }

  // ---- 結果画面 ----------------------------------------------------------
  if (finished) {
    const wrong = answers.filter((a) => !a.correct);
    const pct = Math.round((score / total) * 100);
    return (
      <main className="mx-auto w-full max-w-2xl px-5 pb-20 pt-12">
        <ResultHeader title={section.title} />
        <div className="animate-fade-in-up rounded-3xl border border-ink-border bg-ink-card/80 p-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            スコア
          </p>
          <p className="mt-2 text-5xl font-bold text-gold-gradient">
            {score}
            <span className="text-2xl text-neutral-500"> / {total}</span>
          </p>
          <p className="mt-2 text-sm text-neutral-400">{pct}% 正解</p>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-ink-border">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold-light transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {wrong.length > 0 ? (
          <section className="mt-8">
            <h2 className="mb-3 text-sm font-semibold text-neutral-300">
              間違えた問題の復習（{wrong.length}問）
            </h2>
            <ul className="flex flex-col gap-3">
              {wrong.map((a) => (
                <li
                  key={a.question.id}
                  className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5"
                >
                  <p className="font-medium text-neutral-100">
                    {a.question.question}
                  </p>
                  <p className="mt-2 text-sm text-red-300">
                    あなたの解答: {a.question.choices[a.selected]}
                  </p>
                  <p className="text-sm text-emerald-300">
                    正解: {a.question.choices[a.question.correctIndex]}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {a.question.explanation}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="mt-8 text-center text-emerald-400">
            全問正解！すばらしい理解度です 🎉
          </p>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleRestart}
            className="flex-1 rounded-xl border border-gold/40 bg-gold/10 py-3 font-medium text-gold-light transition-colors hover:bg-gold/20"
          >
            もう一度挑戦
          </button>
          <Link
            href="/"
            className="flex-1 rounded-xl border border-ink-border py-3 text-center font-medium text-neutral-300 transition-colors hover:border-neutral-500"
          >
            セクション一覧へ
          </Link>
        </div>
      </main>
    );
  }

  // ---- 出題画面 ----------------------------------------------------------
  const answered = selected !== null;
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-20 pt-12">
      <ResultHeader title={section.title} />

      {/* 進捗バー */}
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-xs text-neutral-500">
          <span>
            問題 {index + 1} / {total}
          </span>
          <span>正解 {score}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-border">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold-light transition-all duration-300"
            style={{ width: `${(index / total) * 100}%` }}
          />
        </div>
      </div>

      <div key={current.id} className="animate-fade-in-up">
        <h2 className="mb-7 text-2xl font-semibold leading-snug text-neutral-50 sm:text-3xl">
          {current.question}
        </h2>

        <div className="flex flex-col gap-3">
          {current.choices.map((choice, i) => {
            const isCorrect = i === current.correctIndex;
            const isSelected = i === selected;

            let style =
              "border-ink-border bg-ink-card/70 text-neutral-100 hover:border-gold/40 hover:bg-ink-card";
            if (answered) {
              if (isCorrect) {
                style =
                  "border-emerald-500/60 bg-emerald-500/10 text-emerald-200";
              } else if (isSelected) {
                style = "border-red-500/60 bg-red-500/10 text-red-200";
              } else {
                style = "border-ink-border bg-ink-card/40 text-neutral-500";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left text-base font-medium transition-colors ${style} ${
                  answered ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span>{choice}</span>
                {answered && isCorrect && <span className="text-emerald-400">✓</span>}
                {answered && isSelected && !isCorrect && (
                  <span className="text-red-400">✕</span>
                )}
              </button>
            );
          })}
        </div>

        {/* 解説（正解・不正解どちらでも表示） */}
        {answered && (
          <div className="mt-6 animate-fade-in-up rounded-2xl border border-ink-border bg-ink-card/60 p-5">
            <p
              className={`mb-2 text-sm font-bold ${
                selected === current.correctIndex
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {selected === current.correctIndex ? "正解！" : "不正解"}
            </p>
            <p className="text-sm leading-relaxed text-neutral-200">
              {current.explanation}
            </p>
            <button
              onClick={handleNext}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-gold-dark to-gold py-3 font-semibold text-ink transition-opacity hover:opacity-90"
            >
              {index + 1 >= total ? "結果を見る" : "次の問題へ"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function ResultHeader({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <Link
        href="/"
        className="text-sm text-neutral-500 transition-colors hover:text-gold"
      >
        ← 一覧
      </Link>
      <h1 className="text-sm font-medium tracking-wide text-neutral-300">
        {title}
      </h1>
      <span className="w-10" />
    </div>
  );
}
