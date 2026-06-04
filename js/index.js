const TOTAL_POKEMON = 1025;

document.querySelectorAll('button[data-region]').forEach(btn => {
  btn.addEventListener('click', () => {
    const region = btn.dataset.region;
    if (region === 'proximamente') {
      window.location.href = 'proximamente.html';
    } else {
      window.location.href = `region.html?region=${region}`;
    }
  });
});

const starters = [1, 4, 7, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816, 906, 909, 912];
let i = 0;
const img = document.querySelector('.pantalla img');
function cambiarStarter() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${starters[i]}`)
    .then(res => res.json())
    .then(data => {
      img.src = data.sprites.front_default;
    });
  i = (i + 1) % starters.length;
}
cambiarStarter();
setInterval(cambiarStarter, 4000);

function getRandomIds(count) {
  const ids = new Set();
  while (ids.size < count) {
    ids.add(Math.floor(Math.random() * TOTAL_POKEMON) + 1);
  }
  return [...ids];
}

const slotMachine = {
  overlay: document.getElementById('slot-overlay'),
  reelsContainer: document.getElementById('slot-reels'),
  footer: document.getElementById('slot-footer'),
  spinningText: document.getElementById('slot-spinning-text'),
  closeBtn: document.getElementById('btn-slot-close'),
  isRunning: false,

  init() {
    document.getElementById('btn-slot-machine').addEventListener('click', () => this.start());
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  },

  async start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.overlay.classList.remove('hidden');
    this.footer.classList.add('hidden');
    this.spinningText.textContent = '🎰 ¡Girando...!';
    this.spinningText.style.display = 'block';
    this.resetReels();

    const finalIds = getRandomIds(6);
    const fillerIds = getRandomIds(12);

    try {
      const allIds = [...finalIds, ...fillerIds];
      const promises = allIds.map(id =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
      );
      const results = await Promise.all(promises);

      const finalPokemon = results.slice(0, 6);
      const fillerPokemon = results.slice(6);

      await this.spin(finalPokemon, fillerPokemon);
    } catch (err) {
      this.spinningText.textContent = '❌ Error al cargar. Intenta de nuevo.';
      setTimeout(() => this.close(), 2000);
    }
  },

  resetReels() {
    document.querySelectorAll('.slot-reel').forEach(reel => {
      reel.classList.remove('spinning', 'stopped');
      reel.querySelector('img').src = '';
    });
    document.querySelectorAll('.slot-label').forEach(label => {
      label.textContent = '';
    });
  },

  async spin(finalPokemon, fillerPokemon) {
    const reelElements = document.querySelectorAll('.slot-reel');
    const labelElements = document.querySelectorAll('.slot-label');
    const intervals = [];

    reelElements.forEach(reel => {
      reel.classList.add('spinning');
      reel.classList.remove('stopped');
    });

    reelElements.forEach((reel, idx) => {
      let frame = 0;
      intervals[idx] = setInterval(() => {
        const filler = fillerPokemon[frame % fillerPokemon.length];
        const sprites = filler.sprites;
        reel.querySelector('img').src = sprites.front_default || sprites.front_shiny;
        frame++;
      }, 80);
    });

    const staggerDelay = 500;
    for (let i = 0; i < 6; i++) {
      await new Promise(r => setTimeout(r, staggerDelay));
      clearInterval(intervals[i]);

      const reel = reelElements[i];
      const mon = finalPokemon[i];
      const imgEl = reel.querySelector('img');

      imgEl.src = mon.sprites.front_default;
      reel.classList.remove('spinning');
      reel.classList.add('stopped');

      labelElements[i].textContent = mon.name;

      reel.style.cursor = 'pointer';
      reel.addEventListener('click', () => {
        window.location.href = `pokemon.html?id=${mon.id}`;
      });
    }

    this.spinningText.textContent = '✨ ¡Equipo listo! Haz clic en cada Pokémon para ver detalles.';
    this.footer.classList.remove('hidden');
    this.isRunning = false;
  },

  close() {
    this.overlay.classList.add('hidden');
    this.isRunning = false;
    this.resetReels();
  }
};

slotMachine.init();
