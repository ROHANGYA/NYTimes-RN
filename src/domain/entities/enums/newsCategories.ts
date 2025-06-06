enum NewsCategories {
  arts = 'arts',
  automobiles = 'automobiles',
  business = 'business',
  fashion = 'fashion',
  food = 'food',
  health = 'health',
  home = 'home',
  movies = 'movies',
  politics = 'politics',
  realestate = 'real estate',
  science = 'science',
  sports = 'sports',
  technology = 'technology',
  travel = 'travel',
  world = 'world',
}

export function getDbPtypeColumn(): string {
  return Object.entries(NewsCategories)
    .map((value, index) => `'${value[0]}'`)
    .join(',');
}

export default NewsCategories;
