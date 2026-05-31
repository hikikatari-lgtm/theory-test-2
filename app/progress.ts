// セクションごとの進捗を localStorage に保存するヘルパー。
// 状態: "not-started" | "in-progress" | "done"

export type ProgressStatus = "not-started" | "in-progress" | "done";

export interface SectionProgress {
  status: ProgressStatus;
  /** 直近スコア（正解数） */
  score: number;
  /** 問題総数 */
  total: number;
}

const KEY = "theory-test-2:progress";

type ProgressMap = Record<string, SectionProgress>;

function readAll(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

export function getProgress(sectionId: string): SectionProgress {
  return (
    readAll()[sectionId] ?? { status: "not-started", score: 0, total: 0 }
  );
}

export function setProgress(sectionId: string, value: SectionProgress): void {
  if (typeof window === "undefined") return;
  const all = readAll();
  all[sectionId] = value;
  window.localStorage.setItem(KEY, JSON.stringify(all));
}
