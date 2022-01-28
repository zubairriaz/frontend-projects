import { Coach, CoachState, Message } from "../../../interfaces/Coaches";
export default {
  getCoaches(state: CoachState): Coach[] {
    return state.coaches;
  },

  hasCoaches(state: CoachState): boolean {
    return state.coaches && state.coaches.length > 0;
  },

  isCoach(state:CoachState, getters : any, rootState : any, rootGetters: any): void{
       return getters.getCoaches.some((coach:Coach)=>coach.id ==rootGetters.userId )
  },
  getMessages(state: CoachState): Array<Message>{
    return state.messages;
  }


};
