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
    ["『Again』"]
  ),
  new Sentence(
    ["明明应该一直在追逐着的"],
    ["I should have been chasing"],
    [[["追", "お"], "いかけ", ["ていた", "る"]], "はず", "なのに"],
    ["『Again』"]
  ),
  new Sentence(
    ["曲折的道路"],
    ["Curved pathes"],
    [[["曲", "ま"], "が", ["りくねった", "る"]]],
    ["『Again』"]
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
    ["『Again』"]
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
    ["鲍勃也不做"],
    ["Bob also doesn't"],
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
    ["バス", "が", [["来【こ】ない", "くる"]]],
    ["verb"]
  ),
  // 友達が来た
  new Sentence(
    ["朋友来了"],
    ["Friend is the one that came"],
    [[["友達", "ともだち"]], "が", [["来【き】た", "くる"]]],
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
    ["As for study, I did"],
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
    [[["若", "わか"], "くして"], [["癌", "がん"]], "で", [["死んだ", "しぬ"]]],
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
  // 学生じゃない人は、学校に行かない
  new Sentence(
    ["不是学生的人，不去学校"],
    ["As for the persons that isn't a student, don't go to school"],
    [
      [["学生", "がくせい"], "じゃない"],
      "人",
      "は、",
      [["学校", "がっこう"], "に"],
      [["行かない", "いく"]],
    ],
    ["adj-adv"]
  ),
  // 子供だったアリスが立派な大人になった
  new Sentence(
    ["小孩的爱丽丝变成了立派的大人"],
    ["The Alice who was a child became a fine adult"],
    [
      [["子供", "こども"], "だった"],
      "アリス",
      "が",
      [["立派", "りっぱ"], "な"],
      [["大人", "おとな"]],
      "に",
      [["なった", "なる"]],
    ],
    ["adj-adv"]
  ),
  // 友達じゃなかったアリスは、いい友達になった
  new Sentence(
    ["不是朋友的爱丽丝变成了好朋友"],
    ["Alice who wasn't a friend, became a good friend"],
    [
      [["友達", "ともだち"], "じゃなかった"],
      "アリス",
      "は、",
      ["いい", ["友達", "ともだち"]],
      "に",
      [["なった", "なる"]],
    ],
    ["adj-adv"]
  ),
  // 先週に医者だったボブは、仕事お辞めた
  new Sentence(
    ["上周是医生的鲍勃辞职了"],
    ["Bob who was a doctor last week, quit his job"],
    [
      [["先週", "せんしゅう"]],
      "に",
      [["医者", "いしゃ"], "だった"],
      "ボブ",
      "は、",
      [
        ["仕事", "しごと"],
        ["お辞めた", "やめる"],
      ],
    ],
    ["adj-adv"]
  ),
  // 先週に映画を見た人は誰
  new Sentence(
    ["上周看了电影的人是谁"],
    ["Who is the person who watched the movie last week"],
    [
      [["先週", "せんしゅう"], "に"],
      [["映画", "えいが"], "を"],
      [["見た", "みる"], "人"],
      "は",
      [["誰", "だれ"]],
    ],
    ["adj-adv"]
  ),
  // 晩ご飯を食べなかった人は、映画で見た銀行に行った
  new Sentence(
    ["没吃晚饭的人，去了在电影里看到的银行"],
    [
      "The person who didn't eat dinner, went to the bank that was seen in the movie",
    ],
    [
      [["晩ご飯", "ばんごはん"], "を"],
      [["食べなかった", "たべる"], "人"],
      "は、",
      [["映画", "えいが"], "で"],
      [["見た", "みる"]],
      [["銀行", "ぎんこう"]],
      "に",
      [["行った", "いく"]],
    ],
    ["adj-adv"]
  ),
  // 白いのは、かわいい
  new Sentence(
    ["白色的是可爱的"],
    ["The white things are cute"],
    [[["白", "しろ"], "いの"], "は、", "かわいい"],
    ["adj-adv"]
  ),
  // 静かなのが、アリスの部屋だ
  new Sentence(
    ["安静的是爱丽丝的房间"],
    ["The quiet room is Alice's room"],
    [[["静か", "しずか"], "なの"], "が、", "アリスの", [["部屋", "へや"]]],
    ["adj-adv"]
  ),
  // 授業に行くのを忘れた
  new Sentence(
    ["忘了去上课"],
    ["Forgot to go to class"],
    [
      [["授業", "じゅぎょう"]],
      "に",
      [["行く", "いく"], "の"],
      "を",
      [["忘れた", "わすれる"]],
    ],
    ["adj-adv"]
  ),
  // 今は忙しいのだ
  new Sentence(
    ["现在很忙"],
    ["The thing is that (I'm) busy now"],
    [["今", "いま"], "は", [["忙しい", "いそがしい"]], "の", "だ"],
    ["adj-adv"]
  ),
  // その人が買うんじゃなかったの
  new Sentence(
    ["那个人不是买了吗"],
    ["Wasn't that that person was the one to buy"],
    ["その人", "が", [["買うんじゃなかった", "買うんだ"], "の"]],
    ["adj-adv"]
  ),
  // ジムなのだ
  new Sentence(
    ["是吉姆"],
    ["It's Jim (with explanatory tone)"],
    ["ジムな", "のだ"],
    ["adj-adv"]
  ),
];
