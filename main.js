document.addEventListener("DOMContentLoaded", () => {
  let userScore = 0;
  let computerScore = 0;
  const userScore_span = document.getElementById("user-score");
  const computerScore_span = document.getElementById("comp-score");
  const result_div = document.querySelector(".result > p");
  const rock_button = document.getElementById("r");
  const paper_button = document.getElementById("p");
  const scissors_button = document.getElementById("s");

  function main() {
    rock_button.addEventListener("click", function () {
      game("r");
    });

    paper_button.addEventListener("click", function () {
      game("p");
    });

    scissors_button.addEventListener("click", function () {
      game("s");
    });
  }

  main();

  function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

  function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
  }

  function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userSmallWord = "[user]".fontsize(3).sup();
    const compSmallWord = "[comp]".fontsize(3).sup();
    result_div.innerHTML = `${convertToWord(
      userChoice
    )}${userSmallWord} beats ${convertToWord(
      computerChoice
    )}${compSmallWord}. You win!`;
    document.querySelector(".scoreboard").classList.add("greenglow");
    setTimeout(function () {
      document.querySelector(".scoreboard").classList.remove("greenglow");
    }, 1000);
  }

  function lost(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userSmallWord = "[user]".fontsize(3).sup();
    const compSmallWord = "[comp]".fontsize(3).sup();
    result_div.innerHTML = `${convertToWord(
      userChoice
    )}${userSmallWord} loses to ${convertToWord(
      computerChoice
    )}${compSmallWord}. You lost!`;
    document.querySelector(".scoreboard").classList.add("redglow");
    setTimeout(function () {
      document.querySelector(".scoreboard").classList.remove("redglow");
    }, 1000);
  }

  function draw(userChoice, computerChoice) {
    const userSmallWord = "[user]".fontsize(3).sup();
    const compSmallWord = "[comp]".fontsize(3).sup();
    result_div.innerHTML = `${convertToWord(
      userChoice
    )}${userSmallWord} equals ${convertToWord(
      computerChoice
    )}${compSmallWord}. It's a draw!`;
    document.querySelector(".scoreboard").classList.add("yellowglow");
    setTimeout(function () {
      document.querySelector(".scoreboard").classList.remove("yellowglow");
    }, 1000);
  }

  function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lost(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }
  }
});
