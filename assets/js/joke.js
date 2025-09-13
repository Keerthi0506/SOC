const jokeContainer = document.createElement('div');
jokeContainer.style.border = '2px solid #333';
jokeContainer.style.padding = '20px';
jokeContainer.style.margin = '30px auto';
jokeContainer.style.maxWidth = '400px';
jokeContainer.style.borderRadius = '10px';
jokeContainer.style.background = '#f9f9f9';
jokeContainer.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
jokeContainer.style.textAlign = 'center';


const setupElem = document.createElement('p');
setupElem.style.fontWeight = 'bold';
setupElem.style.fontSize = '1.1em';
const punchlineElem = document.createElement('p');
punchlineElem.style.marginTop = '10px';
punchlineElem.style.color = '#007bff';


const errorElem = document.createElement('p');
errorElem.style.color = 'red';
errorElem.style.display = 'none';


const getJokeBtn = document.createElement('button');
getJokeBtn.textContent = 'Get Joke';
getJokeBtn.style.margin = '10px';
getJokeBtn.style.padding = '8px 16px';
getJokeBtn.style.cursor = 'pointer';

const nextJokeBtn = document.createElement('button');
nextJokeBtn.textContent = 'Next Joke';
nextJokeBtn.style.margin = '10px';
nextJokeBtn.style.padding = '8px 16px';
nextJokeBtn.style.cursor = 'pointer';
nextJokeBtn.disabled = true;


jokeContainer.appendChild(setupElem);
jokeContainer.appendChild(punchlineElem);
jokeContainer.appendChild(errorElem);
jokeContainer.appendChild(getJokeBtn);
jokeContainer.appendChild(nextJokeBtn);
document.body.appendChild(jokeContainer);


async function getJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
}


function displayJoke(joke) {
    if (joke) {
        setupElem.textContent = joke.setup;
        punchlineElem.textContent = joke.punchline;
        errorElem.style.display = 'none';
        nextJokeBtn.disabled = false;
    } else {
        setupElem.textContent = '';
        punchlineElem.textContent = '';
        errorElem.textContent = "Couldn’t fetch a joke, try again!";
        errorElem.style.display = 'block';
        nextJokeBtn.disabled = true;
    }
}

getJokeBtn.addEventListener('click', async () => {
    getJokeBtn.disabled = true;
    displayJoke(null); 
    try {
        const joke = await getJoke();
        displayJoke(joke);
    } catch {
        displayJoke(null);
    }
    getJokeBtn.disabled = false;
});

nextJokeBtn.addEventListener('click', async () => {
    nextJokeBtn.disabled = true;
    displayJoke(null);
    try {
        const joke = await getJoke();
        displayJoke(joke);
    } catch {
        displayJoke(null);
    }
    nextJokeBtn.disabled = false;
});
