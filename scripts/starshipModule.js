export async function fetchStarships() {
    try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("There was an error fetching starships:", error);
        return [];
    }
}
