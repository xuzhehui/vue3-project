<template>
    <div>
        <validate-form @form-submit='submitForm'>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">邮箱地址{{email}}</label>
                <ValidateInput ref='inputRef' v-model="email" placeholder='请输入邮箱地址' :rules="rules" type='text'></ValidateInput>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">密码</label>
                <ValidateInput v-model="password" placeholder='请输入密码' :rules="passwordRules" type='password'></ValidateInput>
            </div>
            <template #submit>
                <span class="btn btn-danger">submit</span>
            </template>
        </validate-form>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProps } from '@/components/ValidateInput.vue'
import { useRouter } from 'vue-router'
import ValidateForm from '@/components/ValidateForm.vue'
import store from '@/store/store'
export default defineComponent({
    setup(){
        const rules: RulesProps = [
            { type: 'required', message: '邮箱地址不可为空' },
            { type: 'email', message: '邮箱地址格式错误' }
        ]

        const passwordRules: RulesProps = [
            { type: 'required', message: '密码不可为空' }
        ]
        const router = useRouter()
        const email = ref('')
        const password = ref('')
        const inputRef = ref<any>(null)
        const submitForm = (result: boolean) => {
            if (result) {
                store.commit('login')
                router.push({
                    path: '/'
                })
            }
        }

        return {
            rules,
            email,
            submitForm,
            inputRef,
            password,
            passwordRules
        }
    },
    components: { ValidateForm, ValidateInput }
})
</script>
