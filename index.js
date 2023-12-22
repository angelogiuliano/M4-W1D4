const searchField = document.getElementById("searchField");
const searchSection = document.getElementById("searchSection");
let valoreRicerca;

searchField.addEventListener("change", function () {
  valoreRicerca = searchField.value;
  fetchSongs(valoreRicerca);
});

const fetchSongs = (ricerca) => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${ricerca}`)
    .then((res) => res.json())
    .then((data) => {
      searchSection.innerHTML = "";
      console.log(data.data);
      for (let i = 0; i < data.data.length; i++) {
        searchSection.innerHTML += `
            <div class="card" style="width: 10rem;">
                <img src=${data.data[i].album.cover_medium} class="card-img-top w-100 p-1" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.data[i].album.title}</h5>
                    <p class="card-text">${data.data[i].artist.name}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `
      }
    });
};
