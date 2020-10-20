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
import { defineComponent } from 'vue'
export default defineComponent({
    props: {},
    emits: ['form-submit'],
    setup (props, context) {
        const submitForm = () => {
            context.emit('form-submit', true)
        }

        return {
            submitForm
        }
    }

})
</script>

<style lang="scss">

</style>
