import { RouterProvider } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";
import { router } from "@/Router";

export const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};
