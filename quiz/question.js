class Question {
  constructor(questionData) {
    this.questionelementDom = document.querySelector("#question");
    this.answerElementDom = [
      document.querySelector("#a1"),
      document.querySelector("#a2"),
      document.querySelector("#a3"),
      document.querySelector("#a4"),
    ];
    this.correctAnswer = questionData.correct_answer;
    this.questiontext = questionData.question;
    this.isCorrect = false;
    this.typeQ = questionData.type;
    if (this.typeQ === "boolean") {
      this.answers = ["True", "False"];
    } else {
      this.answers = this.shuffleAnswers([
        questionData.correct_answer,
        ...questionData.incorrect_answers,
      ]);
    }
  }

  shuffleAnswers(answers) {
    return answers.sort(() => Math.random() - 0.5);
  }
  //............
  answer(checkElement) {
    // this.isCorrect =
    //   checkElement[0].textContent.trim() === this.correctAnswer.trim()
    //     ? true
    //     : false;  .....>> oR
    const userChoice = checkElement[0].textContent.trim();
    this.isCorrect = userChoice === this.correctAnswer.trim();
  }

  //...
  render() {
    this.questionelementDom.innerHTML = this.questiontext;

    // إخفاء أو إظهار العناصر بناءً على عدد الإجابات المتاحة (2 للصح والخطأ، أو 4 للاختيار من متعدد)
    this.answerElementDom.forEach((el, index) => {
      if (index < this.answers.length) {
        el.style.display = "block"; // إظهار الزر إذا توفرت إجابة
        el.innerHTML = `
          <input type="radio" name="radio" id="ans${index}">
          <span class="checkmark"></span>
          ${this.answers[index]}
        `;
      } else {
        el.style.display = "none"; // إخفاء الزر الزائد لو السؤال صح أو خطأ
      }
    });
  }
}
export default Question;
