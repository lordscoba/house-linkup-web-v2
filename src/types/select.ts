export interface TownsInterface {
  town_name: string;
  _id: string;
}

export interface LocalGovInterface {
  _id: string;
  local_government_name: string;
  towns: Array<TownsInterface>;
}

export type LocalGovArray = Array<LocalGovInterface>;

export interface StateInterface {
  _id: string;
  state: string;
  local_government: Array<LocalGovInterface>;
}

export type stateArray = Array<StateInterface>;

export interface AdminDashboardInterface {
  _id: string;
  region: string;
  states: Array<StateInterface>;
}

export type RegionArray = Array<AdminDashboardInterface>;
