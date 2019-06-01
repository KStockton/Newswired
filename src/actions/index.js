export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const getAllBooks = (books) => ({
  type: 'ALL_BOOKS',
  books
})

export const setCategories = (categories) => ({
  type: 'NEWS_CATEGORY',
  categories
})