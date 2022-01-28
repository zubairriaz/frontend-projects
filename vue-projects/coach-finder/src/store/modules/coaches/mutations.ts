import { Coach, CoachState } from "@/interfaces/Coaches";

export default {
  registerCoach(state: CoachState, payload: Coach): void {
    state.coaches.push(payload);
  },
};
