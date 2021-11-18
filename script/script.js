const api_url = 'https://pokeapi.co/api/v2/pokemon/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

const getPokemon = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        showPokemon(data)
    } catch {
        swal.fire({
            title: 'Algo falló',
            text: 'Hubo un error en el servidor',
            icon: 'error'
        })
    }
}

for (let i = 1; i <= 20; i++) {
    getPokemon(api_url + i)
}

const showPokemon = (data) => {
    const { id, name, sprites, base_experience, types } = data

    const pokemonCard = document.createElement('div')

    pokemonCard.classList.add('movie')

    pokemonCard.innerHTML = `
        <img src="${sprites.front_default}" alt="imagenn_pokemon">
        <div class="movie-info">
            <h3>${name}</h3>
            <span class="green">${base_experience}</span>
        </div>
        <div class="overview">
            <h3>${types[0].type.name}</h3>
        </div>
    `
    main.appendChild(pokemonCard)
}