// ============================================================================
// Music Theory Test II（下巻）— 問題データ
// ----------------------------------------------------------------------------
// 章（chapter）→ セクション（section）→ 問題（Question）の階層で管理します。
// 上巻（theory-test）と同じデータ構造。第4〜6章を収録。
// 章を追加するときは下部の CHAPTERS / SECTIONS に追記し、questions 配列へ
// 問題を足してください。問題追加の詳細は CLAUDE.md を参照。
// ============================================================================

export interface Question {
  id: string;
  /** 所属セクションID（SECTIONS の id と一致させる） */
  section: string;
  question: string;
  /** 必ず3択 */
  choices: string[];
  /** 正解の choices インデックス（0-2） */
  correctIndex: number;
  explanation: string;
}

export interface Section {
  id: string;
  /** 所属章ID */
  chapter: string;
  title: string;
  description: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: "ch4",
    title: "第4章: セカンダリー・ドミナント・コード",
    description: "各度数へのドミナント・拡張ドミナント・裏コード",
  },
  {
    id: "ch5",
    title: "第5章: ドミナントの代理と経過和音",
    description: "裏コード・パッシングディミニッシュ・借用和音",
  },
  {
    id: "ch6",
    title: "第6章: コード・スケール",
    description: "チャーチモード・メロディックマイナー系・対称スケール",
  },
];

export const SECTIONS: Section[] = [
  {
    id: "s10-secondary-dom-basic",
    chapter: "ch4",
    title: "セカンダリー・ドミナントの基本",
    description: "各度数に対する V7 の作り方と機能",
  },
  {
    id: "s11-secondary-dom-applied",
    chapter: "ch4",
    title: "セカンダリー・ドミナントの応用",
    description: "拡張ドミナント・テンション・偽終止",
  },
  {
    id: "s12-secondary-dom-mixed",
    chapter: "ch4",
    title: "総合問題",
    description: "裏コード・バックドア・進行分析",
  },
  {
    id: "s13-dom-substitute",
    chapter: "ch5",
    title: "ドミナントの代理コード",
    description: "裏コード・セカンダリー裏コード・ナポリ・Aug6th",
  },
  {
    id: "s14-passing-chords",
    chapter: "ch5",
    title: "経過和音とその他のテクニック",
    description: "パッシング・ペダル・クリシェ・借用和音",
  },
  {
    id: "s15-dom-mixed",
    chapter: "ch5",
    title: "総合問題",
    description: "代理・経過・ピカルディの3度の応用",
  },
  {
    id: "s16-major-scales",
    chapter: "ch6",
    title: "メジャー系コード・スケール",
    description: "チャーチモードとダイアトニックコードの対応",
  },
  {
    id: "s17-minor-dom-scales",
    chapter: "ch6",
    title: "マイナー系・ドミナント系コード・スケール",
    description: "メロディックマイナー由来・対称スケール",
  },
  {
    id: "s18-scales-mixed",
    chapter: "ch6",
    title: "総合問題",
    description: "進行ごとのスケール選択とアヴォイド",
  },
];

