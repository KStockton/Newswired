export const loadState = () => {
  return localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
};

export const saveState = (state) => {
  const reduxStateTree = JSON.stringify(state);
  localStorage.setItem('reduxState', reduxStateTree);
};