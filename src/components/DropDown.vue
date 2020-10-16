<template>
    <div class="dropdown" ref="dropdownRef">
        <a class="btn btn-outline-light dropdown-toggle my-2" href="#" @click.prevent='toggle'>{{title}}</a>
        <ul class="dropdown-menu" :style="{display : 'block'}" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup(){
        const dropData = reactive({
            isOpen: false,
            toggle: () => {
                dropData.isOpen = !dropData.isOpen
            }
        })
        const drops = toRefs(dropData)
        const dropdownRef = ref<null | HTMLElement>(null)
        const isOutSide = ref(useClickOutside(dropdownRef))
        watch(isOutSide, (news) => {
            dropData.isOpen = news
        })
        return {
            ...drops,
            dropdownRef
        }
    }
})
</script>
