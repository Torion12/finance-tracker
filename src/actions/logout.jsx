import { redirect } from "react-router-dom";
import { deleteUser } from "../Helper";
import { toast } from "react-toastify";

export async function logout() {
  deleteUser({
    key: "userName",
  });

  toast.success("Account Delete!");

  return redirect("/");
}
