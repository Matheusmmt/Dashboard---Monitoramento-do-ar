import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos para o TypeScript não reclamar
type UserRole = 'admin' | 'visitor';

interface User {
  name: string;
  role: UserRole;
  avatar: string; // Iniciais para o avatar
}

interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: UserRole) => {
    // Simulando dados do usuário baseado no papel escolhido
    setUser({
      name: role === 'admin' ? 'Administrador IGE' : 'Visitante Universitário',
      role: role,
      avatar: role === 'admin' ? 'AD' : 'VI',
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto mais fácil
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}