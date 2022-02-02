import {ActionTypes} from '../action-types'


  type SearchRepositoryAction = {
    type: ActionTypes.SEARCH_REPOSITORIES;
  };
  
  type SearchRepositorySuccessAction = {
    type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
  };
  
  type SearchRepositoryErrorAction = {
    type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
    payload: string;
  };
  
  export type Action =
    | SearchRepositoryAction
    | SearchRepositorySuccessAction
    | SearchRepositoryErrorAction;