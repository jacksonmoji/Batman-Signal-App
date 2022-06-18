import { BEGIN_LOADING, END_LOADING } from "../types/loading";

const initialState = {
  loading: false,
};

export const loadingReducers = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case BEGIN_LOADING:
      return { loading: true };
    case END_LOADING:
      return { loading: false };
    default:
      return state;
  }
};
