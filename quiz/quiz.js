import Final from "./final.js";
import Question from "./question.js";

class Quiz {
  constructor(quizDom, amount, questions) {
    this.currentQDom = document.querySelector(".current");
    this.totalnumQDom = document.querySelector(".total");
    this.finalDomDom = document.querySelector(".final");
    this.nextQbtnDom = document.querySelector("#next");
    this.quizElementDom = quizDom;
    this.numquestions = amount;
    this.answerAmount = 0;
    this.dataQuestions = this.setQustions(questions);
    this.nextQbtnDom.addEventListener("click", this.nextQuestion);
    this.renderQuestion();
  }

  setQustions(allquestions) {
    return allquestions.map((q) => new Question(q));
  }
  renderQuestion() {
    this.dataQuestions[this.answerAmount].render();
    this.currentQDom.innerHTML = this.answerAmount + 1;
    this.totalnumQDom.innerHTML = this.numquestions;
    if (this.answerAmount + 1 == this.numquestions) {
      this.nextQbtnDom.innerHTML = "submit";
    }
  }
  nextQuestion = () => {
    // const checkElement =
    //  this.dataQuestions[this.answerAmount].answerElementDom.filter((ele) => ele.firstChild.checked);
    // console.log(checkElement);
    const checkElement = this.dataQuestions[
      this.answerAmount
    ].answerElementDom.filter((ele) => {
      const input = ele.querySelector("input");
      return input && input.checked;
    });
    console.log(checkElement);
    if (checkElement.length === 0) {
      alert("please answer this Question");
    } else {
      this.dataQuestions[this.answerAmount].answer(checkElement);
      this.showResult();
      this.answerAmount++;
      console.log(this.answerAmount);
      this.answerAmount < this.numquestions
        ? this.renderQuestion()
        : this.endQuizApp();
    }
  };
  showResult() {
    this.dataQuestions[this.answerAmount].isCorrect
      ? alert("Correct answer :)")
      : alert("Wrong answer :(");
  }

  endQuizApp() {
    this.quizElementDom.style.display = "none";
    this.finalDomDom.style.display = "block";
    const correct = this.countCorrectAnswers();
    new Final(correct, this.numquestions);
  }

  countCorrectAnswers() {
    let count = 0;
    this.dataQuestions.forEach((ele) => {
      if (ele.isCorrect) {
        count++;
      }
    });
    return count;
  }
}
export default Quiz;
