import { createStore } from 'vuex'
import { columnsData, ColumnsProps, userData, UserProps } from '../testData'

export interface GlobalDataProps{
    columns: ColumnsProps[];
    user: UserProps;
}
const store = createStore<GlobalDataProps>({
    state: {
        columns: columnsData,
        user: userData
    },
    mutations: {
        login(state){
            state.user.isLogin = true
        },
        loginOut(state){
            state.user.isLogin = false
        }
    },
    getters: {
        bigColumns(state){
            return state.columns.filter(c => c.id > 2).length
        }
    }
})
export default store
