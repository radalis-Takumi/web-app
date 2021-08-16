const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answer: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answer: [
      'MOTHER2',
      'スーパーマリオブラザーズ3',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answer: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct: 'セシル'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  for(let i = 0;i < buttonLength;i++){
    $button[i].textContent = quiz[quizIndex].answer[i];
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }
  else{
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題がまだあればこちらを実行
    setupQuiz();
  }
  else{
    //問題がもう無ければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    quizIndex = 0;
    score = 0;
    setupQuiz();
  }
}

//ボタンをクリックしたら正誤判定
for(let i = 0;i < buttonLength;i++){
  $button[i].addEventListener('click', (e) => {
    clickHandler(e);
  });
}