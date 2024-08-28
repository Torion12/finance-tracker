//fetch users
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//delete users
export const deleteUser = ({ key }) => {
  return localStorage.removeItem(key);
};
