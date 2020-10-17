<template>
  <div class="container">
      <Header :user='user'/>
      <!-- <ColumnList :list="list"/> -->
      <validate-form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">邮箱地址{{email}}</label>
          <ValidateInput v-model="email" placeholder='请输入邮箱地址' :rules="rules" type='text'></ValidateInput>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密码</label>
          <ValidateInput v-model="email" placeholder='请输入密码' :rules="rules" type='password'></ValidateInput>
        </div>
        <template #submit>
          <span class="btn btn-danger">submit</span>
        </template>
      </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import ColumnList, { ColumnsProps } from '@/components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header, { UserProps } from '@/components/header.vue'
import ValidateInput, { RulesProps } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
const userData: UserProps = {
  isLogin: true,
  name: 'dest'
}

// const columnsData: ColumnsProps[] = [
//     {
//       id: 1,
//       avatar: 'https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603338545&t=c0c5d9814b73a853bee0bb08ea8f45b9',
//       title: '表头',
//       description: '描述'
//     },
//     {
//       id: 2,
//       title: '表头2',
//       description: '描述2'
//     },
//     {
//       id: 2,
//       avatar: 'https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603338545&t=c0c5d9814b73a853bee0bb08ea8f45b9',
//       title: '表头2',
//       description: '描述2'
//     },
//     {
//       id: 2,
//       avatar: 'https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603338545&t=c0c5d9814b73a853bee0bb08ea8f45b9',
//       title: '表头2',
//       description: '描述2'
//     }
// ]
export default defineComponent({
  name: 'App',
  setup(){
    const rules: RulesProps = [
      { type: 'required', message: '邮箱地址不可为空' },
      { type: 'email', message: '邮箱地址格式错误' }
    ]
    const email = ref(null)
    return {
      // list: columnsData,
      user: userData,
      rules,
      email
    }
  },
  components: { Header, ValidateInput, ValidateForm }
})
</script>

<style lang='scss'>
</style>
