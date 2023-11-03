export interface PageInterface {
  pageNumber: number;
}

export interface DeleteUserInterface {
  _id: string;
  token: string | any;
}

export interface ImageInterface {
  url: string;
}

export interface TableInterface {
  image: Array<ImageInterface>;
  email: string;
  full_name: string;
  position: string;
  // startDate: string;
  active: boolean;
  blocked: boolean;
  de_activated: boolean;
  location: string;
  createdAt: string;
  role: string;
  phone_number?: string | any;
  username?: string | any;
  _id: any;
}

export type TableArrays = Array<TableInterface>;

export interface TableDataInterface {
  image: Array<ImageInterface>;
  email: string;
  full_name: string;
  // position: string;
  active: boolean;
  blocked: boolean;
  de_activated: boolean;
  location: string;
  createdAt: string;
  index: any;
  list: TableArrays;
  isAdmin?: boolean;
  role: string;
  setList: (a: any) => void;
  _id: any;
  username: string;
  phone_number: string;
  token?: string;
}

export type TableDataArray = Array<TableDataInterface>;

export interface IdInterface {
  id: string;
  // token: string;
}

export interface StringAndTokenInterface {
  userId: string;
  token: string;
}

export interface UploaderUserDetailsInterface {
  active: boolean;
  blocked: boolean;
  de_activated: boolean;
  email: string;
  full_name: string;
  image: Array<ImageInterface>;
  isAdmin: boolean;
  role: string;
  username: string;
  _id: string;
  location: string;
}

export interface UploaderDetailsInterface {
  _id: string;
  count: number;
  userDetails: UploaderUserDetailsInterface;
}

export type UploaderDetailsArray = Array<UploaderDetailsInterface>;
