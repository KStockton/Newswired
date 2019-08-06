export const loadState = () => {
  return localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
};

export const saveState = (state) => {
  const categoriesState = JSON.stringify(state.categories);
  localStorage.setItem('reduxState', categoriesState);
};