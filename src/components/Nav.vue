<template>
    <nav class="navbar navbar-expand navbar-light">
     <div class="container">
       <router-link to="/" class="navbar-brand"> Home </router-link>
       <div class="collapse navbar-collapse">
         <ul class="navbar-nav ml-auto" v-if="!username">
           <li class="nav-item">
             <router-link to="/login" class="nav-link">Login </router-link>
           </li>
         </ul>
         <ul class="navbar-nav ml-auto" v-if="username">
           <li class="nav-item">
             <router-link to="/parcels" class="nav-link">Parcels </router-link>
           </li>
            <li class="nav-item">
             <router-link to="/login" class="nav-link">Buildings </router-link>
           </li>
            <li class="nav-item">
             <router-link to="/login" class="nav-link">Units </router-link>
           </li>
            <li class="nav-item">
             <a href="javascript:void(0)" @click="handleClick" class="nav-link">Logout </a>
           </li>
         </ul>
       </div>
     </div>
   </nav> 
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Nav',
    methods:{
        handleClick(){
            localStorage.removeItem('token');
             localStorage.removeItem('username');
            this.$store.dispatch('username', null)
            this.$router.push('/')
        }
    },
    computed: {
        ...mapGetters(['username'])
    }
}
</script>
