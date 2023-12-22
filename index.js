

const fetchSongs = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=sfera')
    .then(res => res.json())
    .then(data => {
        console.log(data.data[0]);
    })
}

fetchSongs()