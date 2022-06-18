import { BEGIN_LOADING, END_LOADING } from "../types/loading";

export const beginLoading = () => ({
  type: BEGIN_LOADING,
});

export const endLoading = () => ({
  type: END_LOADING,
});
