import { useRouteError, Link, useNavigate } from "react-router-dom";
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
export const ErrorPage = () => {
  const error = useRouteError();
  const Navigate = useNavigate();

  return (
    <div className="error">
      <h1>Uh oh! We've got a Problem</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => Navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Home</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <HomeIcon width={20} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
};
