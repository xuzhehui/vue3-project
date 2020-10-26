<template>
    <div>
        <ColumnList :list="list"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ColumnList, { ColumnsProps } from '@/components/ColumnList.vue'
const columnsData: ColumnsProps[] = [
    {
      id: 1,
      avatar: 'https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603338545&t=c0c5d9814b73a853bee0bb08ea8f45b9',
      title: '表头',
      description: '描述'
    },
    {
      id: 2,
      title: '表头2',
      description: '描述2'
    },
    {
      id: 2,
      avatar: 'https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603338545&t=c0c5d9814b73a853bee0bb08ea8f45b9',
      title: '表头2',
      description: '描述2'
    },
    {
      id: 2,
      avatar: 'https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603338545&t=c0c5d9814b73a853bee0bb08ea8f45b9',
      title: '表头2',
      description: '描述2'
    }
]
export default defineComponent({
    setup(){
        return {
            list: columnsData
        }
    },
    components: { ColumnList }
})

</script>
