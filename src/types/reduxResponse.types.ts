export interface ResponseType {
  loading: boolean;
  success: boolean;
  error: boolean;
  serverResponse: {};
  serverError: {};
}

export const initialStateRequest: ResponseType = {
  loading: false,
  success: false,
  error: false,
  serverResponse: {},
  serverError: {},
};
