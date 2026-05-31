# Pokédex 🎮

Una Pokédex web interactiva que permite explorar los Pokémon de todas las regiones, desde Kanto hasta Paldea.

---

## Descripción

Aplicación web que consume la PokéAPI para mostrar información detallada de los Pokémon organizados por región. Permite buscar Pokémon por nombre o número, ver su ficha completa con tipos, estadísticas y cadena evolutiva.

---

## Tecnologías

* HTML5
* CSS3
* JavaScript (Vanilla)
* PokéAPI

---

## Estructura

```text
POKEDEX/
├── assets/
│   ├── backgrounds/
│   ├── icons/
│   └── logos/
├── css/
│   ├── style.css
│   ├── region.css
│   └── pokemon.css
├── js/
│   ├── regiones.js
│   ├── index.js
│   ├── region.js
│   └── pokemon.js
├── index.html
├── region.html
├── pokemon.html
├── proximamente.html
└── README.md
```

---

## Cómo abrir el proyecto

### En PC

1. Descarga o clona el repositorio.
2. Abre la carpeta en VS Code.
3. Instala la extensión Live Server.
4. Haz clic derecho en `index.html`.
5. Selecciona **Open with Live Server**.

### En celular (misma red WiFi)

1. Ejecuta Live Server en la PC.
2. Abre el navegador del celular.
3. Ingresa a:

```text
http://IP-DE-TU-PC:5500/index.html
```

4. Obtén tu IP con:

Linux:

```bash
ip addr
```

Windows:

```bash
ipconfig
```

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

## Estado del proyecto

 Estructura inicial del proyecto
 Organización por regiones
 Navegación entre páginas
 Integración con PokéAPI
 Buscador por nombre y número
 Ficha individual de Pokémon
 Sistema de evoluciones
 Diseño responsive para móvil
 Décima región (próximamente)

---

## Objetivos

* Mostrar Pokémon por región.
* Buscar Pokémon por nombre o número.
* Mostrar estadísticas base.
* Mostrar tipos y habilidades.
* Mostrar líneas evolutivas.
* Mantener una interfaz simple y rápida.

---

## Créditos

Desarrollado por **Kevin Aguirre (Jaire)**.

Datos obtenidos de PokéAPI.

Pokémon © Nintendo, Game Freak y Creatures Inc.
