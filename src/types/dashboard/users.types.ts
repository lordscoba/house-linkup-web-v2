export interface PageInterface {
  pageNumber: number;
}

export interface DeleteUserInterface {
  _id: string;
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
}

export interface IdInterface {
  id: string;
}
