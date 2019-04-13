import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        language: 'English',
    },
	mutations: {
        setLanguage(state){
            if(state.language == 'English'){
                state.language = 'Русский';
            }else{
                state.language = 'English';
            }
        },
    },
	actions: {
        setLanguage({ commit }){
            commit('setLanguage');
        }
    }
});
