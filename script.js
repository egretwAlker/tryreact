"use strict";

const useState = React.useState;
const useEffect = React.useEffect;
const useRef = React.useRef;

function randint(n) {
  return Math.floor(Math.random() * n);
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// collect all the tags
const tags = new Set();
data.forEach((d) => {
  d.tags.forEach((t) => {
    tags.add(t);
  });
});

// collect all the words
const words = new Array();
data.forEach((d) => {
  words.push(...d.getWords());
});

const kanae = new Array();
data.forEach((d) => {
  d.getAnnotatedStr().forEach((t) => {
    if (Array.isArray(t)) {
      kanae.push(...t[1]);
    }
  });
});

let replay = null;

function interplay(selected, setSelected, nonSelected, setNonSelected) {
  return [
    <div id={"selected"} key={selected}>
      {selected.map((w, index) => (
        <button
          key={(w, index)}
          onClick={() => {
            setNonSelected([...nonSelected, w]);
            setSelected(selected.filter((_, k) => k !== index));
          }}
          className={"magnet"}
        >
          {w}
        </button>
      ))}
    </div>,
    <div id={"non-selected"} key={nonSelected}>
      {nonSelected.map((w, index) => (
        <button
          key={(w, index)}
          onClick={() => {
            setSelected([...selected, w]);
            setNonSelected(nonSelected.filter((_, k) => k !== index));
          }}
          className={"magnet"}
        >
          {w}
        </button>
      ))}
    </div>,
  ];
}

function makeQuiz2(sentence) {
  function surveyQuizList(quizList) {
    let pos = -1;
    const monitorStr = quizList.map((w, index) => {
      if (Array.isArray(w) && pos === -1) {
        pos = index;
        return (
          <span className={"current-target"} key={w}>
            {w[0]}
          </span>
        );
      } else return <span key={w}>{Array.isArray(w) ? w[0] : w}</span>;
    });
    return [monitorStr, pos];
  }

  function Quiz2({ quizList }) {
    const [monitorStr, pos] = surveyQuizList(quizList);

    if (pos === -1) {
      confetti.play(1000);
      return (
        <div id="quiz">
          <div>
            <p>{sentence.english}</p>
            <p>{sentence.chinese}</p>
          </div>
          <div>
            <p>{quizList.join("")}</p>
          </div>
          <div onClick={() => replay()}>
            <center>[click to replay]</center>
          </div>
          <div>
            <p>Tags : {sentence.tags.join(" ")}</p>
          </div>
        </div>
      );
    }

    let [selected, setSelected] = useState([]);
    let [nonSelected, setNonSelected] = useState(
      (() => {
        const initNonSelected = Array.from(quizList[pos][1]);
        for (
          let i = 0;
          i < Math.max(1, Math.floor(initNonSelected.length / 3));
          i++
        )
          initNonSelected.push(kanae[randint(kanae.length)]);
        shuffle(initNonSelected);
        return initNonSelected;
      })()
    );

    if (pos >= 0 && selected.join("") === quizList[pos][1]) {
      quizList[pos] = quizList[pos][0];
      return <Quiz2 quizList={quizList} />;
    }

    return (
      <>
        <div id="quiz">
          <div>
            <p>{sentence.english}</p>
            <p>{sentence.chinese}</p>
            <p>{monitorStr}</p>
          </div>
          {interplay(selected, setSelected, nonSelected, setNonSelected)}
          <div>
            <p>Tags : {sentence.tags.join(" ")}</p>
          </div>
        </div>
      </>
    );
  }
  return <Quiz2 quizList={sentence.getAnnotatedStr()} />;
}

function makeQuiz(tag) {
  const sentences = data.filter((d) => d.tags.includes(tag));
  const sentence = sentences[randint(sentences.length)];
  const initNonSelected = sentence.getWords();
  for (let i = 0; i < Math.max(1, Math.floor(initNonSelected.length / 3)); i++)
    initNonSelected.push(words[randint(words.length)]);
  shuffle(initNonSelected);

  function Quiz() {
    let [selected, setSelected] = useState([]);
    let [nonSelected, setNonSelected] = useState(initNonSelected);

    if (selected.join("") === sentence.getStr()) return makeQuiz2(sentence);

    return (
      <>
        <div id="quiz">
          <div>
            <p>{sentence.english}</p>
            <p>{sentence.chinese}</p>
          </div>
          {interplay(selected, setSelected, nonSelected, setNonSelected)}
          <div>
            <p>Tags : {sentence.tags.join(" ")}</p>
          </div>
        </div>
      </>
    );
  }

  return <Quiz />;
}

function App() {
  const [token, setToken] = useState([0, null]);
  const Quiz = useRef(null);
  replay = (t = null) => {
    if (t === null) Quiz.current = makeQuiz(token[1]);
    else Quiz.current = makeQuiz((token[1] = t));
    setToken([token[0] + 1, token[1]]);
  };
  return (
    <>
      <header>
        {Array.from(tags).map((t) => (
          <button
            key={t}
            className={"tag"}
            onClick={() => {
              replay(t);
            }}
          >
            {t}
          </button>
        ))}
      </header>
      <main>
        {Quiz.current === null ? (
          <>
            <p>Choose a tag to begin with.</p>
            <p onClick={() => confetti.play(1000)}>
              关于本程序：本人是自学日语的（菜鸡）；顺便联系一下刚学的
              react。语法方面的话靠的是 Tae
              Kim。这里主要是希望能够靠句子样例来记住知识点呢。（请勿点击此文本。）
            </p>
          </>
        ) : (
          Quiz.current
        )}
      </main>
    </>
  );
}

const domContainer = document.querySelector("#a-react-app");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
