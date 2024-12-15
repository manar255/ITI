let username = window.location.search.split('&')[0].split('=')[1];
console.log('lol=>', window.location.search);
let welDiv = document.getElementById('wel')
welDiv.innerHTML = `Welcome, ${username}`;