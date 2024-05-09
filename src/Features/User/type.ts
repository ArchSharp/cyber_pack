export interface IServiceEnquiry {
  Name: string;
  Email: string;
  Country: string;
  Questions: string;
  IsGrantCyberPack: boolean;
}

export interface IUserState {
  isLoading: boolean;
  userId: string;
  isDefaultPassword: boolean;
  isAuth?: boolean;
  header?: string;
}
