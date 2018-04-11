<template>
    <div class="login">
       <div class="ipts">
         <input class="account" type="text" v-model="account"/>
         <input class="password" type="password" v-model="password"/>
       </div>
      <div class="submit" @click="submit" :class="{'sub-act':isAct}">
        提交
      </div>
    </div>
</template>

<script>
    import api from '@/api/index'
    export default {
        name: "login",
      data(){
          return{
            account:'',
            password:''
          }
      },
      methods:{
        submit(){
          let vm=this;
          this.$axios.post(api.login,vm.$qs.stringify({
            username: vm.account,
            password: vm.password
          })).then(res=>{
              console.log(res.data)
          })
         // console.log('account:'+this.account+'password:'+this.password)
        }
      },
      mounted(){
          console.log(api)
      },
      computed:{
        isAct(){
          if(this.account!=''&&this.password!=''){
            return true
          }else {
            return false
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .login{
    .ipts{
       input{display: block;width: 80vw;margin: 5vw auto;height: 10vw}
      .account{border: 1px solid #ddd;}
      .password{border: 1px solid #ddd;}
    }
    .submit{width: 80vw;height: 10vw;margin: 20vw auto;background-color: darkgray;line-height: 10vw;}
    .sub-act{background-color: #007aff;color: #ffffff}
  }

</style>
