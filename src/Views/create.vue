<template>
    <div>
        <validate-form @form-submit='submitForm'>
            <div>{{title}}</div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">文章标题</label>
                <ValidateInput ref='inputRef' v-model="title" placeholder='请输入文章标题' :rules="rules" type='text'></ValidateInput>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">文章内容</label>
                <ValidateInput v-model="content" placeholder='请输入文章内容' :rules="infoRules" type='textarea'></ValidateInput>
            </div>
            <template #submit>
                <span class="btn btn-danger" >submit</span>
            </template>
        </validate-form>
        <input v-model="title" type="text">
    </div>
</template>

<script lang='ts'>
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput, { RulesProps } from '@/components/ValidateInput.vue'
import { defineComponent, reactive, ref, toRefs } from 'vue'
interface PostProps {
    title: string;
    content: string;
    date?: Date;
}
export default defineComponent({
    setup(){
        const rules: RulesProps = [
            { type: 'required', message: '文章标题不可为空' }
        ]

        const infoRules: RulesProps = [
            { type: 'required', message: '文章内容不可为空' }
        ]

        const article = toRefs(reactive<PostProps>({
            title: '',
            content: ''
        }))
        const submitForm = (result: boolean) => {
            if (result) {
                article.title.value = '231335'
            }
        }

        return {
            ...article,
            rules,
            infoRules,
            submitForm
        }
    },
    components: {
        ValidateForm,
        ValidateInput
    }
})
</script>
