<template>
    <li class="dropdown-option"
        :class="{'is-disabled' : disabled}"
    >
        <slot></slot>
    </li>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        disabled: {
            type: Boolean,
            required: false
        }
    }

})
</script>

<style lang="scss" >
.dropdown-option.is-disabled *{color:gray;pointer-events:none;background:transparent;cursor:not-allowed;}
</style>
