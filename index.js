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
            <div class="card bg-secondary m-1 col-lg-3 col-md-4 col-sm-6">
                <img src=${data.data[i].album.cover_big} class="card-img-top p-1" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.data[i].album.title}</h5>
                    <p class="card-text">${data.data[i].artist.name}</p>
                </div>
            </div>
            `
      }
    });
};
