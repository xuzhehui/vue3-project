<template>
    <div>
        <nav class="navbar navbar-dark bg-primary mb-4 px-4 text-center">
            <a class="navbar-brand" href="#" @click="back">行者</a>
            <ul v-if="!user.isLogin" class="list-inline mb-0">
                <li class="list-inline-item">
                    <router-link class="btn btn-outline-light my-2" to='/login'>登录</router-link>
                </li>
                <li class="list-inline-item">
                    <router-link class="btn btn-outline-light my-2" to='/login'>注册</router-link>
                </li>
            </ul>

            <ul v-else class="list-inline-item mb-0">
                <li class="list-inline-item">
                    <drop-down :title="`你好 ${user.name}`">
                        <drop-down-item><a href="#" class="dropdown-item">新建文章</a></drop-down-item>
                        <drop-down-item disabled><a href="#" class="dropdown-item">编辑文章</a></drop-down-item>
                        <drop-down-item><a href="#" class="dropdown-item">退出登录</a></drop-down-item>
                    </drop-down>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import DropDown from '@/components/DropDown.vue'
import DropDownItem from '@/components/DropDownItem.vue'
export interface UserProps{
    isLogin: boolean;
    name: string;
    id?: number;
}
export default defineComponent({
    name: 'Header',
    components: {
        DropDown,
        DropDownItem
    },
    props: {
        user: {
            type: Object as PropType<UserProps>,
            required: true
        }
    },
    setup(){
        const router = useRouter()
        const back = () => {
            router.push({
                path: '/',
                params: {
                    id: 1
                }
            })
        }
        return {
            back
        }
    }
})
</script>

<style lang="scss" scoped>

</style>
