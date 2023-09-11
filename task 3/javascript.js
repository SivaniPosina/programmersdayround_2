
        let playerScore = 0;
        let computerScore = 0;

        function computerPlay() {
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }

        function play(playerChoice, buttonElement) {
            const computerChoice = computerPlay();
            const resultElement = document.getElementById('result');
            const playerScoreElement = document.getElementById('player-score');
            const computerScoreElement = document.getElementById('computer-score');

            
            const buttons = document.querySelectorAll('.button-container .button');
            buttons.forEach((button) => {
                button.classList.remove('white-bg', 'yellow-bg');
            });

           
            buttonElement.classList.add('white-bg');

            if (playerChoice === computerChoice) {
                resultElement.textContent = `It's a tie! You both chose ${playerChoice}.`;
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
                playerScore++;
            } else {
                resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
                computerScore++;
               
                buttons.forEach((button) => {
                    if (button.querySelector('p').textContent.toLowerCase() === computerChoice) {
                        button.classList.add('yellow-bg');
                    }
                });
            }

            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;
        }