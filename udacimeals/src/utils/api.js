//const API_ID = process.env.REACT_APP_API_ID
//const APP_KEY = process.env.REACT_APP_APP_KEY

const API_ID = '1b67f2b0'
const APP_KEY = '13170e5bd87dbd5e94d9ba08b036f9ab'

export function fetchRecipes(food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`).then((res) => res.json()).then(({hits}) => hits.map(({recipe}) => recipe))
}
