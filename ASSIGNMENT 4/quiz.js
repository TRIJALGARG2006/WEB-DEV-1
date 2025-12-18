/* ---
NAME = TRIJAL GARG
ROLL NO : = 2501010072
--- */

//store quiz questions and answers
const quizQuestions = [
  { question: "WHAT IS THE CAPITAL OF INDIA?", answer: "DELHI" },
  { question: "Which is the planet closest to sun ?", answer: "MERCURY" },
  { question: "What is 100 + 100 ?", answer: "200" },
  { question: "Who is the president of united states?", answer: "DONALD TRUMP" },
  { question: "Which is the most popular language? ", answer: "Python" },
];

function runQuiz() {
  alert("Hello! Welcome to the Quick Quiz");
  let score = 0; //track score

  // Updated loop to use the new variable name
  for (let i = 0; i < quizQuestions.length; i++) {
    const ques = quizQuestions[i].question;
    const correctAns = quizQuestions[i].answer; //for display
    const lowerAns = correctAns.toLowerCase(); //for comparison

    // Input logic is perfect
    const userAnswer = prompt(ques);

    // Check if user clicked Cancel (null) to avoid errors
    if (userAnswer && userAnswer.toLowerCase().trim() == lowerAns) {
      alert("Correct Answer");
      score++;
    } else {
      // 2. Display the original answer
      alert(`Wrong Answer. The Correct Answer is ${correctAns}`);
    }
  }

  //final score
  alert(
    `Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`
  );
}

runQuiz();
