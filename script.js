const btnEl = document.getElementById('jokeBtn')
const jokeEl = document.getElementById('joke')

// Event listener

btnEl.addEventListener('click', generateJoke)

//  async function to fetch joke from API
async function generateJoke() {
  const config = {
    // we use head method to fetch base on API advise
    headers: {
      Accept: 'application/json',
    },
  }
  const res = await fetch('https://icanhazdadjoke.com/', config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}
// generateJoke()
