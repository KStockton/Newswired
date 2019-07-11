export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const getAllBooks = (books) => ({
  type: 'ALL_BOOKS',
  books
})

export const set = (category) => ({
  type: 'SET_NEWS_CATEGORY',
  category
})

export const getTopTravel = (travel) => ({
  type: 'ALL_TRAVEL',
  travel
})

export const hasErrored = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const getSportsNews = (sports) => ({
  type: 'ALL_SPORTS',
  sports
})

export const getTopNews = (news) => ({
  type: 'ALL_TOP_NEWS',
  news
})

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})