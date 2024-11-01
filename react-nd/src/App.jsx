import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";
import { router } from "@/Router";

const App = () => {
  return (
    <StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </StrictMode>
  );
};

export default App;
