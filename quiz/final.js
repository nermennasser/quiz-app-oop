class Final {
  constructor(correctAnswer, totalAmountQ) {
    this.scoreElementDom = document.querySelector(".score");
    this.againBtn = document.querySelector("#again");
    this.render(correctAnswer, totalAmountQ);
    this.againBtn.addEventListener("click", this.startAgain);
  }

  render(corrAnswer, numOfquestion) {
    this.scoreElementDom.innerHTML = `you answered ${corrAnswer} out of ${numOfquestion} correct`;
  }
  startAgain = () => {
    location.reload();
  };
}
export default Final;
