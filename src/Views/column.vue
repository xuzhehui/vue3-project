<template>
    <div>
        <pre>{{router}}</pre>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
    setup(){
        const router = useRoute()
        return {
            router
        }
    }
})
</script>
