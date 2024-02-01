const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultsPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    // Para rodar o JSON-SERVER no CMD: json-server --watch api-artists/artists.json --port 3000
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((res) => res.json())
        .then((result) => displayResult(result))
}

function displayResult(result) {
    resultsPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImg.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {  
        resultsPlaylist.classList.remove('hidden');      
        resultsArtist.classList.add('hidden');        
        return;
    } 

    requestApi(searchTerm);
})