class Sentence {
  constructor(chinese, english, sentence, tags) {
    this.chinese = chinese;
    this.english = english;
    this.sentence = sentence;
    this.tags = tags;
  }

  static joinFirst(s) {
    return s.map((w) => (Array.isArray(w) ? w[0] : w)).join("");
  }

  getWords() {
    return this.sentence.map((w) =>
      Array.isArray(w) ? Sentence.joinFirst(w) : w
    );
  }

  getStr() {
    return this.getWords().join("");
  }

  getAnnotatedStr() {
    const res = [];
    this.sentence.forEach((w) => {
      if (Array.isArray(w)) {
        w.forEach((w2) => {
          res.push(w2);
        });
      } else {
        res.push(w);
      }
    });
    return res;
  }
}

const data = [
  new Sentence(
    ["梦的延续"],
    ["The continuation of a dream"],
    [[["夢", "ゆめ"]], "の", "つづき"],
    ["『Again』", "anime"]
  ),
  new Sentence(
    ["明明应该一直在追逐着的"],
    ["I should have been chasing"],
    [[["追", "お"], "いかけ", ["ていた", "る"]], "はず", "なのに"],
    ["『Again』", "anime"]
  ),
  new Sentence(
    ["曲折的道路"],
    ["Curved pathes"],
    [[["曲", "ま"], "が", ["りくねった", "る"]]],
    ["『Again』", "anime"]
  ),
  new Sentence(
    ["人在细小的道路上摔倒"],
    ["People fall on a narrow path"],
    [
      [["細", "ほそ"], "い", ["道", "みち"]],
      [["人", "ひと"]],
      "に",
      "つまづく",
    ],
    ["『Again』", "anime"]
  ),
  new Sentence(
    ["爱丽丝不吃"],
    ["As for Alice, doesn't eat"],
    ["アリス", "は", [["食", "た"], "べ", ["ない", "る"]]],
    ["verb"]
  ),
  // ジムが遊ばない
  new Sentence(
    ["吉姆不玩"],
    ["Jim is the one that doesn't play"],
    [
      "ジム",
      "は",
      [
        ["遊", "あそ"],
        ["ばない", "び"],
      ],
    ],
    ["verb"]
  ),
  // ボブもしない
  new Sentence(
    ["鲍勃也不玩"],
    ["Bob also doesn't play"],
    ["ボブ", "も", [["しない", "する"]]],
    ["verb"]
  ),
  // お金がない
  new Sentence(
    ["没有钱"],
    ["Money is the thing that doesn't exist"],
    [["お", ["金", "かね"]], "が", [["ない", "ある"]]],
    ["verb"]
  ),
  // 私は買わない
  new Sentence(
    ["我不买"],
    ["As for me, I don't buy"],
    [
      [["私", "わたし"]],
      "は",
      [
        ["買", "か"],
        ["わない", "う"],
      ],
    ],
    ["verb"]
  ),
  // 猫はいない
  new Sentence(
    ["猫不在"],
    ["As for the cat, it doesn't exist"],
    [[["猫", "ねこ"]], "は", ["い", ["ない", "る"]]],
    ["verb"]
  ),
  // バスが来ない
  new Sentence(
    ["公共汽车不来"],
    ["Bus is the thing that doesn't come"],
    ["バス", "が", [["来「こ」ない", "くる"]]],
    ["verb"]
  ),
  // 友達が来た
  new Sentence(
    ["朋友来了"],
    ["Friend is the one that came"],
    [[["友達", "ともだち"]], "が", [["来た", "きた"]]],
    ["verb"]
  ),
  // 今日は走った
  new Sentence(
    ["今天跑了"],
    ["Today is the day that I ran"],
    [[["今日", "きょう"]], "は", [["走った", "はしる"]]],
    ["verb"]
  ),
  // 勉強はした
  new Sentence(
    ["学习了"],
    ["Study is the thing that I did"],
    [[["勉強", "べんきょう"]], "は", [["した", "する"]]],
    ["verb"]
  ),
  // 会社へ行った
  new Sentence(
    ["去了公司"],
    ["Went to the company"],
    [[["会社", "かいしゃ"]], "へ", [["行った", "いく"]]],
    ["verb"]
  ),
  // 彼女は日本語が話した
  new Sentence(
    ["她说了日语"],
    ["As for her, she spoke Japanese"],
    [
      [["彼女", "かのじょ"]],
      "は",
      [["日本語", "にほんご"]],
      "が",
      [["話した", "はなす"]],
    ],
    ["verb"]
  ),
  // 海岸に泳いだ
  new Sentence(
    ["在海岸游泳"],
    ["Swam at the beach"],
    [[["海岸", "かいがん"]], "に", [["泳いだ", "およぐ"]]],
    ["verb"]
  ),
  // 鉛筆で書いた
  new Sentence(
    ["用铅笔写了"],
    ["Wrote with a pencil"],
    [[["鉛筆", "えんぴつ"]], "で", [["書いた", "かく"]]],
    ["verb"]
  ),
  // スズメバチに噛んだ
  new Sentence(
    ["被黄蜂咬了"],
    ["Was bitten by a hornet"],
    ["スズメバチ", "に", [["噛んだ", "かむ"]]],
    ["verb"]
  ),
  // 若くして癌で死んだ
  new Sentence(
    ["年轻时死于癌症"],
    ["Died of cancer at a young age"],
    [[["若", "わか"], "くして"], [["癌", "がん"]], "で", [["死んだ", "しね"]]],
    ["verb"]
  ),
  // 爪をきった
  new Sentence(
    ["剪了指甲"],
    ["Cut the nails"],
    [[["爪", "つめ"]], "を", [["切った", "きる"]]],
    ["verb"]
  ),
  // 切符を買った
  new Sentence(
    ["买了票"],
    ["Bought the tickets"],
    [[["切符", "きっぷ"]], "を", [["買った", "かう"]]],
    ["verb"]
  ),
  // 荷物を持った
  new Sentence(
    ["拿了行李"],
    ["Held the luggage"],
    [[["荷物", "にもつ"]], "を", [["持った", "もつ"]]],
    ["verb"]
  ),
];
