//id url
const params = new URLSearchParams(window.location.search);
const pokemonId = params.get('id');
//carga api
async function cargarPokemon() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const data = await res.json();
  mostrarPokemon(data);
  cargarEvoluciones(data.id);
}
cargarPokemon();
//mostrar pokemon
function mostrarPokemon(data) {
  document.title = `Pokédex - ${data.name}`;
  document.getElementById('nombre-pokemon').textContent = data.name.toUpperCase();
  document.getElementById('numero-pokemon').textContent = `#${String(data.id).padStart(3, '0')}`;
  document.getElementById('imagen-pokemon').src = data.sprites.front_default;
  
  const tipos = document.getElementById('tipos-pokemon');
  data.types.forEach(t => {
    const span = document.createElement('span');
    span.textContent = t.type.name;
    span.classList.add('tipo', t.type.name);
    tipos.appendChild(span);
  });

  const stats = document.getElementById('stats-pokemon');
  data.stats.forEach(s => {
    stats.innerHTML += `<p>${s.stat.name}: ${s.base_stat}</p>`;
  });
}
//evoluciones
async function cargarEvoluciones(id) {
  const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const speciesData = await speciesRes.json();
  
  const evoRes = await fetch(speciesData.evolution_chain.url);
  const evoData = await evoRes.json();
  
  const contenedor = document.getElementById('evoluciones-pokemon');
  let cadena = evoData.chain;
  
  while (cadena) {
    const nombre = cadena.species.name;
    const evoRes2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const evoData2 = await evoRes2.json();
    
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${evoData2.sprites.front_default}" alt="${nombre}">
      <p>${nombre}</p>
    `;
    div.style.cursor = 'pointer';
    div.addEventListener('click', () => {
      window.location.href = `pokemon.html?id=${evoData2.id}`;
    });
    contenedor.appendChild(div);
    
    cadena = cadena.evolves_to[0] || null;
  }
}
