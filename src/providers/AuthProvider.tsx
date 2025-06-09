import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { View } from "lucide-react-native";
import { ActivityIndicator } from "react-native";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading,setLoading] = useState(true)

  useEffect(() => {
    // Fetch initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        setIsAuthenticated(true);
      }
      setLoading(false)
    });

    // Listen for session changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    // Cleanup on unmount
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if(isLoading){
    return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size={"large"} color="#0000ff"/>
    </View>
    )
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
