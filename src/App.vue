<template>
  <div class="container">
      <Header :user='user'/>
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header, { UserProps } from '@/components/header.vue'
const userData: UserProps = {
  isLogin: false,
  name: 'dest'
}
export default defineComponent({
  name: 'App',
  setup(){
    return {
      user: userData
    }
  },
  components: { Header }
})
</script>

<style lang='scss'>
</style>
