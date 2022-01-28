import {createStore} from 'vuex';
import coachesModule from './modules/coaches/index'

export const store = createStore({
    modules:{
        coaches: coachesModule
    },
    state(){
        return {
            userId : 'c3'
        } as {userId:string}
    }
})