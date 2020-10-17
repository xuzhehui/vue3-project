<template>
    <form>
        <slot name="default"></slot>
        <div class="submit-area">
            <slot name='submit'>
                <a href="#" class="btn btn-primary">提交</a>
            </slot>
        </div>
    </form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {}
})
</script>

<style lang="scss">

</style>
