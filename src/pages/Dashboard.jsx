import { useLoaderData } from "react-router-dom";
//import from helper
import { createdNewBudget, fetchData, waait } from "../Helper";
import { Intro } from "../components/Intro";
import { toast } from "react-toastify";
import { AddBudgetForm } from "../components/AddBudgetForm";

export function dashBoardLoader() {
  const userName = fetchData("userName");

  return { userName };
}

async function dashBoardLoaderAction({ request }) {
  await waait();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  console.log(_action);

  //new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (error) {
      throw new Error("There was a Problem Creating your Account!");
    }
  }

  if (_action === "createdBudget") {
    try {
      createdNewBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success(`New Budget Created`);
    } catch (error) {
      throw new Error("There was a Problem Creating your Budget");
    }
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h2>
            Welcome Back, <span className="accent">{userName}</span>
          </h2>
          <div className="grid-sm">
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
