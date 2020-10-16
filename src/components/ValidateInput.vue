<template>
    <div>
        <input @blur="valiDateInput" v-model="inputRef.value" class="form-control" :class="{'is-invalid':inputRef.error}" type="text">
        <div v-show="inputRef.error" class="invalid-feedback" >{{inputRef.message}}</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType, reactive } from 'vue'
    interface RuleProps {
        type: 'required' | 'email';
        message: string;
    }
    export type RulesProps = RuleProps[];
    export default defineComponent({
        props: {
            rules: Array as PropType<RulesProps>
        },
        setup(props){
            const emailRule = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
            const inputRef = reactive({
                value: '',
                error: false,
                message: ''
            })
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
                }
            }
            return {
                inputRef,
                valiDateInput
            }
        }
    })

</script>

<style lang='scss'>

</style>
