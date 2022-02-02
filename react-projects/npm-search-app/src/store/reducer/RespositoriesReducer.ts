import { ActionTypes } from "../action-types";
import { Action } from "../actions";

type RepositoryState = {
  isLoading: boolean;
  error: string | null;
  data: string[];
};

const reducer = (
  state: RepositoryState = { isLoading: false, error: null, data: [] },
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { isLoading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { isLoading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { isLoading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
