import { CoachState } from "../../../interfaces/Coaches";
export default {
  getCoaches(state: any): CoachState {
    return state.coaches;
  },

  hasCoaches(state: any): boolean {
    return state.coaches && state.coaches.length > 0;
  },
};
