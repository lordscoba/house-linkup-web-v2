export interface UploadHouseInterface {
  full_Name: string;
  email: string;
  address: string;
  state: string;
  town: string;
  lga: string;
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
  id: string;
}
