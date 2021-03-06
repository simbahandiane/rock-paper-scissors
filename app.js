  const userScore = 0;
  const computerScore = 0;

  //DOM variables
  const  userScore_span = document.getElementById('user-score');
  const  computerScore_span = document.getElementById('computer-score');
  const scoreBoard_div = document.querySelector('.score-board');
  const result_div = document.querySelector('.result');
  const rock_div = document.getElementById('r');
  const paper_div = document.getElementById('p');
  const scissors_div = document.getElementById('s');

  function getComputerChoice(){
      const choices = ['r','p','s'];
      const randomNumber = Math.floor(Math.random()* 3);
      return choices[randomNumber];
  }

  function game(userChoice){
    const computerChoice  = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "sp":
        case "rs":
            console.log("USER WINS");
            break;
        case "ps":
        case "sr":
        case "rp":
            console.log("USER LOSES");
            break;
        case "rr":
        case "ss":
        case "pp":
            console.log("IT'S A DRAW");
            break;
        default:
            break;
    }
    
    
  }

  game();

  function main(){
        rock_div.addEventListener('click', function(){
            game("r");
        })
    
        paper_div.addEventListener('click', function(){
            game("p");
        })
        
        scissors_div.addEventListener('click', function(){
            game("s");
        })
    }
  
    main();