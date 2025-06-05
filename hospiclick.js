// Bubbles animation (green & blue, from left)
(function() {
  const canvas = document.getElementById('bubbles-bg');
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }
  window.addEventListener('resize', resize);
  resize();
  const colors = ['rgba(0,230,118,0.18)','rgba(25,118,210,0.18)','rgba(0,230,118,0.28)','rgba(25,118,210,0.28)'];
  const bubbles = Array.from({length: 22}, () => ({
    x: -40 - Math.random() * 60,
    y: Math.random() * H,
    r: 18 + Math.random() * 32,
    dx: 0.7 + Math.random() * 1.2,
    dy: -0.3 + Math.random() * 0.6,
    alpha: 0.12 + Math.random() * 0.18,
    color: colors[Math.floor(Math.random()*colors.length)]
  }));
  function animate() {
    ctx.clearRect(0, 0, W, H);
    for (const b of bubbles) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
      ctx.fillStyle = b.color;
      ctx.globalAlpha = b.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
      b.x += b.dx;
      b.y += b.dy;
      if (b.x - b.r > W || b.y + b.r < 0 || b.y - b.r > H) {
        b.x = -40 - Math.random() * 60;
        b.y = Math.random() * H;
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

// Green health crosses background
(function() {
  const crosses = document.getElementById('crosses-bg');
  let W, H;
  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    crosses.innerHTML = '';
    const nX = Math.ceil(W / 120);
    const nY = Math.ceil(H / 120);
    for (let i = 0; i < nX; i++) {
      for (let j = 0; j < nY; j++) {
        const cross = document.createElement('div');
        cross.className = 'health-cross';
        cross.style.left = (i * 120 + 30 * (j%2)) + 'px';
        cross.style.top = (j * 120) + 'px';
        crosses.appendChild(cross);
      }
    }
  }
  window.addEventListener('resize', resize);
  resize();
})();

// Health cross style
(function() {
  const style = document.createElement('style');
  style.innerHTML = `
    #crosses-bg { position: fixed; left: 0; top: 0; width: 100vw; height: 100vh; z-index: 3; pointer-events: none; }
    .health-cross {
      position: absolute;
      width: 32px; height: 32px;
      background: transparent;
      z-index: 3;
      opacity: 0.13;
      animation: crossPulse 2.5s infinite alternate;
    }
    .health-cross::before, .health-cross::after {
      content: '';
      position: absolute;
      background: #00e676;
      border-radius: 6px;
    }
    .health-cross::before {
      left: 12px; top: 0; width: 8px; height: 32px;
    }
    .health-cross::after {
      left: 0; top: 12px; width: 32px; height: 8px;
    }
    @keyframes crossPulse {
      from { transform: scale(1); opacity: 0.13; }
      to { transform: scale(1.18); opacity: 0.22; }
    }
  `;
  document.head.appendChild(style);
})();

// Gallery slider logic
(function() {
  const slider = document.getElementById('gallery-slider');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let scrollAmount = 0;
  function scrollGallery(dir) {
    const itemWidth = slider.querySelector('.gallery-item').offsetWidth + 32;
    scrollAmount += dir * itemWidth;
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
  prevBtn.addEventListener('click', () => scrollGallery(-1));
  nextBtn.addEventListener('click', () => scrollGallery(1));
})();

// Animación de agrandado al hacer hover en elementos destacados
(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const highlights = document.querySelectorAll('.highlight, .gallery-item');
    highlights.forEach(el => {
      el.addEventListener('mouseover', () => {
        el.style.transform = 'scale(1.06)';
        el.style.boxShadow = '0 8px 32px #00e67655';
        el.style.zIndex = 10;
      });
      el.addEventListener('mouseout', () => {
        el.style.transform = '';
        el.style.boxShadow = '';
        el.style.zIndex = '';
      });
    });
  });
})();
