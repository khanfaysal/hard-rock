//async-await use
 /* const searchSong = async() =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    // load data
    const res = await fetch(url);
    const data = await res.json()
    displaySongs(data.data)
} */
// directly fetch use with then
 const searchSong = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    // load data
    fetch(url)
   .then(res => res.json())
   .then(data => displaySongs(data.data)) 
//    .catch(error => displayError('Please try again'))
   .catch(error => alert('Please try again later.'))
}  
const displaySongs = songs =>{
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = '';
    songs.forEach(song => {
        //  console.log(song);
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
                <source src="${song.preview}" type="audio/mpeg">
            </audio>
        </div>
            <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        `;
        songContainer.appendChild(songDiv);
    });
}
// asynchronous await way getLyric code
//  const getLyric = async (artist, title) =>{
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
//     // error check in async-await start
//     try{
//         const res = await fetch(url)
//         const data =  res.json();
//         displayLyrics(data.lyrics);
//     }
//     catch(error){
//         console.log('sorry to display lyrics try again !');
//     }
//         // error check in async-await end

// }
//     // const res = await fetch(url)
//     // const data =  res.json();
//     // displayLyrics(data.lyrics);
// }
// const displayLyrics = lyrics =>{
//     const lyricsDiv = document.getElementById('song-lyrics');
//     lyricsDiv.innerText = lyrics; 

// }
// // normal way 
const getLyric = (artist, title) =>{
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayLyrics(data.lyrics))
}
const displayLyrics = lyrics =>{
    const lyricsDiv = document.getElementById('song-lyrics');
    lyricsDiv.innerText = lyrics;

}
//error display check
/* const displayError = error =>{
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
} */