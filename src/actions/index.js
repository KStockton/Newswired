export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const getAllBooks = (books) => ({
  type: 'ALL_BOOKS',
  books
})

export const setCategories = (category) => ({
  type: 'SET_NEWS_CATEGORY',
  category
})

export const getTopTravel = (travel) => ({
  type: 'ALL_TRAVEL',
  travel
})