<template>
    <div>
       <router-link>
         <div>
           <slot name="icon"></slot>
           <slot></slot>
           <div class="dd-right-arrow"></div>
         </div>
       </router-link>
    </div>
</template>

<script>
    export default {
        name: "dd-cell",
        data(){
            return{}
        },
        methods:{}
    }
</script>

<style scoped>

</style>
