const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    //start game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
          hand.addEventListener('animationend',function(){
            this.style.animation = "";
          });
        });        

        //computer otions
        const computerOptions = ["rock", "paper", "scissors"];
        
        options.forEach(option => {
          option.addEventListener("click", function() {
            //computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            
            setTimeout(()=> {
              //here is we call compare hands
            compareHands(this.textContent, computerChoice);
            //update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000);

            //Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
          });
        });
    };
    
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
      //update text
      const winner = document.querySelector('.winner');
      if(playerChoice === computerChoice){
        winner.textContent = 'It is a tie!';
        return;
      }
      //cheack for rock
      if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
          winner.textContent = 'Player wins!';
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Wins!';
          cScore++;
          updateScore();
          return;
        }
      }
      //cheack for scissors
      if(playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
          winner.textContent = 'Player wins!';
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Wins!';
          cScore++;
          updateScore();
          return;
        }
      }
      //cheack for paper
      if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
          winner.textContent = 'Player wins!';
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Wins!';
          cScore++;
          updateScore();
          return;
        }
      }
    }

    //call all the inner function
    startGame();
    playMatch();
};  

//start game function
game();