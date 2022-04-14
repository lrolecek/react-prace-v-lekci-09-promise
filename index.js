'use strict';

// opakování fetch a promise
fetch('https://swapi.dev/api/people/')
.then(response => response.json())
.then(data => {
	console.table(data.results);
})