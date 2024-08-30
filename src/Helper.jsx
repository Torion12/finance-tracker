export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

const createdColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;

  return `${existingBudgetLength * 34} 64% 50%`;
};

//fetch users
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//delete users
export const deleteUser = ({ key }) => {
  return localStorage.removeItem(key);
};

export const createdNewBudget = ({ name, amount }) => {
  const newBudget = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: Date.now(),
    color: createdColor(),
  };

  const existingBudget = fetchData("budgets") ?? [];

  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudget, newBudget])
  );
};
