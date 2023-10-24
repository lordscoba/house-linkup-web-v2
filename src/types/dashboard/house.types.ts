export interface UploadHouseInterface {
  full_Name: string;
  email: string;
  address: string;
  state: string;
  town: string;
  local_government: string;
  house_type: string;
  price: number | any;
  status: string;
  description: string;
  //   poster: string;
  totalNum_ofToilet: number | any;
  totalNum_ofRooms: number | any;
  totalNum_ofKitchen: number | any;
  totalNum_ofBathroom: number | any;
  totalNum_ofParlor: number | any;
  image: string[];
  token: string;
}

export interface UploadImageInterface {
  image: string;
}

export interface UserHouseUploadsInterface {
  token: string;
}

export interface UpdateHouseInterface {
  state: string;
  token: string;
  local_government: string;
  town: string;
  house_type: string;
  price: number;
  description: string;
  totalNum_ofToilet: number;
  totalNum_ofRooms: number;
  totalNum_ofKitchen: number;
  totalNum_ofBathroom: number;
  totalNum_ofParlor: number;
  houseId: string;
}

export interface DeleteHouseInterface {
  token: string;
  houseId: string;
}

export interface UpdateHouseImageInterface {
  houseId: string;
  imageId: string;
  token: string;
  image: string | any;
}

export interface DeleteHouseImageInterface {
  token: string;
  imageId: string;
  houseId: string;
}
