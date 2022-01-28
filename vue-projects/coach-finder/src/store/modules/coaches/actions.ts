import { Coach, CoachState } from "@/interfaces/Coaches";
import { ActionContext } from "vuex";

export default {
    registerCoach(context:ActionContext<CoachState, CoachState>, payload:Coach):void{
        const userId: string = context.rootGetters.userId;
        context.commit('registerCoach', {userId, ...payload});
        
    }
};