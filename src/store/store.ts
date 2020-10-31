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
    }
})
console.log(store)
export default store
