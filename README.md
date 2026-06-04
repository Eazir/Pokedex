# Pokédex 🎮

Una Pokédex web interactiva con diseño estilo **dispositivo Pokémon**, que permite explorar todas las regiones desde Kanto hasta Paldea, consultar información detallada de cada Pokémon y generar equipos aleatorios con animación tipo **traga-monedas**.

---

## Características

- **Exploración por regiones** — Navega por las 9 regiones + Pokédex Nacional.
- **Búsqueda en tiempo real** — Filtra Pokémon por nombre o número.
- **Ficha detallada** — Tipos, estadísticas base y cadena evolutiva.
- **Equipo Aleatorio** — Genera 6 Pokémon al azar con animación de carretes tipo casino.
- **Diseño dispositivo** — Interfaz inspirada en la Pokédex clásica con LEDs, scanlines y bisagra decorativa.

---

## Tecnologías

* HTML5
* CSS3 (gradientes, animaciones, glassmorphism)
* JavaScript (Vanilla)
* PokéAPI
* Google Fonts (Press Start 2P + Orbitron)

---

## Estructura

```text
POKEDEX/
├── css/
│   ├── style.css        ← Estilos generales y slot machine
│   ├── region.css       ← Estilos de lista de región
│   └── pokemon.css      ← Estilos de ficha de Pokémon
├── js/
│   ├── regiones.js      ← Rangos numéricos por región
│   ├── index.js         ← Lógica principal + slot machine
│   ├── region.js        ← Carga y filtro de región
│   └── pokemon.js       ← Ficha detallada y evoluciones
├── index.html
├── region.html
├── pokemon.html
├── proximamente.html
└── README.md
```

---

## Cómo abrir el proyecto

### Versión web

Accede desde cualquier navegador:

```text
https://eazir.github.io/Pokedex/
```

### Ejecución local (PC)

1. Clona el repositorio.
2. Abre la carpeta en VS Code.
3. Instala la extensión **Live Server**.
4. Haz clic derecho en `index.html` → **Open with Live Server**.

### En celular (misma red WiFi)

1. Ejecuta Live Server en la PC.
2. Abre el navegador del celular en `http://IP-DE-TU-PC:5500/index.html`.
3. Obtén la IP local:
   - Linux: `ip addr`
   - Windows: `ipconfig`
   - macOS: `ipconfig getifaddr en0`

> Nota: tener paciencia con la carga de los Pokémon — la PokéAPI puede tardar.

---

## Regiones disponibles

| Región   | Pokémon      |
| -------- | ------------ |
| Kanto    | #001 - #151  |
| Johto    | #152 - #251  |
| Hoenn    | #252 - #386  |
| Sinnoh   | #387 - #493  |
| Unova    | #494 - #649  |
| Kalos    | #650 - #721  |
| Alola    | #722 - #809  |
| Galar    | #810 - #905  |
| Paldea   | #906 - #1025 |
| Nacional | #001 - #1025 |

---

## Funcionalidades

- Mostrar Pokémon por región
- Buscar Pokémon por nombre o número
- Ver estadísticas base
- Ver tipos
- Ver líneas evolutivas
- Generar equipo aleatorio de 6 Pokémon con animación tipo slot machine
- Diseño responsivo

---

## Créditos

Desarrollado por **Eazir / Sebastian David**.

Datos obtenidos de [PokéAPI](https://pokeapi.co).

Pokémon © Nintendo, Game Freak y Creatures Inc.
