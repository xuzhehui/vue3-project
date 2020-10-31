<template>
    <div>
        <ColumnList :list="list"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import ColumnList from '@/components/ColumnList.vue'
import { useStore } from 'vuex'
export default defineComponent({
    setup(){
        const store = useStore()
        const list = computed(() => store.state.columns)
        console.log(list)
        return {
            list
        }
    },
    components: { ColumnList }
})

</script>
