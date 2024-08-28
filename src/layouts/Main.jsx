import { Outlet, useLoaderData } from "react-router-dom";
//import from helper
import { fetchData } from "../Helper";
import Nav from "../components/Nav";

export function mainLoader() {
  const userName = fetchData("userName");

  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <main>
        <Nav userName={userName} />
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
