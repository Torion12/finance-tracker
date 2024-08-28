import { useLoaderData } from "react-router-dom";
//import from helper
import { fetchData } from "../Helper";

export function dashBoardLoader() {
  const userName = fetchData("userName");

  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <h1>{userName}</h1>;
};

export default Dashboard;
