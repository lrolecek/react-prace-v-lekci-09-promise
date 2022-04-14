'use strict';

// opakování fetch a promise
fetch('https://swapi.dev/api/people/1')
.then((response) => {
	console.log('data jsou tady');
	console.log(response);
});
