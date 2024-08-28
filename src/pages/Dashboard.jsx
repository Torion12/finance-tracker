import { useLoaderData } from "react-router-dom";
//import from helper
import { fetchData } from "../Helper";
import { Intro } from "../components/Intro";
import { toast } from "react-toastify";

export function dashBoardLoader() {
  const userName = fetchData("userName");

  return { userName };
}

export async function dashBoardLoaderAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    throw Error("Your DONE!");
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (error) {
    throw new Error("There was a Problem Creating your Account!");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <>{userName ? <h2>{userName} </h2> : <Intro />}</>;
};

export default Dashboard;
