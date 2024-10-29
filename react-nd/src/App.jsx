import { UserProvider } from "@/context/UserContext";
import Routes from "@/Routes"

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

export default App;
