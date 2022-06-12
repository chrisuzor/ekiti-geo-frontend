import {createStore} from 'vuex'


const state = {
    username: null
}

export default createStore({
    state,
    getters: {
        username: (state) => {

            return state.username;

        }
    },
    actions: {
        username(context, username) {
            context.commit('username', username )
        }
    },
    mutations: {
        username(state, username) {
            state.username = username
        }
    }
});