import React, { createContext, useContext, useState } from "react";

// Add a type for the context
export const AuthContext = createContext<{ authUser: string | null; setAuthUser: React.Dispatch<React.SetStateAction<string | null>> }>({} as any);

export const useAuthContext = () => {
	return useContext(AuthContext);
};

// Specify the type of children
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const storedUser = localStorage.getItem("chat-user");
	const [authUser, setAuthUser] = useState<string | null>(storedUser !== null ? JSON.parse(storedUser) : null);
	
	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};