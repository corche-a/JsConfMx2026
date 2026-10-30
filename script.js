const boton = document.querySelector('#boton-vela');
const ofrenda = document.querySelector('#ofrenda');

boton.addEventListener('click', () => {
  // Toggle para encender/apagar la vela
  const encendida = ofrenda.classList.toggle('encendida');
  boton.setAttribute('aria-pressed', encendida);
  boton.textContent = encendida ? 'Apagar la vela' : 'Encender la vela';
});

// LLUVIA BINARIA
const canvas = document.getElementById('binary-bg');

if (canvas) {
  const ctx = canvas.getContext('2d');
  
  let cols, drops;

  function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / 20);
    drops = Array(cols).fill(1);
  }

  initCanvas();

  function drawBinary() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff00';
    ctx.font = '15px Courier New';

    drops.forEach((y, i) => {
      const text = Math.random() > 0.5 ? '1' : '0';
      ctx.fillText(text, i * 20, y * 20);
      
      if (y * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  setInterval(drawBinary, 50);

  window.addEventListener('resize', initCanvas);
}