import { TypedUseSelectorHook, useSelector } from "react-redux";
import {reducer} from '../store'

export const useTypedSelector:TypedUseSelectorHook<reducer.RootReducer> = useSelector;
