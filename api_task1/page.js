let cardsContainer = document.getElementById("cards");
const url = "https://api.tvmaze.com/shows";
let showsData = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(show => {
            const card = document.createElement("div");
            card.className = 'card';
            card.style.width = '290px';
            card.style.marginTop = '20px';
            
            card.innerHTML = `
                <img src="${show.image.medium}" class="card-img-top" alt="${show.name}">
                <div class="card-body">
                    <h5 class="card-title">${show.name}</h5>
                    <p class="card-text">Genre: ${show.genres}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Premiere: ${show.premiered}</li>
                    <li class="list-group-item">Rating: ${show.rating.average}</li>
                    <li class="list-group-item">Status: ${show.status}</li>
                </ul>
                <div class="card-body">
                    <a href="${show.officialSite}" class="btn btn-primary" >go to website</a>
                    <a href="./page2.html?id=${show.id}" class="btn btn-success" style="margin-left: 10px;">go to detail</a>
                </div>`;
            
            cardsContainer.append(card);
        });
    })
    


fetch(url)
    .then(response => response.json())
    .then(data => {
        showsData = data;
        displayShows(showsData);
    });

let searchInput = document.getElementById("search");
let searchButton = document.getElementById("searchbtn");

searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        const filteredShows = showsData.filter(show => show.name.toLowerCase().includes(searchTerm));
        displayShows(filteredShows);
    } else {
        displayShows(showsData); 
    }
});

function displayShows(shows) {
    cardsContainer.innerHTML = "";
    shows.forEach(show => {
        const card = document.createElement("div");
        card.className = 'card';
        card.style.width = '290px';
        card.style.marginTop = '20px';
        
        card.innerHTML = `
            <img src="${show.image.medium}" class="card-img-top" alt="${show.name}">
            <div class="card-body">
                <h5 class="card-title">${show.name}</h5>
                <p class="card-text">Genre: ${show.genres}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Premiere: ${show.premiered}</li>
                <li class="list-group-item">Rating: ${show.rating.average}</li>
                <li class="list-group-item">Status: ${show.status}</li>
            </ul>
            <div class="card-body">
                <a href="${show.officialSite}" class="btn btn-primary">Go to website</a>
                <a href="./page2.html?id=${show.id}" class="btn btn-success" style="margin-left: 10px;">Go to detail</a>
            </div>`;
        
        cardsContainer.append(card);
    });
}
