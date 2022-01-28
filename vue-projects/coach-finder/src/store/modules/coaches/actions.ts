import { Coach, CoachState, Message } from "@/interfaces/Coaches";
import { ActionContext } from "vuex";

export default {
    registerCoach(context:ActionContext<CoachState, CoachState>, payload:Coach):void{
        const userId: string = context.rootGetters.userId;
        context.commit('registerCoach', {userId, ...payload});
        
    },
    sendMesageToCoach(context:ActionContext<CoachState, CoachState>, payload:Message):void{
        const coachId: string = context.rootGetters.userId;
        context.commit('sendCoachMessage', { ...payload, coachId});
        
    },
};