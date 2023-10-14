export interface UserDashboardInterface {
  text: string;
  name: string;
  link: string;
}

export type UserDashboardArray = Array<UserDashboardInterface>;

// interface InteriorInterface {
//   data: string;
// }

export interface UserDashboardDataInterface {
  image: string | any;
  title: string;
  // likeIcon: string | any;
  // locationIcon: string | any;
  interior: string[];
  rating: number;
  reviews: number;
  address: string;
  rentPermonth: number;
}

export type UserDashboardDataArray = Array<UserDashboardDataInterface>;

export interface HouseUploadInterface {
  image: string | any;
  house_type: string;
  state: string;
  city: string;
  full_name: string;
  email: string;
  address: string;
  status: string;
  price: number;
  totalNum_ofToilet: number;
  totalNum_ofRooms: number;
  totalNum_ofKitchen: number;
  totalNum_ofBathroom: number;
  totalNum_ofParlor: number;
}

export type HouseUploadType = Array<HouseUploadInterface>;

interface PosterInterface {
  _id: string;
  full_name: string;
}

export interface FetchedhouseResponseInterface {
  image: string | any;
  house_type: string;
  state: string;
  lga: string;
  town: string;
  // city: string;
  poster: PosterInterface;
  email: string;
  address: string;
  status: string;
  price: number;
  totalNum_ofToilet: number;
  totalNum_ofRooms: number;
  totalNum_ofKitchen: number;
  totalNum_ofBathroom: number;
  totalNum_ofParlor: number;
}

export type FetchedHouseArrayType = Array<FetchedhouseResponseInterface>;
