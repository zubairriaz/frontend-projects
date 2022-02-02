import { Coach, CoachState, Message, RootState } from "@/interfaces/Coaches";
import { ActionContext } from "vuex";

export default {
    registerCoach(context:ActionContext<CoachState, RootState>, payload:Coach):void{
        const userId: string = context.rootGetters.getUserId;
        fetch(`https://vue-coaches-52d34-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method:'put',
            body:JSON.stringify(payload)
        })
        context.commit('registerCoach', {userId, ...payload});
        
    },
    async sendMesageToCoach(context:ActionContext<CoachState, RootState>, payload:Message):Promise<void>{
        const coachId: string = context.rootGetters.getUserId;
        const response = await fetch(`https://vue-coaches-52d34-default-rtdb.firebaseio.com/requests/${coachId}.json`, {
            method:'post',
            body:JSON.stringify(payload)
        })
        if(!response.ok){
            console.error('An error occurred during fetching the records');
        }
        context.commit('sendCoachMessage', { ...payload, coachId});
        
    },

    async loadCoaches(context:ActionContext<CoachState, RootState>):Promise<void>{
       const response =  await fetch(`https://vue-coaches-52d34-default-rtdb.firebaseio.com/coaches.json`, {
            method:'get',
        })
        const respObj = await response.json();
        const coaches = [];
        for (const key in respObj){
            const res = respObj[key];
            res.id = key;
            coaches.push(res);


        }
        context.commit('setCoaches', coaches);
        
    },

    async loadCoachMessages(context:ActionContext<CoachState, RootState>):Promise<void>{
        const coachId: string = context.rootGetters.getUserId;
        const response = await fetch(`https://vue-coaches-52d34-default-rtdb.firebaseio.com/requests/${coachId}.json`, {
            method:'get',
        })
        if(!response.ok){
            console.error('An error occurred during fetching the records');
        }
        const messageData = await response.json();
        const messages = []
        for(const key in messageData){
            const message = messageData[key];
            message.coachId = coachId;
            messages.push(message);
        }
        context.commit('sendCoachMessage', messages);
        
    },

};