export const questions: Question[] = [
  // ==========================================================================
  // 第4章 / セクション1: セカンダリー・ドミナントの基本（15問）
  // ==========================================================================
  {
    id: "s10-q01",
    section: "s10-secondary-dom-basic",
    question: "セカンダリー・ドミナントとは？",
    choices: [
      "ダイアトニックのV7のこと",
      "ダイアトニックコード以外のV7で、各度数に対するドミナント",
      "短調のドミナント",
    ],
    correctIndex: 1,
    explanation:
      "ダイアトニック各コードを一時的に I とみなし、そのコードへ向かう V7 を挿入する手法。元のキーには無いドミポイント7thが生まれます。",
  },
  {
    id: "s10-q02",
    section: "s10-secondary-dom-basic",
    question: "Key=C で V7/II とは？",
    choices: ["D7", "A7", "E7"],
    correctIndex: 1,
    explanation:
      "II は Dm7。Dm7 に対する V7 は A7（A-C#-E-G）。A7→Dm7 のドミナントモーションになります。",
  },
  {
    id: "s10-q03",
    section: "s10-secondary-dom-basic",
    question: "Key=C で V7/V とは？",
    choices: ["A7", "D7", "E7"],
    correctIndex: 1,
    explanation:
      "V は G7。G7 に対する V7 は D7。D7→G7→CM7 と続くダブルドミナントです。",
  },
  {
    id: "s10-q04",
    section: "s10-secondary-dom-basic",
    question: "Key=C で V7/IV とは？",
    choices: ["C7", "G7", "F7"],
    correctIndex: 0,
    explanation:
      "IV は FM7。FM7 に対する V7 は C7。IM7 と同じルートですがドミナント7th になります。",
  },
  {
    id: "s10-q05",
    section: "s10-secondary-dom-basic",
    question: "セカンダリー・ドミナントが通常使えない度数は？",
    choices: ["IIm7", "VIIm7(b5)", "VIm7"],
    correctIndex: 1,
    explanation:
      "VIIm7(b5) は不安定で一時的なトニックになれないため、V7/VII は通常使いません。",
  },
  {
    id: "s10-q06",
    section: "s10-secondary-dom-basic",
    question: "Key=G で V7/VI は？",
    choices: ["F#7", "B7", "C#7"],
    correctIndex: 1,
    explanation:
      "Key=G の VI は Em7。Em7 に対する V7 は B7（B-D#-F#-A）です。",
  },
  {
    id: "s10-q07",
    section: "s10-secondary-dom-basic",
    question: "Key=C で E7→Am7 の進行の E7 は何？",
    choices: ["V7/III", "V7/II", "V7/VI"],
    correctIndex: 2,
    explanation:
      "Am7 は VIm7。そこへ解決する E7 は VI に対するドミナント、つまり V7/VI です。",
  },
  {
    id: "s10-q08",
    section: "s10-secondary-dom-basic",
    question: "V7/II の前に II/II（その度数の II）を置くと？",
    choices: ["ダブルドミナント", "セカンダリーII-V", "パッシングコード"],
    correctIndex: 1,
    explanation:
      "II-V/II = Em7(b5)-A7→Dm7。各度数への II-V 進行をセカンダリー II-V と呼びます。",
  },
  {
    id: "s10-q09",
    section: "s10-secondary-dom-basic",
    question: "ダブル・ドミナント（V7/V）の別名は？",
    choices: ["サブドミナント・ドミナント", "ドッペルドミナント", "どちらも正しい"],
    correctIndex: 1,
    explanation:
      "V7/V はドイツ語でドッペルドミナント（二重属和音）と呼ばれます。Key=C では D7。",
  },
  {
    id: "s10-q10",
    section: "s10-secondary-dom-basic",
    question: "Key=F で V7/III は？",
    choices: ["C7", "E7", "G7"],
    correctIndex: 1,
    explanation:
      "Key=F の III は Am7。Am7 に対する V7 は E7（E-G#-B-D）です。",
  },
  {
    id: "s10-q11",
    section: "s10-secondary-dom-basic",
    question: "セカンダリー・ドミナントはどこから派生する？",
    choices: [
      "元のキーのダイアトニック",
      "ブルーススケール",
      "解決先コードを一時的な主調とみなした V7",
    ],
    correctIndex: 2,
    explanation:
      "解決先のコードを一時的な I とみなし、その仮の調の V7 として導きます。だから元のキーには無い音が現れます。",
  },
  {
    id: "s10-q12",
    section: "s10-secondary-dom-basic",
    question: "Key=C で Bb7 が出てきた場合、最も一般的な解釈は？",
    choices: ["bVII7（同主短調からの借用／バックドア）", "V7/IV", "V7/III"],
    correctIndex: 0,
    explanation:
      "Bb7 は C の bVII7。同主短調 Cm からの借用で、CM7 へ解決するバックドア・ドミナントとして働きます。",
  },
  {
    id: "s10-q13",
    section: "s10-secondary-dom-basic",
    question: "Key=C で D7-G7-CM7 はどんな進行？",
    choices: ["ダブルドミナント解決", "セカンダリーII-V", "偽終止"],
    correctIndex: 0,
    explanation:
      "D7=V7/V, G7=V7, CM7=I。ドミナントのドミナントから連鎖して解決するダブルドミナントです。",
  },
  {
    id: "s10-q14",
    section: "s10-secondary-dom-basic",
    question: "セカンダリー・ドミナントの7thコードの種類は？",
    choices: ["メジャー7thでもよい", "必ずドミナント7th", "マイナー7thでもよい"],
    correctIndex: 1,
    explanation:
      "セカンダリードミナントは常にドミナント7th（長三和音＋短7度）。長3度の導音が解決感を生みます。",
  },
  {
    id: "s10-q15",
    section: "s10-secondary-dom-basic",
    question: "Key=C で F#m7(b5)-B7-Em7 は何？",
    choices: [
      "ダイアトニック進行",
      "セカンダリーII-V-I（IIIへの）",
      "モーダルインターチェンジ",
    ],
    correctIndex: 1,
    explanation:
      "F#m7(b5)-B7 は Em7（IIIm7）への II-V。各度数を仮の I として II-V-I を作るのがセカンダリー II-V-I です。",
  },

  // ==========================================================================
  // 第4章 / セクション2: セカンダリー・ドミナントの応用（15問）
  // ==========================================================================
  {
    id: "s11-q01",
    section: "s11-secondary-dom-applied",
    question: "Key=C で Am7-D7-Dm7-G7-CM7 の分析は？",
    choices: [
      "VIm7-V7/V-IIm7-V7-IM7",
      "IIIm7-V7/IV-IIm7-V7-IM7",
      "VIm7-II7-IIm7-V7-IM7",
    ],
    correctIndex: 0,
    explanation:
      "Am7=VIm7、D7=V7/V（G へ向かうドミナント）、Dm7=IIm7、G7=V7、CM7=IM7 です。",
  },
  {
    id: "s11-q02",
    section: "s11-secondary-dom-applied",
    question: "拡張ドミナント（エクステンデッド・ドミナント）とは？",
    choices: [
      "ドミナントにテンションを加えること",
      "セカンダリー・ドミナントを連鎖させること",
      "ドミナント・ペダル",
    ],
    correctIndex: 1,
    explanation:
      "V7/VI→V7/II→V7/V→V7→I のようにドミナントモーションを次々に連鎖させる手法です。",
  },
  {
    id: "s11-q03",
    section: "s11-secondary-dom-applied",
    question: "Key=C で A7→D7→G7→CM7 はどういう進行？",
    choices: [
      "ダイアトニック下行",
      "モーダルインターチェンジ",
      "拡張ドミナント（V7/II→V7/V→V7→I）",
    ],
    correctIndex: 2,
    explanation:
      "A7=V7/II, D7=V7/V, G7=V7。4度上行を繰り返してドミナントが連鎖する拡張ドミナントです。",
  },
  {
    id: "s11-q04",
    section: "s11-secondary-dom-applied",
    question: "V7/IV が I7 と同じ構成音になる理由は？",
    choices: [
      "IVに対するV7のルートがIと同じだから",
      "偶然の一致",
      "転回形だから",
    ],
    correctIndex: 0,
    explanation:
      "IV（F）に対する V のルートは C で、I と同じ。だから Key=C の V7/IV は C7、すなわち I7 と同じ構成音です。",
  },
  {
    id: "s11-q05",
    section: "s11-secondary-dom-applied",
    question: "セカンダリー・ドミナントに付けられるテンションは？",
    choices: [
      "元のキーのダイアトニックテンションのみ",
      "解決先のキーに基づくテンション",
      "テンションは付けられない",
    ],
    correctIndex: 1,
    explanation:
      "セカンダリードミナントは仮の調のドミナントなので、解決先のキー（多くは短調的）に基づいたテンションが選ばれます。",
  },
  {
    id: "s11-q06",
    section: "s11-secondary-dom-applied",
    question: "Key=C で E7(b9) の b9 は何の音？",
    choices: ["Fb", "F", "F#"],
    correctIndex: 1,
    explanation:
      "E7 は E-G#-B-D。9th は F#、b9 はそれを半音下げた F。解決先 Am のダイアトニック音 F に一致します。",
  },
  {
    id: "s11-q07",
    section: "s11-secondary-dom-applied",
    question: "ディミニッシュとセカンダリー・ドミナントの関係は？",
    choices: [
      "dim7はsus4の変形",
      "関係ない",
      "dim7はV7(b9)のルート省略形",
    ],
    correctIndex: 2,
    explanation:
      "例: G#dim7 = E7(b9) のルート省略。E7(b9)=E-G#-B-D-F のうち根音 E を省くと G#-B-D-F = G#dim7 です。",
  },
  {
    id: "s11-q08",
    section: "s11-secondary-dom-applied",
    question: "Key=C で C#dim7→Dm7 は何と同じ機能？",
    choices: ["A7(b9)→Dm7", "D7(b9)→Dm7", "E7(b9)→Dm7"],
    correctIndex: 0,
    explanation:
      "A7(b9)=A-C#-E-G-Bb。根音 A を省くと C#-E-G-Bb = C#dim7。よって C#dim7→Dm7 は A7(b9)→Dm7 と同じ働きです。",
  },
  {
    id: "s11-q09",
    section: "s11-secondary-dom-applied",
    question: "Key=C での V7sus4/II は？",
    choices: ["D7sus4", "A7sus4", "G7sus4"],
    correctIndex: 1,
    explanation:
      "V7/II は A7。その3rd を4thに吊り上げた sus4 形が A7sus4 です。",
  },
  {
    id: "s11-q10",
    section: "s11-secondary-dom-applied",
    question: "Key=Bb で V7/III は？",
    choices: ["F7", "A7", "C7"],
    correctIndex: 1,
    explanation:
      "Key=Bb の III は Dm7。Dm7 に対する V7 は A7（A-C#-E-G）です。",
  },
  {
    id: "s11-q11",
    section: "s11-secondary-dom-applied",
    question: "セカンダリードミナントが4度上行で連続するパターンの呼び名は？",
    choices: ["クロマティック・アプローチ", "ドミナント・サイクル", "ペダルポイント"],
    correctIndex: 1,
    explanation:
      "5度下行（＝4度上行）でドミナントが連鎖する流れをドミナント・サイクル（拡張ドミナント）と呼びます。",
  },
  {
    id: "s11-q12",
    section: "s11-secondary-dom-applied",
    question: "Key=C で Gm7-C7-FM7 の Gm7-C7 は？",
    choices: ["ダイアトニックII-V", "セカンダリーII-V/IV", "モーダルインターチェンジ"],
    correctIndex: 1,
    explanation:
      "FM7（IV）を仮の I とみなした II-V が Gm7-C7。IV へ向かうセカンダリー II-V です。",
  },
  {
    id: "s11-q13",
    section: "s11-secondary-dom-applied",
    question: "Key=C で V7/VI が偽終止的に bVI に解決する場合、その2つは？",
    choices: ["A7とFM7", "E7とAbM7", "B7とEbM7"],
    correctIndex: 1,
    explanation:
      "V7/VI=E7（Am へ向かうはず）。それが裏切って bVI=AbM7 へ進む偽終止的な動きです。",
  },
  {
    id: "s11-q14",
    section: "s11-secondary-dom-applied",
    question: "セカンダリー・ドミナントとモーダル・インターチェンジの違いは？",
    choices: [
      "同じもの",
      "SDはV7で解決先がある、MIは借用で解決を伴わない",
      "SDの方が音が多い",
    ],
    correctIndex: 1,
    explanation:
      "セカンダリードミナントは特定の度数へ解決する V7。モーダルインターチェンジは別の旋法から和音を借りる手法で、必ずしも解決を伴いません。",
  },
  {
    id: "s11-q15",
    section: "s11-secondary-dom-applied",
    question: "Key=C で B7→Em7→A7→Dm7→G7→CM7 を分析すると？",
    choices: [
      "全てダイアトニック",
      "V7/III-IIIm7-V7/II-IIm7-V7-IM7",
      "V7/VI-VIm7-V7/V-IIm7-V7-IM7",
    ],
    correctIndex: 1,
    explanation:
      "B7=V7/III→Em7=IIIm7、A7=V7/II→Dm7=IIm7、G7=V7→CM7=IM7。セカンダリードミナントとその解決が交互に並びます。",
  },

  // ==========================================================================
  // 第4章 / セクション3: 総合問題（10問）
  // ==========================================================================
  {
    id: "s12-q01",
    section: "s12-secondary-dom-mixed",
    question: "Key=C で C-E7-Am-A7-Dm-G7-C のうちノンダイアトニックコードは？",
    choices: ["E7とA7", "E7のみ", "A7のみ"],
    correctIndex: 0,
    explanation:
      "ダイアトニックでは III=Em、VI=Am。E7 は V7/VI、A7 は V7/II で、どちらもノンダイアトニックなセカンダリードミナントです。",
  },
  {
    id: "s12-q02",
    section: "s12-secondary-dom-mixed",
    question: "Key=G で C#dim7→D の機能は？",
    choices: [
      "ダイアトニック",
      "V7(b9)/Vのルート省略→V（パッシングディミニッシュ）",
      "セカンダリーII",
    ],
    correctIndex: 1,
    explanation:
      "C#dim7 = A7(b9) のルート省略。A7 は Key=G の V7/V なので、C#dim7→D は V へ向かうパッシングディミニッシュです。",
  },
  {
    id: "s12-q03",
    section: "s12-secondary-dom-mixed",
    question: "Key=Eb で V7/II は？",
    choices: ["G7", "C7", "A7"],
    correctIndex: 1,
    explanation:
      "Key=Eb の II は Fm7。Fm7 に対する V7 は C7（C-E-G-Bb）です。",
  },
  {
    id: "s12-q04",
    section: "s12-secondary-dom-mixed",
    question: "裏コード（トライトーン・サブスティテューション）とは？",
    choices: [
      "V7のルートからトライトーンの距離にあるドミナント7thで代理する",
      "V7の転回形",
      "IVの代理",
    ],
    correctIndex: 0,
    explanation:
      "Key=C で G7 の裏コードは Db7。G と Db はトライトーン関係で、3rd と7th が入れ替わって共有されます。",
  },
  {
    id: "s12-q05",
    section: "s12-secondary-dom-mixed",
    question: "Key=C で Db7→CM7 の Db7 は何？",
    choices: ["V7/bII", "G7の裏コード（bII7）", "サブドミナントマイナー"],
    correctIndex: 1,
    explanation:
      "Db7 は G7 のトライトーン代理（bII7）。ベースが Db→C と半音下行してスムーズに解決します。",
  },
  {
    id: "s12-q06",
    section: "s12-secondary-dom-mixed",
    question: "裏コードのルートの動きは？",
    choices: ["完全5度下行", "半音下行", "全音上行"],
    correctIndex: 1,
    explanation:
      "Db7→CM7 のようにルートが半音下行で解決します。本来の V7 の5度下行とは違う滑らかな進行感です。",
  },
  {
    id: "s12-q07",
    section: "s12-secondary-dom-mixed",
    question: "Key=C で Bm7(b5)-E7-Am7-A7-Dm7-Db7-CM7 の Db7 は何？",
    choices: ["V7/bVI", "サブドミナントマイナー", "G7の裏コード（bII7）"],
    correctIndex: 2,
    explanation:
      "Dm7（IIm7）の後の Db7 は G7 のトライトーン代理。bII7 として CM7 へ半音で解決します。",
  },
  {
    id: "s12-q08",
    section: "s12-secondary-dom-mixed",
    question: "ホールトーン・スケールはどのコードで使える？",
    choices: ["メジャー7th", "ドミナント7th(#11)やaug7", "マイナー7th"],
    correctIndex: 1,
    explanation:
      "全音だけでできるホールトーンは増5度・#11を含むため、aug7 や 7(#11) などのドミナントに合います。",
  },
  {
    id: "s12-q09",
    section: "s12-secondary-dom-mixed",
    question: "Key=C で Fm7-Bb7-CM7 の Fm7-Bb7 は？",
    choices: [
      "ダイアトニックII-V",
      "サブドミナントマイナーII-V（バックドア進行）",
      "セカンダリーII-V",
    ],
    correctIndex: 1,
    explanation:
      "Fm7-Bb7 は同主短調 Cm の II-V。bVII7→I へ向かう動きをバックドア進行と呼びます。",
  },
  {
    id: "s12-q10",
    section: "s12-secondary-dom-mixed",
    question: "Key=C で Ab7→G7 の Ab7 は何？",
    choices: [
      "サブドミナントマイナー",
      "パッシングコード",
      "V7の裏コードのアプローチ（bII7/V）",
    ],
    correctIndex: 2,
    explanation:
      "V7/V=D7 のトライトーン代理が Ab7。Ab7→G7 と半音下行で V へアプローチする bII7/V です。",
  },

  // ==========================================================================
  // 第5章 / セクション1: ドミナントの代理コード（15問）
  // ==========================================================================
  {
    id: "s13-q01",
    section: "s13-dom-substitute",
    question: "裏コードが機能する理由は？",
    choices: ["ルートが同じだから", "元のV7と3rdと7thを共有するから", "5thが共通だから"],
    correctIndex: 1,
    explanation:
      "G7 の3rd(B)=Db7 の7th(Cb=B)、G7 の7th(F)=Db7 の3rd。トライトーン B-F を共有するので同じ解決力を持ちます。",
  },
  {
    id: "s13-q02",
    section: "s13-dom-substitute",
    question: "Key=C での bII7 は？",
    choices: ["Db7", "Eb7", "Ab7"],
    correctIndex: 0,
    explanation:
      "bII は Db。bII7=Db7 で、これは G7（V7）のトライトーン代理（裏コード）です。",
  },
  {
    id: "s13-q03",
    section: "s13-dom-substitute",
    question: "bII7→I の進行でベースの動きは？",
    choices: ["全音下行", "半音下行", "完全5度下行"],
    correctIndex: 1,
    explanation:
      "Db7→C のようにベースが半音下行。これが裏コードのなめらかな解決感の正体です。",
  },
  {
    id: "s13-q04",
    section: "s13-dom-substitute",
    question: "Key=G での裏コード（bII7）は？",
    choices: ["Db7", "Ab7", "Eb7"],
    correctIndex: 1,
    explanation:
      "Key=G の V7 は D7。そのトライトーン代理は Ab7（bII7）で、Ab→G と半音で解決します。",
  },
  {
    id: "s13-q05",
    section: "s13-dom-substitute",
    question: "セカンダリー裏コードとは？",
    choices: [
      "セカンダリードミナントの転回形",
      "各セカンダリードミナントの裏コード",
      "ダイアトニック代理",
    ],
    correctIndex: 1,
    explanation:
      "各セカンダリードミナントをトライトーン代理したもの。例: V7/II=A7 の裏は Eb7（bII7/II）で Dm7 へ解決します。",
  },
  {
    id: "s13-q06",
    section: "s13-dom-substitute",
    question: "Key=C での bII7/II は？",
    choices: ["Ab7", "Eb7", "Bb7"],
    correctIndex: 1,
    explanation:
      "V7/II=A7 のトライトーン代理。A からトライトーンは Eb なので Eb7→Dm7 となります。",
  },
  {
    id: "s13-q07",
    section: "s13-dom-substitute",
    question: "Key=C で Eb7→Dm7 の Eb7 は？",
    choices: ["V7/bIII", "bII7/II（A7の裏コード）", "SDマイナー"],
    correctIndex: 1,
    explanation:
      "Eb7 は A7（V7/II）のトライトーン代理。Eb→D と半音下行して Dm7 へ解決します。",
  },
  {
    id: "s13-q08",
    section: "s13-dom-substitute",
    question: "ディミニッシュ・スケールが使えるコードは？",
    choices: ["メジャー7thコード", "dim7コードとV7(b9)コード", "マイナー7thコード"],
    correctIndex: 1,
    explanation:
      "全半（W-H）はdim7、半全（H-W）はV7(b9)に対応。ディミニッシュ系スケールはこの2つに使われます。",
  },
  {
    id: "s13-q09",
    section: "s13-dom-substitute",
    question: "パッシング・ディミニッシュの典型的な動きは？",
    choices: ["I→bIIdim→IIm", "I→#Idim→IIm", "I→IIdim→IIIm"],
    correctIndex: 1,
    explanation:
      "CM7→C#dim7→Dm7。ベースが半音上行してダイアトニックコードをつなぐパッシングディミニッシュです。",
  },
  {
    id: "s13-q10",
    section: "s13-dom-substitute",
    question: "Key=C で C#dim7 の機能として最も一般的なのは？",
    choices: ["ダイアトニックVII", "V7(b9)/IIのルート省略（パッシングdim）", "経過的トニック"],
    correctIndex: 1,
    explanation:
      "C#dim7 = A7(b9) のルート省略。A7 は V7/II なので、Dm7 へ向かうパッシングディミニッシュとして機能します。",
  },
  {
    id: "s13-q11",
    section: "s13-dom-substitute",
    question: "オーギュメント6thコード（Aug6th）の種類は？",
    choices: [
      "アメリカン・ブリティッシュ・フレンチ",
      "イタリアン・フレンチ・ジャーマン",
      "メジャー・マイナー・ドミナント",
    ],
    correctIndex: 1,
    explanation:
      "増6度和音にはイタリアン・フレンチ・ジャーマンの3種類があり、いずれも増6度を含んで V へ解決します。",
  },
  {
    id: "s13-q12",
    section: "s13-dom-substitute",
    question: "ジャーマン6thコードはどのコードと異名同音か？",
    choices: ["ドミナント7th", "メジャー7th", "マイナー7th"],
    correctIndex: 0,
    explanation:
      "ジャーマン6th（例 Ab-C-Eb-F#）は Ab7 と同じ構成音。綴りは異なりますが響きはドミナント7th と等しいです。",
  },
  {
    id: "s13-q13",
    section: "s13-dom-substitute",
    question: "Key=C でのナポリの6度（bII）は？",
    choices: ["Db7", "DbM7（Dbメジャー）", "Dbm7"],
    correctIndex: 1,
    explanation:
      "ナポリの6度は bII のメジャー和音（Db-F-Ab）。ドミナント7thの bII7（裏コード）とは別物で、第1転回形で使われることが多いです。",
  },
  {
    id: "s13-q14",
    section: "s13-dom-substitute",
    question: "ナポリの6度の典型的な進行は？",
    choices: ["bII→IV→I", "bII→V7→I", "bII→II→V"],
    correctIndex: 1,
    explanation:
      "ナポリ和音 bII はサブドミナント機能を持ち、bII→V7→I と進んで強い解決を導きます。",
  },
  {
    id: "s13-q15",
    section: "s13-dom-substitute",
    question: "Key=Am でのナポリの6度（bII）は？",
    choices: ["Bb7", "BbM7（Bbメジャー）", "AbM7"],
    correctIndex: 1,
    explanation:
      "Am の bII は Bb。ナポリ和音は Bb メジャー（Bb-D-F）です。",
  },

  // ==========================================================================
  // 第5章 / セクション2: 経過和音とその他のテクニック（15問）
  // ==========================================================================
  {
    id: "s14-q01",
    section: "s14-passing-chords",
    question: "経過和音（パッシング・コード）とは？",
    choices: [
      "2つのコード間をスムーズにつなぐ経過的なコード",
      "コード進行の最後に置くコード",
      "ペダルポイント上のコード",
    ],
    correctIndex: 0,
    explanation:
      "2つの主要なコードの間に挟み、ベースや内声をなめらかに移動させるための経過的なコードです。",
  },
  {
    id: "s14-q02",
    section: "s14-passing-chords",
    question: "クロマティック・アプローチとは？",
    choices: [
      "全音でアプローチ",
      "目標コードの半音上または下からアプローチ",
      "5度圏でアプローチ",
    ],
    correctIndex: 1,
    explanation:
      "目標コードの半音上または半音下から滑り込むように接近する手法。強い推進力を生みます。",
  },
  {
    id: "s14-q03",
    section: "s14-passing-chords",
    question: "Key=C で CM7→Dbm7→Dm7 の Dbm7 は何？",
    choices: ["セカンダリードミナント", "クロマティック・パッシングコード", "ダイアトニック"],
    correctIndex: 1,
    explanation:
      "CM7 と Dm7 の間を半音でつなぐ Dbm7 はクロマティック・パッシングコード。機能よりも滑らかさを目的とします。",
  },
  {
    id: "s14-q04",
    section: "s14-passing-chords",
    question: "ペダルポイントとは？",
    choices: [
      "コードを全て同じルートにする",
      "ベース音を保持したまま上部のコードが変化する手法",
      "オスティナート",
    ],
    correctIndex: 1,
    explanation:
      "特定のベース音を持続させたまま上部の和音だけを動かす手法。緊張感や浮遊感を生みます。",
  },
  {
    id: "s14-q05",
    section: "s14-passing-chords",
    question: "ドミナント・ペダルとは？",
    choices: ["V音をベースに保持する", "I音をベースに保持する", "IV音をベースに保持する"],
    correctIndex: 0,
    explanation:
      "V 音をベースに保つペダル。Key=C なら G を保持し Dm7/G-G7-CM7 など。解決前のサスペンスを高めます。",
  },
  {
    id: "s14-q06",
    section: "s14-passing-chords",
    question: "トニック・ペダルとは？",
    choices: ["V音をベースに保持する", "I音をベースに保持する", "bVII音をベースに保持する"],
    correctIndex: 1,
    explanation:
      "I 音をベースに保つペダル。上部が動いても安定感が保たれ、落ち着いた持続感を生みます。",
  },
  {
    id: "s14-q07",
    section: "s14-passing-chords",
    question: "ライン・クリシェとは？",
    choices: [
      "スケールを全音で動かす",
      "コードの一部の音が半音ずつ動く手法",
      "ベースラインだけが動く",
    ],
    correctIndex: 1,
    explanation:
      "例: Cm-CmM7-Cm7-Cm6。5th(G)を固定し、内声が C-B-Bb-A と半音で下行していく動きです。",
  },
  {
    id: "s14-q08",
    section: "s14-passing-chords",
    question: "ライン・クリシェで典型的に半音移動するのは？",
    choices: ["ルートと5thの間の内声", "ベース音", "メロディ"],
    correctIndex: 0,
    explanation:
      "多くはルートと5thの間にある内声が半音で動きます（例: ルートのオクターブ上の音や7thが下行）。",
  },
  {
    id: "s14-q09",
    section: "s14-passing-chords",
    question: "アッパー・ストラクチャー・トライアドとは？",
    choices: [
      "低音部のトライアド",
      "コードの上部にトライアドを重ねてテンションを表現",
      "分数コード",
    ],
    correctIndex: 1,
    explanation:
      "下部の基本和音の上に別のトライアドを重ね、テンションをまとめて鳴らすボイシング技法です。",
  },
  {
    id: "s14-q10",
    section: "s14-passing-chords",
    question: "スラッシュ・コード（分数コード）の捉え方は？",
    choices: ["無関係", "分母の音をベースにしたコードトーン+テンションの表現", "同じもの"],
    correctIndex: 1,
    explanation:
      "分母をベース音とし、分子の和音をその上に乗せる表記。転回形・テンション表現・ペダルなどに使えます。",
  },
  {
    id: "s14-q11",
    section: "s14-passing-chords",
    question: "Key=C で Gm7→C7→FM7 の分析は？",
    choices: ["ダイアトニック進行", "セカンダリーII-V/IV", "モーダルインターチェンジ"],
    correctIndex: 1,
    explanation:
      "FM7（IV）を仮の I とみなす II-V が Gm7-C7。IV へ向かうセカンダリー II-V です。",
  },
  {
    id: "s14-q12",
    section: "s14-passing-chords",
    question: "Key=C で AbM7→BbM7→CM7 の AbM7 と BbM7 は？",
    choices: ["IV→V", "bVI→bVII（モーダルインターチェンジ）", "セカンダリードミナント"],
    correctIndex: 1,
    explanation:
      "Ab=bVI、Bb=bVII。どちらも同主短調 Cm から借りた和音で、力強い上行解決を生みます。",
  },
  {
    id: "s14-q13",
    section: "s14-passing-chords",
    question: "モーダル・インターチェンジで最も一般的な借用元は？",
    choices: ["平行調", "同主短調（エオリアン/ドリアン）", "属調"],
    correctIndex: 1,
    explanation:
      "長調では同主短調（自然的短音階＝エオリアン等）から Fm7・AbM7・Bb7 などを借りるのが最も一般的です。",
  },
  {
    id: "s14-q14",
    section: "s14-passing-chords",
    question: "Key=C で Fm7→Bb7→CM7 の Bb7 は？",
    choices: ["V7", "bVII7（バックドアドミナント）", "V7/IV"],
    correctIndex: 1,
    explanation:
      "Bb7 は bVII7。Fm7-Bb7 は同主短調のII-Vで、bVII7→I のバックドア進行として CM7 へ解決します。",
  },
  {
    id: "s14-q15",
    section: "s14-passing-chords",
    question: "コンディミ（コンビネーション・オブ・ディミニッシュ）スケールの構成は？",
    choices: ["全音のみ", "半音-全音の交互配列（8音スケール）", "半音のみ"],
    correctIndex: 1,
    explanation:
      "半音と全音を交互に並べた8音スケール。ドミナント7th(b9)に対応し、b9・#9・#11・13 を含みます。",
  },

  // ==========================================================================
  // 第5章 / セクション3: 総合問題（10問）
  // ==========================================================================
  {
    id: "s15-q01",
    section: "s15-dom-mixed",
    question: "Key=C で CM7-C#dim7-Dm7-D#dim7-Em7 の分析は？",
    choices: [
      "ダイアトニック下行",
      "I-#Idim-IIm-#IIdim-IIIm（パッシングdim連続）",
      "全てセカンダリードミナント",
    ],
    correctIndex: 1,
    explanation:
      "ベースが C-C#-D-D#-E と半音上行。間に挟まる dim7 は連続するパッシングディミニッシュです。",
  },
  {
    id: "s15-q02",
    section: "s15-dom-mixed",
    question: "Key=C で Db7→CM7 と G7→CM7 の共通点は？",
    choices: [
      "どちらもダイアトニック",
      "どちらもCM7に解決するドミナント機能（裏コードと本来のV7）",
      "どちらもSDm",
    ],
    correctIndex: 1,
    explanation:
      "G7 は本来の V7、Db7 はその裏コード。両者ともトライトーン B-F を含み、CM7 へドミナントとして解決します。",
  },
  {
    id: "s15-q03",
    section: "s15-dom-mixed",
    question: "Key=C で Fm6 の構成音は？",
    choices: ["F, A, C, D", "F, Ab, C, D", "F, Ab, C, Db"],
    correctIndex: 1,
    explanation:
      "Fm6 = F-Ab-C-D。サブドミナントマイナーの一種で、Dm7(b5) と同じ構成音を持ちます。",
  },
  {
    id: "s15-q04",
    section: "s15-dom-mixed",
    question: "Fm6 と Dm7(b5) が異名同和音である理由は？",
    choices: [
      "偶然",
      "F-Ab-C-D = D-F-Ab-C（ルートが違うだけで同じ構成音）",
      "転回形ではないから",
    ],
    correctIndex: 1,
    explanation:
      "Dm7(b5)=D-F-Ab-C、Fm6=F-Ab-C-D。並べ替えると全く同じ4音。ルートの解釈が違うだけです。",
  },
  {
    id: "s15-q05",
    section: "s15-dom-mixed",
    question: "Key=C で Am7-Ab7-GM7-C7-FM7 の Ab7 は？",
    choices: ["V7/bVI", "bII7/V（裏コードでVへ解決）", "サブドミナントマイナー"],
    correctIndex: 1,
    explanation:
      "Ab7→G（V）と半音下行。Ab7 は V7/V=D7 のトライトーン代理で、V へ向かう bII7/V です。",
  },
  {
    id: "s15-q06",
    section: "s15-dom-mixed",
    question: "ピカルディの3度とは？",
    choices: [
      "長調で短3度を使うこと",
      "短調の曲の最後で長3度の和音（メジャーコード）で終わること",
      "第3音を省略すること",
    ],
    correctIndex: 1,
    explanation:
      "短調の曲を、最後だけ同主長調の主和音（長3度を持つメジャー）で締めくくる古典的な技法です。",
  },
  {
    id: "s15-q07",
    section: "s15-dom-mixed",
    question: "Key=Cm でのピカルディの主和音は？",
    choices: ["Cマイナー", "Cメジャー（C-E-G）", "C7"],
    correctIndex: 1,
    explanation:
      "Cm の曲の終止で第3音 Eb を E に上げ、C メジャー（C-E-G）で終わるのがピカルディの3度です。",
  },
  {
    id: "s15-q08",
    section: "s15-dom-mixed",
    question: "Key=C で CM7-Bm7(b5)-E7-Am7-D7-Dm7-G7-CM7 の E7 と D7 は？",
    choices: ["V7/IIIとV7/II", "V7/VIとV7/V", "V7/VとV7/IV"],
    correctIndex: 1,
    explanation:
      "E7→Am7 なので E7=V7/VI。D7 は G（V）へ向かうドミナントで V7/V。どちらもセカンダリードミナントです。",
  },
  {
    id: "s15-q09",
    section: "s15-dom-mixed",
    question: "ドミナント・ディミニッシュ・スケール（半全）を使うコードは？",
    choices: ["メジャー7th", "V7(b9,#9,#11,13)などのドミナント", "マイナー7th"],
    correctIndex: 1,
    explanation:
      "半全ディミニッシュはドミナント7thに対応し、b9・#9・#11・13 のテンションを生みます。",
  },
  {
    id: "s15-q10",
    section: "s15-dom-mixed",
    question: "Key=C で Gm7-Gb7-FM7 の Gb7 は何？",
    choices: ["V7/bVII", "bII7/IV（C7の裏コード）", "パッシングコード"],
    correctIndex: 1,
    explanation:
      "II-V/IV は Gm7-C7-FM7。その C7 をトライトーン代理した Gb7 が bII7/IV。Gb→F と半音で解決します。",
  },

  // ==========================================================================
  // 第6章 / セクション1: メジャー系コード・スケール（15問）
  // ==========================================================================
  {
    id: "s16-q01",
    section: "s16-major-scales",
    question: "コード・スケールとは？",
    choices: [
      "コードトーンだけで構成されるスケール",
      "各コードに対応するスケール",
      "メジャースケールの別名",
    ],
    correctIndex: 1,
    explanation:
      "そのコードが鳴っているときに使えるスケール。コードトーン＋テンション＋アヴォイドで構成されます。",
  },
  {
    id: "s16-q02",
    section: "s16-major-scales",
    question: "IM7 に対応するコード・スケールは？",
    choices: ["アイオニアン", "ドリアン", "ミクソリディアン"],
    correctIndex: 0,
    explanation:
      "IM7=アイオニアン（メジャースケールそのもの）。W-W-H-W-W-W-H の並びです。",
  },
  {
    id: "s16-q03",
    section: "s16-major-scales",
    question: "IIm7 に対応するコード・スケールは？",
    choices: ["エオリアン", "ドリアン", "フリジアン"],
    correctIndex: 1,
    explanation:
      "IIm7=ドリアン。ナチュラルマイナーの第6音が半音高く、ナチュラル6thを持つのが特徴です。",
  },
  {
    id: "s16-q04",
    section: "s16-major-scales",
    question: "IIIm7 に対応するコード・スケールは？",
    choices: ["ドリアン", "フリジアン", "ロクリアン"],
    correctIndex: 1,
    explanation:
      "IIIm7=フリジアン。b2（b9）を持ち、これがアヴォイドノートになります。",
  },
  {
    id: "s16-q05",
    section: "s16-major-scales",
    question: "IVM7 に対応するコード・スケールは？",
    choices: ["アイオニアン", "リディアン", "ミクソリディアン"],
    correctIndex: 1,
    explanation:
      "IVM7=リディアン。メジャースケールの第4音が半音高く（#4）、#11 が使えてアヴォイドがありません。",
  },
  {
    id: "s16-q06",
    section: "s16-major-scales",
    question: "V7 に対応するコード・スケールは？",
    choices: ["リディアン", "ミクソリディアン", "ドリアン"],
    correctIndex: 1,
    explanation:
      "V7=ミクソリディアン。メジャースケールの第7音が半音低く（b7）、ドミナント7thと一致します。",
  },
  {
    id: "s16-q07",
    section: "s16-major-scales",
    question: "VIm7 に対応するコード・スケールは？",
    choices: ["ドリアン", "エオリアン", "フリジアン"],
    correctIndex: 1,
    explanation:
      "VIm7=エオリアン（自然的短音階）。b6 を持ち、9th が使えるのが特徴です。",
  },
  {
    id: "s16-q08",
    section: "s16-major-scales",
    question: "VIIm7(b5) に対応するコード・スケールは？",
    choices: ["フリジアン", "ロクリアン", "エオリアン"],
    correctIndex: 1,
    explanation:
      "VIIm7(b5)=ロクリアン。メジャースケールの第7音から始め、b2・b3・b5・b6・b7 を持ちます。",
  },
  {
    id: "s16-q09",
    section: "s16-major-scales",
    question: "リディアンとアイオニアンの違いは？",
    choices: ["第4音が#4か4か", "第7音が異なる", "第3音が異なる"],
    correctIndex: 0,
    explanation:
      "リディアンは#4（増4度）、アイオニアンは4（完全4度）。リディアンはアヴォイドがない点が大きな違いです。",
  },
  {
    id: "s16-q10",
    section: "s16-major-scales",
    question: "ドリアンとエオリアンの違いは？",
    choices: ["第2音が異なる", "第6音がナチュラル6thかb6か", "第7音が異なる"],
    correctIndex: 1,
    explanation:
      "ドリアンはナチュラル6th、エオリアンは b6。ドリアンの方が明るい短調の響きを持ちます。",
  },
  {
    id: "s16-q11",
    section: "s16-major-scales",
    question: "フリジアンの特徴的な音は？",
    choices: ["#4", "b2（b9）", "b7"],
    correctIndex: 1,
    explanation:
      "フリジアンの b2 はスパニッシュ感のある響き。IIIm7 で使うときはこの b2 がアヴォイドノートになります。",
  },
  {
    id: "s16-q12",
    section: "s16-major-scales",
    question: "チャーチ・モードを明るい順に並べると？",
    choices: [
      "アイオニアン→ドリアン→フリジアン→リディアン…",
      "リディアン→アイオニアン→ミクソリディアン→ドリアン→エオリアン→フリジアン→ロクリアン",
      "ロクリアン→フリジアン→エオリアン→ドリアン…",
    ],
    correctIndex: 1,
    explanation:
      "特性音の明るさ順では、リディアンが最も明るく、ロクリアンが最も暗い。長3度系→短3度系の順に並びます。",
  },
  {
    id: "s16-q13",
    section: "s16-major-scales",
    question: "リディアンb7スケールはどのコードで使う？",
    choices: ["IM7", "V7/V（ダブルドミナント）など非ダイアトニックなドミナント", "IIm7"],
    correctIndex: 1,
    explanation:
      "リディアンb7（リディアンの7thをb7に）は #11 を持つドミナント7th 用。V7/V など非ダイアトニックなドミナントに合います。",
  },
  {
    id: "s16-q14",
    section: "s16-major-scales",
    question: "メロディックマイナースケールの別名は？",
    choices: ["ハーモニックマイナー", "ジャズマイナースケール", "ドリアン"],
    correctIndex: 1,
    explanation:
      "ジャズではメロディックマイナーの上行形のみを上行・下行ともに使うため、ジャズマイナースケールと呼ばれます。",
  },
  {
    id: "s16-q15",
    section: "s16-major-scales",
    question: "メロディックマイナーから派生するモードの数は？",
    choices: ["5つ", "7つ", "12"],
    correctIndex: 1,
    explanation:
      "7音スケールなので各音を起点に7つのモードが得られます（オルタード、リディアンb7 などが含まれます）。",
  },

  // ==========================================================================
  // 第6章 / セクション2: マイナー系・ドミナント系コード・スケール（15問）
  // ==========================================================================
  {
    id: "s17-q01",
    section: "s17-minor-dom-scales",
    question: "オルタード・スケールはメロディックマイナーの何番目のモード？",
    choices: ["第4モード", "第7モード", "第1モード"],
    correctIndex: 1,
    explanation:
      "メロディックマイナーの第7音から始めたものがオルタード（スーパーロクリアン）。半音上のメロディックマイナーと同じ音です。",
  },
  {
    id: "s17-q02",
    section: "s17-minor-dom-scales",
    question: "オルタード・スケールで使えるテンションは？",
    choices: ["9, 11, 13", "b9, #9, #11, b13", "b9, 11, b13"],
    correctIndex: 1,
    explanation:
      "テンションがすべてオルタードされた b9・#9・#11・b13 を持ちます。V7(alt) で使用します。",
  },
  {
    id: "s17-q03",
    section: "s17-minor-dom-scales",
    question: "リディアンb7スケールはメロディックマイナーの何番目のモード？",
    choices: ["第7モード", "第4モード", "第2モード"],
    correctIndex: 1,
    explanation:
      "メロディックマイナーの第4音から始めたものがリディアンb7（リディアン・ドミナント）。#11 と b7 を持ちます。",
  },
  {
    id: "s17-q04",
    section: "s17-minor-dom-scales",
    question: "ハーモニックマイナー・パーフェクト5thビロウ（HmP5↓）はどこで使う？",
    choices: ["長調のV7", "短調のV7", "IVm7"],
    correctIndex: 1,
    explanation:
      "V7(b9,b13) に対応。Key=Am の E7 で使うのが代表例で、A ハーモニックマイナーの第5音から始めたスケールです。",
  },
  {
    id: "s17-q05",
    section: "s17-minor-dom-scales",
    question: "ホールトーン・スケールの構成は？",
    choices: ["全て半音", "全て全音（6音）", "全音と半音の交互"],
    correctIndex: 1,
    explanation:
      "C-D-E-F#-G#-A# のようにすべて全音で進む6音スケール。aug7 や 7(#11) に使われます。",
  },
  {
    id: "s17-q06",
    section: "s17-minor-dom-scales",
    question: "ホールトーン・スケールは全部で何種類？",
    choices: ["6種類", "2種類", "12種類"],
    correctIndex: 1,
    explanation:
      "全音だけで構成されるため、C から始まるものと Db から始まるものの2グループしか存在しません。",
  },
  {
    id: "s17-q07",
    section: "s17-minor-dom-scales",
    question: "ディミニッシュ・スケール（全半）はどのコードで使う？",
    choices: ["ドミナント7th", "dim7コード", "メジャー7th"],
    correctIndex: 1,
    explanation:
      "全音-半音の交互（W-H）はディミニッシュ7thコードに対応します。半全（H-W）はドミナント用です。",
  },
  {
    id: "s17-q08",
    section: "s17-minor-dom-scales",
    question: "コンディミ・スケール（半全）はどのコードで使う？",
    choices: ["dim7コード", "V7(b9)コード", "メジャー7th"],
    correctIndex: 1,
    explanation:
      "半音-全音の交互＝コンビネーション・オブ・ディミニッシュ。b9 を持つドミナント7thに対応します。",
  },
  {
    id: "s17-q09",
    section: "s17-minor-dom-scales",
    question: "ドリアンb2スケールはメロディックマイナーの何番目のモード？",
    choices: ["第2モード", "第3モード", "第6モード"],
    correctIndex: 0,
    explanation:
      "メロディックマイナーの第2音から始めたものがドリアンb2（フリジアン♮6）。b2 とナチュラル6thを持ちます。",
  },
  {
    id: "s17-q10",
    section: "s17-minor-dom-scales",
    question: "ロクリアン#2スケールはどのコードで使う？",
    choices: ["m7コード", "m7(b5)コード", "7thコード"],
    correctIndex: 1,
    explanation:
      "ロクリアンの b2 を #2（=9th）にしたもの。メロディックマイナー第6モードで、m7(b5) に明るさを加えます。",
  },
  {
    id: "s17-q11",
    section: "s17-minor-dom-scales",
    question: "ブルース・スケールの構成音（Cの場合）は？",
    choices: ["C, D, Eb, F, G, Bb", "C, Eb, F, Gb, G, Bb", "C, Eb, F, G, Bb"],
    correctIndex: 1,
    explanation:
      "マイナーペンタトニック（C-Eb-F-G-Bb）に b5（Gb）を加えた6音スケールです。",
  },
  {
    id: "s17-q12",
    section: "s17-minor-dom-scales",
    question: "ビバップ・ドミナント・スケールの特徴は？",
    choices: [
      "ドリアンにb5を加える",
      "ミクソリディアンにナチュラル7thを加えた8音スケール",
      "リディアンに#5を加える",
    ],
    correctIndex: 1,
    explanation:
      "C-D-E-F-G-A-Bb-B の8音。経過音のナチュラル7thにより、8分音符でコードトーンが拍頭に揃います。",
  },
  {
    id: "s17-q13",
    section: "s17-minor-dom-scales",
    question: "ペンタトニック・スケールの基本的な種類は？",
    choices: ["メジャーペンタのみ", "メジャーペンタとマイナーペンタ", "5種類"],
    correctIndex: 1,
    explanation:
      "5音音階にはメジャーペンタトニックとマイナーペンタトニックの2種類があり、平行調の関係にあります。",
  },
  {
    id: "s17-q14",
    section: "s17-minor-dom-scales",
    question: "Cメジャー・ペンタトニックの構成音は？",
    choices: ["C, D, E, F, G", "C, D, E, G, A", "C, Eb, F, G, Bb"],
    correctIndex: 1,
    explanation:
      "メジャースケールから4thと7th（アヴォイドになりやすい音）を除いた C-D-E-G-A の5音です。",
  },
  {
    id: "s17-q15",
    section: "s17-minor-dom-scales",
    question: "Aマイナー・ペンタとCメジャー・ペンタの関係は？",
    choices: ["同じ構成音（平行調関係）", "異なる構成音", "1音だけ違う"],
    correctIndex: 0,
    explanation:
      "Aマイナーペンタ（A-C-D-E-G）と Cメジャーペンタ（C-D-E-G-A）は同じ5音。平行調の関係です。",
  },

  // ==========================================================================
  // 第6章 / セクション3: 総合問題（10問）
  // ==========================================================================
  {
    id: "s18-q01",
    section: "s18-scales-mixed",
    question: "Dm7-G7-CM7 の各コードのスケールは？",
    choices: [
      "Dドリアン-Gミクソリディアン-Cアイオニアン",
      "Dエオリアン-Gリディアン-Cアイオニアン",
      "Dフリジアン-Gミクソリディアン-Cリディアン",
    ],
    correctIndex: 0,
    explanation:
      "Key=C の II-V-I。IIm7=ドリアン、V7=ミクソリディアン、IM7=アイオニアン。すべて C メジャースケール上の音です。",
  },
  {
    id: "s18-q02",
    section: "s18-scales-mixed",
    question: "Bm7(b5)-E7-Am7（Key=Am）の各スケールは？",
    choices: [
      "Bドリアン-Eミクソリディアン-Aドリアン",
      "Bロクリアン-EHmP5↓-Aエオリアン",
      "Bフリジアン-Eオルタード-Aドリアン",
    ],
    correctIndex: 1,
    explanation:
      "短調の II-V-I。IIm7(b5)=ロクリアン、V7=HmP5↓（b9,b13を持つ）、Im7=エオリアンが基本選択です。",
  },
  {
    id: "s18-q03",
    section: "s18-scales-mixed",
    question: "V7(alt) でルートの半音上のメロディックマイナーを弾けばよい理由は？",
    choices: [
      "偶然の一致",
      "オルタードスケール＝メロディックマイナーの第7モードだから",
      "アヴォイドを避けるため",
    ],
    correctIndex: 1,
    explanation:
      "G7alt で使う G オルタードは Ab メロディックマイナーの第7音始まり。だから半音上の Ab mel.min を弾けば一致します。",
  },
  {
    id: "s18-q04",
    section: "s18-scales-mixed",
    question: "Key=C で FM7 にリディアンを使う場合、アヴォイドは？",
    choices: ["11thがアヴォイド", "ない（リディアンにはアヴォイドがない）", "7thがアヴォイド"],
    correctIndex: 1,
    explanation:
      "リディアンの#4（=B）は FM7 の #11 として機能し、コードトーンとぶつかりません。だからアヴォイドが無いのが特長です。",
  },
  {
    id: "s18-q05",
    section: "s18-scales-mixed",
    question: "IM7 でアイオニアンを使う場合のアヴォイドは？",
    choices: ["4th(11th)", "7th", "6th"],
    correctIndex: 0,
    explanation:
      "アイオニアンの4th（C なら F）は3rd（E）と半音でぶつかるためアヴォイドノートになります。",
  },
  {
    id: "s18-q06",
    section: "s18-scales-mixed",
    question: "IIm7 にドリアンを使うとき、ナチュラル6thはテンションとして使える？",
    choices: ["はい（13thとして）", "いいえ", "場合による"],
    correctIndex: 0,
    explanation:
      "ドリアンのナチュラル6thは13thとして使えるテンション。これがエオリアン（b6）との大きな違いです。",
  },
  {
    id: "s18-q07",
    section: "s18-scales-mixed",
    question: "Am7 にフリジアンとエオリアンを使う場合の違いは？",
    choices: ["同じスケール", "フリジアンはb9(b2)、エオリアンは9(2)", "フリジアンの方が明るい"],
    correctIndex: 1,
    explanation:
      "IIIm7=フリジアン（b9がアヴォイド）、VIm7=エオリアン（9thが使える）。同じ Am7 でも機能で使い分けます。",
  },
  {
    id: "s18-q08",
    section: "s18-scales-mixed",
    question: "ミクソリディアンb6スケールはメロディックマイナーの何番目のモード？",
    choices: ["第5モード", "第3モード", "第4モード"],
    correctIndex: 0,
    explanation:
      "メロディックマイナーの第5音から始めたものがミクソリディアンb6（ヒンドゥー）。b13 を持つドミナントに使います。",
  },
  {
    id: "s18-q09",
    section: "s18-scales-mixed",
    question: "リディアン・オーギュメント・スケールはどのコードで使う？",
    choices: ["dim7コード", "augM7コードやIIIM7(#5)", "sus4コード"],
    correctIndex: 1,
    explanation:
      "メロディックマイナー第3モード。#4 と #5 を持ち、augM7（メジャー7th(#5)）系のコードに合います。",
  },
  {
    id: "s18-q10",
    section: "s18-scales-mixed",
    question: "コード・スケールを学ぶ最大の目的は？",
    choices: [
      "スケール練習のため",
      "アドリブやアレンジで使える音の選択肢を理論的に把握するため",
      "暗記のため",
    ],
    correctIndex: 1,
    explanation:
      "コードスケールは即興演奏やアレンジの基盤。コードごとに使える音・避ける音を理論的に導き出せます。",
  },
];

/** セクションIDに属する問題を返す */
export function getQuestionsBySection(sectionId: string): Question[] {
  return questions.filter((q) => q.section === sectionId);
}

/** セクションメタ情報を取得 */
export function getSection(sectionId: string): Section | undefined {
  return SECTIONS.find((s) => s.id === sectionId);
}
