let numeroAleatorio;

    function generarNumero() {
      numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    }
      
    function mostrarInput() {
      document.getElementById('startBtn').style.display = 'none';
      document.getElementById('gameArea').style.display = 'block';
    }

    function verificarNumero() {
      let numeroIngresado = parseInt(document.getElementById('guessInput').value);

      if (numeroIngresado === numeroAleatorio) {
        alert('¡Felicitaciones! Adivinaste el número.');
      } else if (numeroIngresado < numeroAleatorio) {
        alert('El número que ingresaste es menor al número mágico. Intenta nuevamente.');
      } else {
        alert('El número que ingresaste es mayor al número mágico. Intenta nuevamente.');
      }
    }

    document.getElementById('startBtn').addEventListener('click', function() {
      generarNumero();
     mostrarInput();
    });

    document.getElementById('guessBtn').addEventListener('click', function() {
     verificarNumero();
    });
