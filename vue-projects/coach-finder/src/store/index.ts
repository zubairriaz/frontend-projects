import {createStore} from 'vuex';
import coachesModule from './modules/coaches/index'

export const store = createStore({
    modules:{
        coaches: coachesModule
    }
})