import { combineReducers } from "redux";
import RepositoriesReducer from './RespositoriesReducer';

const reducers = combineReducers({
    repositories:RepositoriesReducer
})
export default reducers
export type RootReducer = ReturnType<typeof reducers>;

