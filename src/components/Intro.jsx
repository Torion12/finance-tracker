import { Form, useFetcher } from "react-router-dom";
import chart from "../assets/illustration.jpg";
import { UserPlusIcon } from "@heroicons/react/24/solid";

export const Intro = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today!
        </p>
        <fetcher.Form method="post" className="grid-sm">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your Name ?"
            aria-label="Your name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button className="btn btn--dark" disabled={isSubmitting}>
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </fetcher.Form>
      </div>
      <img src={chart} alt="person with money" width="600px" />
    </div>
  );
};
