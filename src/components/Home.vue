<template>

<h3 v-if="username">Hi, {{username}}</h3>
  <h3>Welcome to Ekiti Geo Spatial</h3> 
<h3 v-if="!username"> Log in to view our electronic data </h3>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    computed: {
        ...mapGetters(['username'])
    }
}
</script>