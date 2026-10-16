import Quiz from "./quiz.js";
class Settings {
  constructor() {
    this.quizDom = document.querySelector(".quiz");
    this.settingDom = document.querySelector(".settings");
    this.categorygDom = document.querySelector("#categoryId");
    this.typeDom = document.querySelector("#type");
    this.questionsNum = document.querySelector("#questions");
    this.DifficultyDom = [
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#hard"),
    ];
    this.startBtn = document.querySelector("#start");
    this.startBtn.addEventListener("click", () => this.startQuiz());
    this.quiz = {};
  }
  async startQuiz() {
    try {
      const amount = this.getAmountQ();
      const categorygID = this.categorygDom.value;
      const difficulty = this.getDifficulty();
      const typeQ = this.typeDom.value; // جلب النوع (multiple أو boolean)
      if (!amount || !difficulty) {
        alert(
          "Please complete the setup options (Category, Difficulty, and Questions count) to start your quiz!",
        );
      } else {
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${categorygID}&difficulty=${difficulty}&type=${typeQ}`;
        let results = await this.fetchData(url);
        this.showQuizDom();
        this.quiz = new Quiz(this.quizDom, amount, results); //pass setting values to  quiz object
        console.log(this.quiz);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // fetchData to get data from api
  fetchData = async (urlData) => {
    const response = await fetch(urlData); //return all dataRespone this include results==questions
    console.log(response);
    const data = await response.json(); // to convert dataRespone to json
    console.log(data.results);

    return data.results; //return results
  };
  // ...............
  showQuizDom = () => {
    this.quizDom.style.display = "block";
    this.settingDom.style.display = "none";
  };
  //get quiz number of qusitions
  getAmountQ = () => {
    let num = this.questionsNum.value;
    return num;
  };
  //............
  getDifficulty = () => {
    let checkedID;
    let checkedElement = this.DifficultyDom.find((el) => el.checked);
    if (checkedElement) {
      checkedID = checkedElement.id;
    }
    // let checkedElmentinArray = this.DifficultyDom.filter((el) => el.checked);
    // if (checkedElmentinArray.length === 1) { //العنصر المختار ف مصفوفه لذلك
    //   checkedID = checkedElmentinArray[0].id;
    // }
    return checkedID;
  };
}
export default Settings;
