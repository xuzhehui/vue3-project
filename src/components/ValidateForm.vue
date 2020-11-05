<template>
    <form>
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name='submit'>
                <a href="#" class="btn btn-primary">提交</a>
            </slot>
        </div>
    </form>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
type ValueDataFunc = () => boolean
export default defineComponent({
    props: {},
    emits: ['form-submit'],
    setup (props, context) {
        let subscribe: ValueDataFunc[] = []
        const submitForm = () => {
            const result = subscribe.map(row => row()).every(m => m)
            context.emit('form-submit', result)
        }
        const callback = (func?: ValueDataFunc|any) => {
            subscribe.push(func)
        }
        emitter.on('form-item-created', callback)
        onUnmounted(() => {
            emitter.off('form-item-created', callback)
            subscribe = []
        })
        return {
            submitForm
        }
    }
})
</script>

<style lang="scss">

</style>
