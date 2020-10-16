import { onMounted, onUnmounted, ref, Ref } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isOutsice = ref(false)
    const handler = (e: MouseEvent) => {
        if (elementRef.value){
            if (elementRef.value.contains(e.target as HTMLElement)){
                isOutsice.value = true
            } else {
                isOutsice.value = false
            }
        }
    }
    onMounted(() => {
        document.addEventListener('click', handler)
    })
    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })

    return isOutsice
}

export default useClickOutside
