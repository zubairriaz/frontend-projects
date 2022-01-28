import { Coach, CoachState, Message } from "@/interfaces/Coaches";

export default {
  registerCoach(state: CoachState, payload: Coach): void {
    state.coaches.push(payload);
  },
  sendCoachMessage(state: CoachState, payload: Message): void {
    state.messages.push(payload);
  },
};
