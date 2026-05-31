//url de region
const params = new URLSearchParams(window.location.search);
const regionActual = params.get('region');
//titulos por region
document.title = `Pokédex - ${regionActual}`;
document.getElementById('nombre-region').textContent = regionActual.toUpperCase();
//limites de region
const limites = regiones[regionActual];
const inicio = limites[0];
const fin = limites[1];
//cargar api
async function cargarPokemon() {
  for (let i = inicio; i <= fin; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    mostrarPokemon(data);
  }
}
cargarPokemon();
//mostrar pokemon
function mostrarPokemon(data) {
  const lista = document.querySelector('.lista-pokemon');
  
  const card = document.createElement('div');
  card.classList.add('card');
  
  card.innerHTML = `
    <span>#${String(data.id).padStart(3, '0')}</span>
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <p>${data.name}</p>
    <div>
      ${data.types.map(t => `<span class="tipo ${t.type.name}">${t.type.name}</span>`).join('')}
    </div>
  `;
  
  card.addEventListener('click', () => {
    window.location.href = `pokemon.html?id=${data.id}`;
  });
  
  lista.appendChild(card);
}
//menu de navegacion
const nav = document.getElementById('menu-regiones');

Object.keys(regiones).forEach(region => {
  if (region === regionActual || region === 'proximamente') return;
  
  const btn = document.createElement('button');
  btn.textContent = region.toUpperCase();
  btn.addEventListener('click', () => {
    window.location.href = `region.html?region=${region}`;
  });
  nav.appendChild(btn);
});
//buscador
document.getElementById('buscador').addEventListener('input', (e) => {
  const texto = e.target.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const nombre = card.querySelector('p').textContent.toLowerCase();
    const numero = card.querySelector('span').textContent;
    if (nombre.includes(texto) || numero.includes(texto)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
