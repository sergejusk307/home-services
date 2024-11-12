import { createContext, useContext } from 'react';
import { PropsWithChildren } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { User } from '@/components/user/types';

interface UserContextValue {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(UserContext);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  const login = (user: User) => {
    if (!user) return;

    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
