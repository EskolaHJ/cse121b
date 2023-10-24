import { fetchStarships } from './starshipModule.js';

const starshipImages = {
    "Star Destroyer": "images/star_destroyer.jpg",
    "Death Star": "images/death_star.jpg",
    "CR90 corvette": "images/CR90_corvette.jpg",
    "Sentinel-class landing craft": "images/Landing-Craft.jpg",
    "Millennium Falcon": "images/Millennium-Falcon.jpg",
    "Y-wing": "images/Y-Wing.jpg",
    "X-Wing": "images/X-Wing.jpg",
    "Executor": "images/Executor.jpg",
    "Rebel transport": "images/GR-75.jpg",
    // Add more starship:image mappings here
};

document.addEventListener('DOMContentLoaded', async () => {
    const starships = await fetchStarships();

    // Using the array method: filter() for demonstration
    const filteredStarships = starships.filter(ship => ship.cost_in_credits !== "unknown");

    const starshipsDiv = document.getElementById('starships');
    filteredStarships.forEach(starship => {
        const starshipDiv = document.createElement('div');
        starshipDiv.innerHTML = `
            <h2>${starship.name}</h2>
            <img src="${starshipImages[starship.name] || 'path_to_default_image.jpg'}" alt="${starship.name}">
            <p>Cost: ${starship.cost_in_credits} credits</p>
        `;
        starshipsDiv.appendChild(starshipDiv);
    });
});
