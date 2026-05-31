# theory-test-2 — Music Theory Test II（下巻）

解説付き3択クイズで音楽理論を学ぶ Web アプリの**下巻**。上巻 [`theory-test`](../theory-test) と完全に同じ構造・デザイン・UI で、第4〜6章（セカンダリードミナント／ドミナントの代理と経過和音／コード・スケール）を扱う。正解・不正解にかかわらず必ず解説が表示され、学びながら進められる。Directline Studio の音楽理論ツール群（`theory-lab` / `my-clone` / `theory-test`）と同じダークテーマ（黒背景＋ゴールド）。

## 技術スタック

- Next.js 16（App Router）+ TypeScript
- Tailwind CSS（ダークテーマ。アクセントカラーは `gold`）
- 状態は React のローカルステート、進捗のみ `localStorage` に保存
- データベース・バックエンドなし。すべてクライアントで完結

## ディレクトリ構造

```
theory-test-2/
├── app/
│   ├── layout.tsx              # ルートレイアウト（メタ情報・背景）
│   ├── globals.css             # ダークテーマ・ゴールドのユーティリティ
│   ├── page.tsx                # トップ画面（章 → セクションカード一覧＋進捗バッジ）
│   ├── progress.ts             # localStorage で進捗を読み書きするヘルパー
│   └── section/[id]/page.tsx   # 出題・解説・結果画面（クイズ本体）
├── data/
│   └── questions.ts            # ★問題データ（章・セクション・問題）
├── tailwind.config.ts          # gold / ink カラー定義
└── CLAUDE.md
```

## データモデル（`data/questions.ts`）

階層は **章（Chapter）→ セクション（Section）→ 問題（Question）**。上巻と同一。

```typescript
interface Question {
  id: string;          // 一意。例: "s10-q01"
  section: string;     // SECTIONS の id と一致させる
  question: string;
  choices: string[];   // 必ず3択
  correctIndex: number;// 正解の choices インデックス（0-2）
  explanation: string; // 正解・不正解どちらでも表示される解説
}
```

- `CHAPTERS` … 章の一覧（ch4 / ch5 / ch6）
- `SECTIONS` … セクションの一覧（`chapter` で章に紐づく。s10〜s18）
- `questions` … 問題の配列（`section` でセクションに紐づく）

出題順は実行時に Fisher–Yates でシャッフルされるので、配列内の順序は気にしなくてよい。正解の偏りを避けるため `correctIndex` は 0〜2 に散らしてある。

## 問題の追加方法

### 既存セクションに問題を足す

`data/questions.ts` の `questions` 配列に追記するだけ。

```typescript
{
  id: "s10-q16",                    // 既存と重複しない一意な id
  section: "s10-secondary-dom-basic", // 追加先セクションの id
  question: "Key=D で V7/II は？",
  choices: ["E7", "B7", "A7"],
  correctIndex: 0,
  explanation: "Key=D の II は Em7。Em7 に対する V7 は B7… ではなく E のドミナント。",
},
```

### 新しいセクション／章を足す

1. `CHAPTERS` に `{ id, title, description }` を追加
2. `SECTIONS` に `{ id, chapter, title, description }` を追加
3. その `id` を `section` に持つ問題を `questions` に追加

トップ画面・出題画面・進捗バッジは `SECTIONS` / `questions` から自動生成されるため、コンポーネントの変更は不要。

## 現在の収録内容（全120問）

- **第4章: セカンダリー・ドミナント・コード（40問）**
  - s10「セカンダリー・ドミナントの基本」… 15問
  - s11「セカンダリー・ドミナントの応用」… 15問
  - s12「総合問題」… 10問
- **第5章: ドミナントの代理と経過和音（40問）**
  - s13「ドミナントの代理コード」… 15問
  - s14「経過和音とその他のテクニック」… 15問
  - s15「総合問題」… 10問
- **第6章: コード・スケール（40問）**
  - s16「メジャー系コード・スケール」… 15問
  - s17「マイナー系・ドミナント系コード・スケール」… 15問
  - s18「総合問題」… 10問

## 開発

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 本番ビルド
```

## 設計メモ

- 進捗は `theory-test-2:progress` キーで `localStorage` に保存（上巻 `theory-test:progress` とは別キーで衝突しない）。
- クイズ本体 `app/section/[id]/page.tsx` はクライアントコンポーネント。
  選択 → 解説表示 → 次の問題 → 結果画面（間違えた問題の復習付き）という単方向フロー。
- 問題内容は音楽理論的な正確さを最優先。半音数・調号・和音構成音・スケールの度数などは追加時に必ず検算すること。
- タイトルは「Music Theory Test II」、サブタイトルは「理論を学び、理解を深める — 下巻」。
