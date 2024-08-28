import { Form, NavLink } from "react-router-dom";
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete User and all Data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete</span>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
