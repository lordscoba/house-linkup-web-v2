export interface CreateNewRegionInterface {
  region: string;
  state: string;
}

export interface AddStateInterface {
  countryId: string;
  state: string;
}

export interface AddLocalGovInterface {
  countryId: string;
  stateId: string;
  local_government_name: string;
}

export interface AddTownInterface {
  documentId: string | any;
  stateId: string | any;
  localGovId: string | any;
  town_name: string;
}

export interface DeleteStateInterface {
  documentId: string;
  stateId: string;
}

export interface DeleteLocalGovInterface {
  documentId: string | any;
  stateId: string | any;
  localGovId: string | any;
}

export interface DeleteTownInterface {
  documentId: string | any;
  stateId: string | any;
  localGovId: string | any;
  townId: string | any;
}

export interface DeleteCountryInterface {
  documentId: string | any;
}

export interface EditStateInterface {
  documentId: string | any;
  stateId: string | any;
  state_name: string | any;
}

export interface EditLgaInterface {
  documentId: string | any;
  stateId: string | any;
  localGovId: string;
  local_gov_name: string | any;
}

export interface EditTownInterface {
  documentId: string | any;
  stateId: string | any;
  localGovId: string;
  townId: string;
  town_name: string | any;
}
