document.querySelectorAll('button[data-region]').forEach(btn =>{
    btn.addEventListener('click',()=>{
        const region = btn.dataset.region;
        if (region === 'proximamente') {
            window.location.href = 'proximamente.html';
        }else{
            window.location.href = `region.html?region=${region}`;
        }
    });
});

// pantalla index 
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