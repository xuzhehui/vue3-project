<template>
  <div class="container flex-wrap">
      <Header :user='user'/>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header, { UserProps } from '@/components/header.vue'
import Footer from '@/components/footer.vue'
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
  components: { Header, Footer }
})
</script>

<style lang='scss'>
html,body,#app{width:100%;height:100%;
  .flex-wrap{width:100%;height:100%;position:relative;}
  footer{position:absolute;bottom:0;}
}
</style>
