<template>
    <div>
        {{bigNum}}
        <ColumnList :list="list"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import ColumnList from '@/components/ColumnList.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store/store'
export default defineComponent({
    setup(){
        const store = useStore<GlobalDataProps>()
        const list = computed(() => store.state.columns)
        const bigNum = computed(() => store.getters.bigColumns)
        return {
            list,
            bigNum
        }
    },
    components: { ColumnList }
})

</script>
