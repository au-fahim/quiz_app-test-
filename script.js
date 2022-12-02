import quizData from "./quiz_data.json" assert { type: "json" };

console.log(quizData.length);

// Selectors
const startQuizBox = document.querySelector("#quiz_start_section");
const startQuizBtn = document.querySelector("button.q_start_btn");
const quizBoard = document.querySelector(".quiz_container");

startQuizBtn.addEventListener("click", () => {
  startQuizBox.style.display = "none";
  quizBoard.style.display = "block";
});
