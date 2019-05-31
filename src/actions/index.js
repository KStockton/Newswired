export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const getAllBooks = (books) => ({
  type: 'ALL_NOTES',
  books
})