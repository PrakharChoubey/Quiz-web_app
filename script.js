const quizdata = [
  {
    question: "2+2?",
    a1: "3",
    b2: "4",
    c3: "5",
    d4: "i dont know",
    correct: "b",
  },
  {
    question: "what is the most used programming language in 2019?",
    a1: "java",
    b2: "c",
    c3: "python",
    d4: "javascript",
    correct: "d",
  },
  {
    question: "Which is the national sport of India?",
    a1: "Hockey",
    b2: "Football",
    c3: "Cricket",
    d4: "India has no official national sport",
    correct: "d",
  },
  {
    question: "What year was JavaScript launched",
    a1: "1995",
    b2: "1993",
    c3: "2000",
    d4: "1998",
    correct: "a",
  },
];

const questionel = document.getElementById("question");
const quizdom = document.getElementById("quiz");
const container = document.getElementsByClassName("container");

const bodydom = document.getElementsByTagName("body");
const answerels = document.querySelectorAll(".answ");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");
let result = 0;
let currentQuestion = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswer();
  // const currentQuizdata = quizdata[currentQuestion];
  questionel.innerText = quizdata[currentQuestion].question;
  a_text.innerText = quizdata[currentQuestion].a1;
  b_text.innerText = quizdata[currentQuestion].b2;
  c_text.innerText = quizdata[currentQuestion].c3;
  d_text.innerText = quizdata[currentQuestion].d4;
}

function getSelected() {
  let answer = undefined;
  answerels.forEach((answerel) => {
    if (answerel.checked) {
      answer = answerel.id;
    }
  });
  return answer;
}
function deselectAnswer() {
  answerels.forEach((answerel) => {
    answerel.checked = false;
  });
}

submitbtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer, quizdata[currentQuestion].correct);
  if (answer) {
    //check correct ans
    if (answer === quizdata[currentQuestion].correct) {
      console.log("correct");
      result++;
    } else console.log("incorrect succker!!");
    // // checking quizdata ends
    currentQuestion++;

    if (currentQuestion < quizdata.length) {
      loadQuiz();
    } else {
      quiz.classList.add("tran");
      // alert("You Finished The Quiz...");
      quizdom.innerHTML = `<h2>You Scored ${result}/${quizdata.length}</h2> 
      <button   onclick="location.reload()">Reload</button>`;
      // document.body.style.background = "yellow";
    }
  }
});
