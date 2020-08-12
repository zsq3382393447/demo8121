<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    console.log(process.env)
    axios.get("/api/v5/getuser").then((res)=>{
      console.log(res)
    })
  }
}
</script>
