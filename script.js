import quizData from "./quiz_data.json" assert { type: "json" };

// Selectors
const startQuizBox = document.querySelector("#quiz_start_section");
const startQuizBtn = document.querySelector("button.q_start_btn");
const quizBoard = document.querySelector(".quiz_container");
const question = document.querySelector(".quiz_question");
const options = document.querySelectorAll(".quiz_option button");

const questionNumberNavigate = document.querySelector(
  ".question_number_navigate"
);
const timeDuration = document.querySelector(".time_duration");

let shuffledQuestion, currentQuestionIndex;

startQuizBtn.addEventListener("click", () => {
  startQuizBox.style.display = "none";
  quizBoard.style.display = "block";

  // Shuffle Random Quiz Question
  shuffledQuestion = quizData.sort(() => Math.random() - 0.5);

  // Initial Quistion Index
  currentQuestionIndex = 0;

  // Show Question
  showQuestion(shuffledQuestion[currentQuestionIndex]);
});

// Show the question from json file
function showQuestion(singleQuestion) {
  // Set the question
  question.innerText = singleQuestion.question;

  // Set Options Items
  let optionIndex = 0;
  options.forEach((item) => {
    // let optionBtn = document.createElement("button");
    item.innerText = singleQuestion.option[optionIndex++];
  });

  // Set the Question Navigation Number
  questionNumberNavigate.innerHTML = `
    <span class="current_question">${currentQuestionIndex + 1}</span> of
    <span class="total_question">${quizData.length}</span> questions`;

  // Set the Duration Time
  timeDuration.innerHTML = `Time: 15 sec`;
}
