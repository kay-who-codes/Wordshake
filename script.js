document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const reshuffleBtn = document.getElementById('reshuffle-btn');
    const board = document.getElementById('board');
    const clickSound = document.getElementById('click-sound');
    
    // Boggle dice configuration (from the image)
    const dice = [
        ['R', 'I', 'F', 'O', 'B', 'X'],    // DIE0
        ['I', 'F', 'E', 'H', 'E', 'Y'],    // DIE1
        ['D', 'E', 'N', 'O', 'W', 'S'],   // DIE2
        ['U', 'T', 'O', 'K', 'N', 'D'],   // DIE3
        ['H', 'M', 'S', 'R', 'A', 'O'],   // DIE4
        ['L', 'U', 'P', 'E', 'T', 'S'],   // DIE5
        ['A', 'C', 'I', 'T', 'O', 'A'],   // DIE6
        ['Y', 'L', 'G', 'K', 'U', 'E'],   // DIE7
        ['QU', 'B', 'M', 'J', 'O', 'A'],  // DIE8
        ['E', 'H', 'I', 'S', 'P', 'N'],   // DIE9
        ['V', 'E', 'T', 'I', 'G', 'N'],  // DIE10
        ['B', 'A', 'L', 'I', 'Y', 'T'],   // DIE11
        ['E', 'Z', 'A', 'V', 'N', 'D'],   // DIE12
        ['R', 'A', 'L', 'E', 'S', 'C'],   // DIE13
        ['U', 'W', 'I', 'L', 'R', 'G'],   // DIE14
        ['P', 'A', 'C', 'E', 'M', 'D']    // DIE15
    ];

    startBtn.addEventListener('click', () => {
        playSound();
        startBtn.classList.add('fade-out');
        setTimeout(() => {
            startBtn.classList.add('hidden');
            generateBoard();
            board.classList.remove('hidden');
            board.classList.add('fade-in');
            reshuffleBtn.classList.remove('hidden');
            reshuffleBtn.classList.add('fade-in');
        }, 300);
    });

    reshuffleBtn.addEventListener('click', () => {
        playSound();
        board.classList.add('fade-out');
        setTimeout(() => {
            generateBoard();
            board.classList.remove('fade-out');
            board.classList.add('fade-in');
        }, 300);
    });

    function generateBoard() {
        board.innerHTML = '';
        
        // Shuffle the dice and select 16 (though there are exactly 16 in standard Boggle)
        const shuffledDice = [...dice].sort(() => Math.random() - 0.5);
        
        // Take the first 16 dice (in case there were more)
        const selectedDice = shuffledDice.slice(0, 16);
        
        selectedDice.forEach(die => {
            // Randomly select a face from the die
            const randomFaceIndex = Math.floor(Math.random() * die.length);
            const faceValue = die[randomFaceIndex];
            
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.textContent = faceValue;
            board.appendChild(tile);
        });
    }

    function playSound() {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log("Audio play failed:", e));
    }
});