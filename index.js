const searchSection = document.getElementById("searchSection");

const fetchSongs = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=charlie")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data[0]);
      for(let i = 0; i < data.data.length; i++) {
        searchSection.innerHTML += `
            <div class="card" style="width: 10rem;">
                <img src=${data.data[i].album.cover_medium} class="card-img-top w-100 p-1" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.data[i].album.title}</h5>
                    <p class="card-text">${data.data[i].artist.name}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`
      }
    });
};

fetchSongs();
