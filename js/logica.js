let numeroAleatorio;

    function generateMagicNumber() {
      numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    }
      
    function showGameArea() {
      document.getElementById('startBtn').style.display = 'none';
      document.getElementById('gameArea').style.display = 'block';
    }

    function checkGuess() {
      var userGuess = parseInt(document.getElementById('guessInput').value);

      if (userGuess === numeroAleatorio) {
        alert('¡Felicitaciones! Adivinaste el número.');
      } else if (userGuess < numeroAleatorio) {
        alert('El número que ingresaste es menor al número mágico. Intenta nuevamente.');
      } else {
        alert('El número que ingresaste es mayor al número mágico. Intenta nuevamente.');
      }
    }

    document.getElementById('startBtn').addEventListener('click', function() {
      generateMagicNumber();
      showGameArea();
    });

    document.getElementById('guessBtn').addEventListener('click', function() {
      checkGuess();
    });
