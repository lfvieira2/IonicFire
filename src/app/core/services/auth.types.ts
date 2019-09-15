export enum AuthProvider {
  Email,
  Facebook
}

// serve de entrada para os métodos authService
export interface User {
  name?: string;
  email: string;
  password: string;
}

export interface AuthOptions {
  isSignIn: boolean;
  provider: AuthProvider;
  user: User;
}
