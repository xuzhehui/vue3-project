<template>
    <div>
        <input v-if="inputRef.type != 'textarea'" v-bind='$attrs' @blur="valiDateInput" :value="inputRef.value" @input='updateValue' class="form-control" :class="{'is-invalid':inputRef.error}">
        <input v-if="inputRef.type === 'textarea'" v-bind='$attrs' @blur="valiDateInput" :value="inputRef.value" @input='updateValue' class="form-control" :class="{'is-invalid':inputRef.error}">
        <div v-show="inputRef.error" class="invalid-feedback" >{{inputRef.message}}</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, PropType, reactive } from 'vue'
    import { emitter } from './ValidateForm.vue'
    interface RuleProps {
        type: 'required' | 'email';
        message: string;
    }
    export type RulesProps = RuleProps[];
    export default defineComponent({
        props: {
            rules: Array as PropType<RulesProps>,
            // type: String as PropType<TypeProps>,
            modelValue: String
        },
        // 非props属性
        inheritAttrs: false,
        setup(props, context){
            const emailRule = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
            const inputRef = reactive({
                value: props.modelValue || '',
                error: false,
                message: ''
            })
            const updateValue = (e: KeyboardEvent) => {
                const targetValue = (e.target as HTMLInputElement).value
                inputRef.value = targetValue
                context.emit('update:modelValue', inputRef.value)
            }
            const valiDateInput = () => {
                if (props.rules) {
                    const allRolled = props.rules.every(rule => {
                        let pass = true
                        inputRef.message = rule.message
                        switch (rule.type) {
                            case 'required':
                                pass = (inputRef.value !== '')
                                break
                            case 'email':
                                pass = emailRule.test(inputRef.value)
                                break
                            default:
                                break
                        }
                        return pass
                    })
                    inputRef.error = !allRolled
                    return allRolled
                }
                return true
            }
            onMounted(() => {
                emitter.emit('form-item-created', valiDateInput)
            })
            return {
                inputRef,
                valiDateInput,
                updateValue
            }
        }
    })

</script>

<style lang='scss'>

</style>
