export interface RegisterInterface {
  full_name: string;
  email: string;
  password: string;
  username: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface forgotPasswordInterface {
  email: string;
}

export interface resetPasswordInterface {
  password: string;
  token: string;
}
