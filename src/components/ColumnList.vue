<template>
    <div>
        <div class="row">
            <div v-for="columns of columnList" :key="columns.id" class='col-4 mb-4'>
                <div class="card h-100 shadow" >
                    <div class="card-body text-center">
                        <img :src="columns.avatar" :alt="columns.title" class="rounded-circle border border-light w-25 my-3">
                        <h5 class="card-title">{{columns.title}}</h5>
                        <p class="card-text text-left">{{columns.description}}</p>
                        <a href="#" class="btn btn-outline-primary">进入专题</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue'
export interface ColumnsProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}
export default defineComponent({
    name: 'ColumnList',
    props: {
        list: {
            type: Array as PropType<ColumnsProps[]>,
            required: true
        }
    },
    setup(props){
        const columnList = computed(() => {
            return props.list.map(column => {
                if (!column.avatar){
                    column.avatar = require('@/assets/logo.png')
                }
                return column
            })
        })
        return {
            columnList
        }
    }
})
</script>

<style lang="scss" scoped>

</style>
