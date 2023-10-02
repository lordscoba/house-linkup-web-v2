interface DropDownTypes {
  heading: string;
  values: string[];
}

export interface LocationInterface {
  label: string;
  value: String[];
}

export type LocatiionTypesData = Array<LocationInterface>;

export interface HouseTypeInterface {
  houses: Array<DropDownTypes>;
  rent: Array<DropDownTypes>;
}

export type HouseTypeData = Array<HouseTypeInterface>;

export interface PriceInterface {
  label: string;
  value: String[];
}

export type PriceListData = Array<PriceInterface>;

//ADVANTAGES

export interface AdvantagesInterface {
  header: string;
  p: string;
  icon: string | any;
}

export type AdvantagesData = Array<AdvantagesInterface>;

//Reviews
export interface ReviewsInterface {
  icon: string | any;
  p: string;
  name: string;
  rating: Number;
  location: string;
}

export type ReviewsData = Array<ReviewsInterface>;
