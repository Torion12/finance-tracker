import { redirect } from "react-router-dom";
import { deleteUser } from "../Helper";

export async function logout() {
  deleteUser({
    key: "userName",
  });
  return redirect("/");
}
