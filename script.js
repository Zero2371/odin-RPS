/*
prompt user to choose either rock, paper, or scissors
after user chooses, computer will choose a random answer of listed of above
depending on what the choices decides who wins
repeat this 5 times to decide winner
*/
// console.log("Game of Rock Paper Scissors");
    let playerScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll('button')
    const options = ["rock", "paper", "scissors"];
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const resultDiv = document.querySelector('.resultDiv'); 
    const gameResult = document.querySelector('.gameResult');
   const playerRunningScore = document.querySelector('.playerRunningScore');
   const computerRunningScore = document.querySelector('.computerRunningScore');

    function getComputerChoice(){
        const choice = options[Math.floor(Math.random() * options.length)];
        return choice;
    }
    function checkWinner(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return "Tie";
        } else if(
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")
        ){
            return "Player";
        } else {
            return "Computer";
        }
    }
   
    function disableButtons() {
        buttons.forEach(btn=> {
            btn.disabled = true
        });
    }
    function playRound(playerSelection, computerSelection) {
        const result = checkWinner(playerSelection, computerSelection);
        if (result == "Tie") {
            const p = document.createElement('p')
            p.innerText = `It's a Tie! You both pick ${playerSelection}`
            resultDiv.appendChild(p)
        } else if (result == "Player"){
            playerScore++;
            const p = document.createElement('p')
            p.innerText= `You Win! ${playerSelection} beats ${computerSelection}`
            resultDiv.appendChild(p)
        } else {
            computerScore++
            const p = document.createElement('p')
            p.innerText= `You Lose! ${computerSelection} beats ${playerSelection}`
            resultDiv.appendChild(p)
        }
        document.querySelectorAll('gameResult').innerHTML = result
    return result;
}
    
     let checkForWinner =(playerSelection, computerSelection) => {
      //  console.log('1 ', playerScore, '2 ', computerScore)
        if ( playerScore === 5) {
            const h2 = document.createElement('h2')
            h2.classList.add('player-won')
            h2.innerText = `You won ${playerScore} to ${computerScore}`
            disableButtons();
            gameResult.appendChild(h2)
            
        } 
        if ( computerScore === 5) {
            const h2 = document.createElement('h2')
            h2.classList.add('computer-won')
            h2.innerText = `You lose ${playerScore} to ${computerScore}`
            disableButtons();
            gameResult.appendChild(h2)
        }
     }
    const updateScores = (playerScore, computerScore) => {
            playerRunningScore.innerText = `${playerScore}`
            computerRunningScore.innerText = `${computerScore}`
     }
    // buttons.forEach(button =>{
    //    button.addEventListener('click', function(){
    //        playRound(button.value)
    //    })
    //})
    rockBtn.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'rock'
        playRound(playerSelection, computerSelection)
        updateScores(playerScore, computerScore) 
        checkForWinner(playerSelection, computerSelection)
    })
    paperBtn.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'paper'
        playRound(playerSelection, computerSelection)
        updateScores(playerScore, computerScore)
        checkForWinner(playerSelection, computerSelection)
    })
    scissorsBtn.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'scissors'
        playRound(playerSelection, computerSelection)
        updateScores(playerScore, computerScore)
        checkForWinner(playerSelection, computerSelection)
    })
    




    //console only
    /* function getPlayerChoice() {
        let validateInput = false;
        while(validateInput == false) {
            const choice = prompt("rock paper or scissors");
            if(choice == null){
                continue;
            }
            const choiceInLower = choice.toLowerCase();
            if (options.includes(choiceInLower)) {
                validateInput = true;
                return choiceInLower;
            }
        }
    }
    */
 /*
       console.log("Game Over")
        if (scorePlayer > scoreComputer) {
            console.log("Player Wins");
        } else if(scorePlayer < scoreComputer) {
            console.log("Computer Wins");
        } else {
            console.log("You both lose!");
        }
        */
    
  // game()

        /*
    function game() {
        let scorePlayer = 0;
        let scoreComputer = 0;
        for(let i = 0; i < 5; i++) {
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
            console.log("-----");
            if(checkWinner(playerSelection, computerSelection) == "Player") {
                scorePlayer++;
            } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
                scoreComputer++;
            }   

        }
    }
    */